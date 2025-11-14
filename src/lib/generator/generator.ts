import { styleText } from './styles/font-variant';
import { coolifyText } from './styles/glitch-style/cool';
import { cursedText } from './styles/glitch-style/cursed';
import { flipText } from './styles/glitch-style/flip';
import { glitchifyText } from './styles/glitch-style/glitch';
import { latinizeText } from './styles/glitch-style/latin';
import { hackifyText } from './styles/glitch-style/hacker';
import { hideText } from './styles/glitch-style/hidden';
import { confusedText } from './styles/glitch-style/unreadable';
import { upsideDownText } from './styles/glitch-style/upside-down';
import { zalgoGeneration } from './styles/zalgo';
import { ALL_GENERATOR_DATA } from './generatorData';

export const SPECIAL_GENERATORS_MAP: Record<SpecialGenerator, Style> = {
	'discord-glitch': 'hacker',
	'glitch-font': 'glitch',
	'minecraft-glitch': 'unreadable',
	'roblox-glitch': 'glitch'
};

export const SPECIAL_GENERATORS: SpecialGenerator[] = Object.keys(
	SPECIAL_GENERATORS_MAP
) as SpecialGenerator[];

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

// 仅包含样式转换的生成器列表
export const STYLE_LIST: string[] = Object.keys(GENERATOR_NAME_MAP).filter(
	(n) => !SPECIAL_GENERATORS.includes(n as SpecialGenerator)
);

export const ALL_GENERATOR_KEY = [...Object.keys(ALL_GENERATOR_DATA)];

export function stylizeText(
	text: string,
	style: Style,
	zalgoOption: {
		intensity: number;
	} = {
		intensity: 1
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
