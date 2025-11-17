export const LANG_MAP: Record<LangOptions, string> = {
	en: 'English',
	es: 'Español',
	fr: 'français',
	de: 'Deutsch',
	zh: '中文',
	ja: '日本語',
	ru: 'русский язык',
	pt: 'Português',
	id: 'Bahasa Indonesia',
	ko: '조선어'
};

export const LANG_LIST: LangOptions[] = Object.keys(LANG_MAP) as LangOptions[];
