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

const SPECIAL_GENERATORS: SpecialGenerator[] = [
	'discord-glitch',
	'glitch-font',
	'minecraft-glitch',
	'roblox-glitch'
];

export const GENERATOR_URL_MAP: Record<GeneratorType, string> = {
	zalgo: 'zalgo-text-generator',
	cool: 'cool-text-generator',
	cursed: 'cursed-text-generator',
	flip: 'flip-text-generator',
	glitch: 'glitch-text-generator',
	latin: 'latin-text-generator',
	hacker: 'hacker-text-generator',
	hidden: 'hidden-text-generator',
	unreadable: 'unreadable-text-generator',
	upsideDown: 'upside-down-text-generator',
	bold_serif: 'bold-serif-text-generator',
	italic_serif: 'italic-serif-text-generator',
	bold_italic_serif: 'bold-italic-serif-text-generator',
	script: 'script-text-generator',
	bold_script: 'bold-script-text-generator',
	fraktur: 'fraktur-text-generator',
	bold_fraktur: 'bold-fraktur-text-generator',
	double_struck: 'double-struck-text-generator',
	sans_serif: 'sans-serif-text-generator',
	bold_sans_serif: 'bold-sans-serif-text-generator',
	italic_sans_serif: 'italic-sans-serif-text-generator',
	bold_italic_sans_serif: 'bold-italic-sans-serif-text-generator',
	monospace: 'monospace-text-generator',
	regional_indicator: 'regional-indicator-text-generator',
	circle: 'circle-text-generator',
	black_circle: 'black-circle-text-generator',
	square: 'square-text-generator',
	parenthesized: 'parenthesized-text-generator',
	fullwidth: 'fullwidth-text-generator',
	'glitch-font': 'glitch-font-generator',
	'discord-glitch': 'discord-glitch-text-generator',
	'roblox-glitch': 'roblox-glitch-text-generator',
	'minecraft-glitch': 'minecraft-glitch-text-generator'
};

export const GENERATOR_NAME_MAP: Record<GeneratorType, string> = {
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
	fullwidth: m.style_fullwidth(),
	'glitch-font': m.style_glitch_font(),
	'discord-glitch': m.style_discord_glitch(),
	'roblox-glitch': m.style_roblox_glitch(),
	'minecraft-glitch': m.style_minecraft_glitch()
};

export const GENERATOR_SUBTITLE_MAP: Record<GeneratorType, string> = {
	zalgo: m.generator_zalgo_subtitle(),
	cool: m.generator_cool_subtitle(),
	cursed: m.generator_cursed_subtitle(),
	flip: m.generator_flip_subtitle(),
	glitch: m.generator_glitch_subtitle(),
	latin: m.generator_latin_subtitle(),
	hacker: m.generator_hacker_subtitle(),
	hidden: m.generator_hidden_subtitle(),
	unreadable: m.generator_unreadable_subtitle(),
	upsideDown: m.generator_upsideDown_subtitle(),
	bold_serif: m.generator_bold_serif_subtitle(),
	italic_serif: m.generator_italic_serif_subtitle(),
	bold_italic_serif: m.generator_bold_italic_serif_subtitle(),
	script: m.generator_script_subtitle(),
	bold_script: m.generator_bold_script_subtitle(),
	fraktur: m.generator_fraktur_subtitle(),
	bold_fraktur: m.generator_bold_fraktur_subtitle(),
	double_struck: m.generator_double_struck_subtitle(),
	sans_serif: m.generator_sans_serif_subtitle(),
	bold_sans_serif: m.generator_bold_sans_serif_subtitle(),
	italic_sans_serif: m.generator_italic_sans_serif_subtitle(),
	bold_italic_sans_serif: m.generator_bold_italic_sans_serif_subtitle(),
	monospace: m.generator_monospace_subtitle(),
	regional_indicator: m.generator_regional_indicator_subtitle(),
	circle: m.generator_circle_subtitle(),
	black_circle: m.generator_black_circle_subtitle(),
	square: m.generator_square_subtitle(),
	parenthesized: m.generator_parenthesized_subtitle(),
	fullwidth: m.generator_fullwidth_subtitle(),
	'glitch-font': m.generator_glitch_font_subtitle(),
	'discord-glitch': m.generator_discord_glitch_subtitle(),
	'roblox-glitch': m.generator_roblox_glitch_subtitle(),
	'minecraft-glitch': m.generator_minecraft_glitch_subtitle()
};

export const GENERATOR_DESCRIPTION_MAP: Record<GeneratorType, string> = {
	zalgo: m.generator_zalgo_description(),
	cool: m.generator_cool_description(),
	cursed: m.generator_cursed_description(),
	flip: m.generator_flip_description(),
	glitch: m.generator_glitch_description(),
	latin: m.generator_latin_description(),
	hacker: m.generator_hacker_description(),
	hidden: m.generator_hidden_description(),
	unreadable: m.generator_unreadable_description(),
	upsideDown: m.generator_upsideDown_description(),
	bold_serif: m.generator_bold_serif_description(),
	italic_serif: m.generator_italic_serif_description(),
	bold_italic_serif: m.generator_bold_italic_serif_description(),
	script: m.generator_script_description(),
	bold_script: m.generator_bold_script_description(),
	fraktur: m.generator_fraktur_description(),
	bold_fraktur: m.generator_bold_fraktur_description(),
	double_struck: m.generator_double_struck_description(),
	sans_serif: m.generator_sans_serif_description(),
	bold_sans_serif: m.generator_bold_sans_serif_description(),
	italic_sans_serif: m.generator_italic_sans_serif_description(),
	bold_italic_sans_serif: m.generator_bold_italic_sans_serif_description(),
	monospace: m.generator_monospace_description(),
	regional_indicator: m.generator_regional_indicator_description(),
	circle: m.generator_circle_description(),
	black_circle: m.generator_black_circle_description(),
	square: m.generator_square_description(),
	parenthesized: m.generator_parenthesized_description(),
	fullwidth: m.generator_fullwidth_description(),
	'glitch-font': m.generator_glitch_font_description(),
	'discord-glitch': m.generator_discord_glitch_description(),
	'roblox-glitch': m.generator_roblox_glitch_description(),
	'minecraft-glitch': m.generator_minecraft_glitch_description()
};

export const STYLE_LIST: string[] = Object.keys(GENERATOR_NAME_MAP).filter(
	(n) => !SPECIAL_GENERATORS.includes(n as SpecialGenerator)
);

export const GENERATORS = [...Object.values(GENERATOR_URL_MAP)];

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
