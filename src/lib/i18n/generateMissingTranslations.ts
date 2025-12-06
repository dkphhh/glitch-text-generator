import { readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { LANG_LIST, LANG_MAP } from './const';

type LanguageCode = LangOptions | (string & {});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROJECT_ROOT = resolve(__dirname, '../../..');
const MESSAGES_DIR = resolve(PROJECT_ROOT, 'messages');
const OUTPUT_FILE = resolve(__dirname, 'missing-translations-report.md');
const IGNORED_KEYS = new Set(['$schema']);

type LocaleEntry = {
	locale: LanguageCode;
	keys: Set<string>;
	sourcePath: string | null;
	error?: string;
};

function collectKeys(
	node: unknown,
	prefix: string,
	collector: Set<string>,
	options?: { ignoredKeys?: Set<string> }
): void {
	if (node === null || node === undefined) {
		if (prefix) {
			collector.add(prefix);
		}
		return;
	}

	const nodeType = typeof node;

	if (nodeType === 'string' || nodeType === 'number' || nodeType === 'boolean') {
		if (prefix) {
			collector.add(prefix);
		}
		return;
	}

	if (Array.isArray(node)) {
		if (prefix) {
			collector.add(prefix);
		}
		node.forEach((value, index) => {
			if (value && typeof value === 'object') {
				const key = `${prefix}[${index}]`;
				collectKeys(value, key, collector, options);
			}
		});
		return;
	}

	if (nodeType === 'object') {
		const ignoredKeys = options?.ignoredKeys;
		for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
			if (ignoredKeys?.has(key)) {
				continue;
			}
			const nextPrefix = prefix ? `${prefix}.${key}` : key;
			collectKeys(value, nextPrefix, collector, options);
		}
		return;
	}

	if (prefix) {
		collector.add(prefix);
	}
}

async function loadLocaleFiles(): Promise<LocaleEntry[]> {
	const entries: LocaleEntry[] = [];
	const errors: LocaleEntry[] = [];

	let files: string[] = [];
	try {
		files = await readdir(MESSAGES_DIR);
	} catch (error) {
		throw new Error(
			`Unable to read messages directory at "${MESSAGES_DIR}". ${(error as Error).message}`
		);
	}

	const jsonFiles = files.filter((fileName) => fileName.endsWith('.json'));

	for (const fileName of jsonFiles) {
		const locale = fileName.replace(/\.json$/, '') as LanguageCode;
		const filePath = resolve(MESSAGES_DIR, fileName);
		try {
			const raw = await readFile(filePath, 'utf8');
			const parsed = JSON.parse(raw) as unknown;
			const keys = new Set<string>();
			collectKeys(parsed, '', keys, { ignoredKeys: IGNORED_KEYS });
			entries.push({ locale, keys, sourcePath: filePath });
		} catch (error) {
			errors.push({
				locale,
				keys: new Set(),
				sourcePath: filePath,
				error: (error as Error).message
			});
		}
	}

	for (const locale of LANG_LIST) {
		if (
			!entries.some((entry) => entry.locale === locale) &&
			!errors.some((entry) => entry.locale === locale)
		) {
			errors.push({
				locale,
				keys: new Set(),
				sourcePath: resolve(MESSAGES_DIR, `${locale}.json`),
				error: 'File missing'
			});
		}
	}

	return entries.concat(errors);
}

function createReport(entries: LocaleEntry[]): string {
	const allKeys = new Set<string>();
	const localeMap = new Map<LanguageCode, LocaleEntry>();
	const errors: LocaleEntry[] = [];

	for (const entry of entries) {
		if (entry.error) {
			errors.push(entry);
			localeMap.set(entry.locale, entry);
			continue;
		}
		for (const key of entry.keys) {
			allKeys.add(key);
		}
		localeMap.set(entry.locale, entry);
	}

	const orderedLocales = Array.from(
		new Set<LanguageCode>([...LANG_LIST, ...localeMap.keys()].filter(Boolean))
	);

	const allKeysSorted = Array.from(allKeys).sort((a, b) => a.localeCompare(b));

	const tableRows: string[] = [];
	const detailSections: string[] = [];

	for (const locale of orderedLocales) {
		const entry = localeMap.get(locale) ?? {
			locale,
			keys: new Set<string>(),
			sourcePath: resolve(MESSAGES_DIR, `${locale}.json`),
			error: 'File missing'
		};

		const localeLabel = `${locale} - ${(LANG_MAP as Record<string, string>)[locale] ?? 'Unknown language'}`;

		if (entry.error) {
			tableRows.push(`| ${localeLabel} | – | ⚠️ ${entry.error} |`);
			detailSections.push(`### ${localeLabel}`);
			detailSections.push('');
			detailSections.push(`- Source: ${entry.sourcePath ?? 'unknown'}`);
			detailSections.push(`- Status: ⚠️ ${entry.error}`);
			detailSections.push('');
			continue;
		}

		const missingKeys = allKeysSorted.filter((key) => !entry.keys.has(key));

		if (missingKeys.length === 0) {
			tableRows.push(`| ${localeLabel} | 0 | ✅ All keys present |`);
			detailSections.push(`### ${localeLabel}`);
			detailSections.push('');
			detailSections.push('✅ This locale contains all known translation keys.');
			detailSections.push('');
			continue;
		}

		tableRows.push(`| ${localeLabel} | ${missingKeys.length} | ❌ Missing keys |`);

		detailSections.push(`### ${localeLabel}`);
		detailSections.push('');
		detailSections.push(`- Source: ${entry.sourcePath ?? 'unknown'}`);
		detailSections.push(`- Missing keys: ${missingKeys.length}`);
		detailSections.push('');
		detailSections.push('Missing key list:');
		detailSections.push('');
		for (const key of missingKeys) {
			detailSections.push(`- ${key}`);
		}
		detailSections.push('');
	}

	if (errors.length > 0) {
		detailSections.push('---');
		detailSections.push('');
		detailSections.push('### Error Summary');
		detailSections.push('');
		for (const errorEntry of errors) {
			detailSections.push(
				`- ${errorEntry.locale}: ${errorEntry.error ?? 'Unknown error'} (${errorEntry.sourcePath ?? 'unknown path'})`
			);
		}
		detailSections.push('');
	}

	const reportLines: string[] = [
		'# Missing Translation Keys Report',
		'',
		`- Generated at: ${new Date().toISOString()}`,
		`- Messages directory: \`${MESSAGES_DIR}\``,
		`- Total unique keys discovered: ${allKeys.size}`,
		'',
		'| Locale | Missing count | Status |',
		'| --- | ---: | --- |',
		...tableRows,
		'',
		'---',
		'',
		...detailSections
	];

	return reportLines.join('\n');
}

export async function generateMissingTranslationsReport(): Promise<void> {
	const entries = await loadLocaleFiles();
	const reportContent = createReport(entries);
	await writeFile(OUTPUT_FILE, reportContent, 'utf8');
	console.log(`Missing translation report written to ${OUTPUT_FILE}`);
}

if (import.meta.main) {
	generateMissingTranslationsReport().catch((error) => {
		console.error('Failed to generate missing translation report:', error);
		process.exitCode = 1;
	});
}

await generateMissingTranslationsReport();
