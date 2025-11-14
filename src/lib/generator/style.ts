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
import { m } from '$lib/paraglide/messages.js';

export const STYLE_MAP: Record<Style, string> = {
	zalgo: m.style_zalgo(),
	cool: m.style_cool(),
	cursed: m.style_cursed(),
	flip: m.style_filp(),
	glitch: m.style_glitch(),
	latin: m.style_latin(),
	hacker: m.style_hacker(),
	hidden: m.style_hidden(),
	unreadable: m.style_unreadable(),
	upsideDown: m.style_upsideDown(),
	bold_serif: m.style_bold_serif(),
	italic_serif: m.style_italic_serif(),
	bold_italic_serif: m.style_bold_italic_serif(),
	script: m.style_script(),
	bold_script: m.style_bold_script(),
	fraktur: m.style_fraktur(),
	bold_fraktur: m.style_bold_fraktur(),
	double_struck: m.style_double_struck(),
	sans_serif: m.style_sans_serif(),
	bold_sans_serif: m.style_bold_sans_serif(),
	italic_sans_serif: m.style_italic_sans_serif(),
	bold_italic_sans_serif: m.style_bold_italic_sans_serif(),
	monospace: m.style_monospace(),
	regional_indicator: m.style_regional_indicator(),
	circle: m.style_circle(),
	black_circle: m.style_black_circle(),
	square: m.style_squared(),
	parenthesized: m.style_parenthesized(),
	fullwidth: m.style_fullwidth()
};
export const STYLE_LIST: string[] = Object.keys(STYLE_MAP);

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
