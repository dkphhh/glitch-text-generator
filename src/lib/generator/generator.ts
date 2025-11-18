import { styleText } from './styles/font-variant';
import { coolifyText } from './styles/glitch-style/cool';
import { cursedText } from './styles/glitch-style/cursed';
import { flipText } from './styles/glitch-style/flip';
import { glitchifyText } from './styles/glitch-style/glitch';
import { latinizeText } from './styles/glitch-style/latin';
import { hackifyText } from './styles/glitch-style/hacker';
import { hideText,revealText } from './styles/glitch-style/hidden';
import { confusedText } from './styles/glitch-style/unreadable';
import { upsideDownText } from './styles/glitch-style/upside-down';
import { zalgoGeneration } from './styles/zalgo';
import { ALL_GENERATOR_DATA } from './generatorData';

export const SPECIAL_GENERATORS_STYLE_MAP: Record<string, Style> = {
	'discord-glitch': 'hacker',
	'glitch-font': 'glitch',
	'minecraft-glitch': 'unreadable',
	'roblox-glitch': 'glitch'
};

const SPECIAL_GENERATORS: string[] = Object.keys(SPECIAL_GENERATORS_STYLE_MAP);

export const GENERATOR_URL_PATH_MAP: Record<GeneratorType, string> = Object.entries(
	ALL_GENERATOR_DATA
).reduce(
	(r, item) => {
		const [key, data] = item;
		const k = key as GeneratorType;
		r[k] = data.urlPath;
		return r;
	},
	{} as Record<GeneratorType, string>
);
export const GENERATOR_NAME_MAP: Record<GeneratorType, string> = Object.entries(
	ALL_GENERATOR_DATA
).reduce(
	(r, item) => {
		const [key, data] = item;
		const k = key as GeneratorType;
		r[k] = data.displayName;
		return r;
	},
	{} as Record<GeneratorType, string>
);
export const GENERATOR_SUBTITLE_MAP: Record<GeneratorType, string> = Object.entries(
	ALL_GENERATOR_DATA
).reduce(
	(r, item) => {
		const [key, data] = item;
		const k = key as GeneratorType;
		r[k] = data.subtitle;
		return r;
	},
	{} as Record<GeneratorType, string>
);
export const GENERATOR_DESCRIPTION_MAP: Record<GeneratorType, string> = Object.entries(
	ALL_GENERATOR_DATA
).reduce(
	(r, item) => {
		const [key, data] = item;
		const k = key as GeneratorType;
		r[k] = data.description;
		return r;
	},
	{} as Record<GeneratorType, string>
);

export const GENERATOR_PAGE_TITLE_MAP: Record<GeneratorType, string> = Object.entries(
	ALL_GENERATOR_DATA
).reduce(
	(r, item) => {
		const [key, data] = item;
		const k = key as GeneratorType;
		r[k] = data.pageTitle;
		return r;
	},
	{} as Record<GeneratorType, string>
);

export const GENERATOR_SEO_TITLE_MAP: Record<GeneratorType, string> = Object.entries(
	ALL_GENERATOR_DATA
).reduce(
	(r, item) => {
		const [key, data] = item;
		const k = key as GeneratorType;
		r[k] = data.seoTitle;
		return r;
	},
	{} as Record<GeneratorType, string>
);

// 仅包含样式转换的生成器列表
export const STYLE_LIST: string[] = Object.keys(GENERATOR_NAME_MAP).filter(
	(n) => !SPECIAL_GENERATORS.includes(n)
);

// 所有生成器的 key 列表
export const ALL_GENERATOR_KEY = [...Object.keys(ALL_GENERATOR_DATA)];

/**
 * 将输入文本按指定样式转换并返回转换结果。
 *
 * 支持的样式包括：'cool', 'cursed', 'flip', 'glitch', 'latin', 'hacker',
 * 'hidden', 'unreadable', 'upsideDown', 'zalgo' 以及通过 font-variant 提供的其它样式。
 *
 * @param text - 要转换的原始文本
 * @param style - 目标样式（类型为 Style）。当为 'zalgo' 时会使用 zalgo 生成器；
 *                对于未显式列出的样式，会回退到通用的 styleText 处理。
 * @param zalgoOption - 当 style 为 'zalgo' 时生效的选项对象（可选）。
 *                      目前仅支持 intensity 字段，用于控制上/中/下三类 zalgo 符号的强度；
 *                      默认 intensity 为 1。
 * @returns 转换后的文本字符串
 *
 * @example
 * const s1 = stylizeText('Hello', 'cool');
 * const s2 = stylizeText('Hello', 'zalgo', { intensity: 2 });
 */
export function stylizeText(
	text: string,
	style: Style,
	zalgoOption: {
		intensity: number;
	} = {
		intensity: 2
	}
): string {
	let result: string;
	switch (style) {
		case 'cool':
			result = coolifyText(text);
			break;
		case 'cursed':
			result = cursedText(text);
			break;
		case 'flip':
			result = flipText(text);
			break;
		case 'glitch':
			result = glitchifyText(text);
			break;
		case 'latin':
			result = latinizeText(text);
			break;
		case 'hacker':
			result = hackifyText(text);
			break;
		case 'hidden':
			result = hideText(text);
			break;
		case "reveal-hidden":
			result = revealText(text);
			break
		case 'unreadable':
			result = confusedText(text);
			break;
		case 'upsideDown':
			result = upsideDownText(text);
			break;
		case 'zalgo':
			result = zalgoGeneration(
				text,
				zalgoOption.intensity,
				zalgoOption.intensity,
				zalgoOption.intensity
			);
			break;
		default:
			result = styleText(text, style);
			break;
	}

	return result;
}

/**
 * 根据 URL 路径获取对应的生成器类型
 *
 * @param path - URL 路径字符串，例如 'zalgo-text-generator' 'glitch-text-generator'
 * @returns 对应的生成器类型，如果路径无效则返回 'zalgo' 作为默认值
 *
 * @example
 * ```typescript
 * const generator = getGeneratorFromPath('/zalgo-text');
 * // 返回对应的 GeneratorType
 * ```
 */
export function getGeneratorFromPath(path: string): GeneratorType {
	const ALL_URL_PATH = Object.values(GENERATOR_URL_PATH_MAP);

	if (!ALL_URL_PATH.includes(path)) {
		console.error(`Invalid generator path: ${path}. Defaulting to 'zalgo'.`);
		return 'zalgo';
	}

	const generator = Object.entries(GENERATOR_URL_PATH_MAP).find(
		([, urlPath]) => urlPath === path
	)?.[0];

	if (!generator) {
		console.error(`Style not found for path: ${path}. Defaulting to 'zalgo'.`);
		return 'zalgo';
	}

	return generator as GeneratorType;
}

export function getGeneratorStyle(generator: GeneratorType): Style {
	if (SPECIAL_GENERATORS.includes(generator)) {
		return SPECIAL_GENERATORS_STYLE_MAP[generator];
	}

	if (STYLE_LIST.includes(generator)) {
		return generator as Style;
	}

	return 'zalgo';
}

// TODO：再做一个解除生成器效果，恢复成正常文本的功能
