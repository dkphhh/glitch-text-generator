import type { FontName } from 'unicode-text-decorator';
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
import { FONT_STYLES } from './styles/font-variant/const';
import { zalgoGeneration } from './styles/zalgo';

/**
 * 提前定义好的 style 名称，可以是 undefined，选择 undefined 意味着不进行任何样式转换
 */
export type Style =
	| undefined
	| 'cool'
	| 'cursed'
	| 'flip'
	| 'glitch'
	| 'latin'
	| 'hacker'
	| 'hidden'
	| 'unreadable'
	| 'upsideDown'
	| FontName;

export const STYLE_LIST: string[] = [
	'cool',
	'cursed',
	'flip',
	'glitch',
	'hidden',
	'hacker',
	'latin',
	'unreadable',
	'upsideDown',
	...FONT_STYLES
];

export function stylizeText(
	text: string,
	style: Style,
	zalgoOption: {
		enabled: boolean;
		intensity: number;
	} = {
		enabled: false,
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
		case undefined:
			result = text;
			break;
		default:
			result = styleText(text, style);
			break;
	}

	if (!zalgoOption.enabled) {
		return result;
	}

	return zalgoGeneration(
		result,
		zalgoOption.intensity,
		zalgoOption.intensity,
		zalgoOption.intensity
	);
}
