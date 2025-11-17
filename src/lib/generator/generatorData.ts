import { m } from '$lib/paraglide/messages.js';

type GeneratorData = {
	displayName: string;
	pageTitle: string;
	subtitle: string;
	seoTitle: string;
	description: string;
	urlPath: string;
};

export const ALL_GENERATOR_DATA: Record<GeneratorType, GeneratorData> = {
	zalgo: {
		displayName: m.style_zalgo(),
		pageTitle: m.generator_zalgo_h1(),
		subtitle: m.generator_zalgo_subtitle(),
		seoTitle: m.generator_zalgo_title(),
		description: m.generator_zalgo_description(),
		urlPath: 'zalgo-text-generator'
	},
	glitch: {
		displayName: m.style_glitch(),
		pageTitle: m.generator_glitch_h1(),
		subtitle: m.generator_glitch_subtitle(),
		seoTitle: m.generator_glitch_title(),
		description: m.generator_glitch_description(),
		urlPath: 'glitch-text-generator'
	},
	hacker: {
		displayName: m.style_hacker(),
		pageTitle: m.generator_hacker_h1(),
		subtitle: m.generator_hacker_subtitle(),
		seoTitle: m.generator_hacker_title(),
		description: m.generator_hacker_description(),
		urlPath: 'hacker-text-generator'
	},
	cursed: {
		displayName: m.style_cursed(),
		pageTitle: m.generator_cursed_h1(),
		subtitle: m.generator_cursed_subtitle(),
		seoTitle: m.generator_cursed_title(),
		description: m.generator_cursed_description(),
		urlPath: 'cursed-text-generator'
	},
	unreadable: {
		displayName: m.style_unreadable(),
		pageTitle: m.generator_unreadable_h1(),
		subtitle: m.generator_unreadable_subtitle(),
		seoTitle: m.generator_unreadable_title(),
		description: m.generator_unreadable_description(),
		urlPath: 'unreadable-text-generator'
	},
	upsideDown: {
		displayName: m.style_upsideDown(),
		pageTitle: m.generator_upsideDown_h1(),
		subtitle: m.generator_upsideDown_subtitle(),
		seoTitle: m.generator_upsideDown_title(),
		description: m.generator_upsideDown_description(),
		urlPath: 'upside-down-text-generator'
	},
	flip: {
		displayName: m.style_filp(),
		pageTitle: m.generator_flip_h1(),
		subtitle: m.generator_flip_subtitle(),
		seoTitle: m.generator_flip_title(),
		description: m.generator_flip_description(),
		urlPath: 'flip-text-generator'
	},
	cool: {
		displayName: m.style_cool(),
		pageTitle: m.generator_cool_h1(),
		subtitle: m.generator_cool_subtitle(),
		seoTitle: m.generator_cool_title(),
		description: m.generator_cool_description(),
		urlPath: 'cool-text-generator'
	},
	latin: {
		displayName: m.style_latin(),
		pageTitle: m.generator_latin_h1(),
		subtitle: m.generator_latin_subtitle(),
		seoTitle: m.generator_latin_title(),
		description: m.generator_latin_description(),
		urlPath: 'latin-text-generator'
	},
	hidden: {
		displayName: m.style_hidden(),
		pageTitle: m.generator_hidden_h1(),
		subtitle: m.generator_hidden_subtitle(),
		seoTitle: m.generator_hidden_title(),
		description: m.generator_hidden_description(),
		urlPath: 'hidden-text-generator'
	},
	bold_serif: {
		displayName: m.style_bold_serif(),
		pageTitle: m.generator_bold_serif_h1(),
		subtitle: m.generator_bold_serif_subtitle(),
		seoTitle: m.generator_bold_serif_title(),
		description: m.generator_bold_serif_description(),
		urlPath: 'bold-serif-text-generator'
	},
	italic_serif: {
		displayName: m.style_italic_serif(),
		pageTitle: m.generator_italic_serif_h1(),
		subtitle: m.generator_italic_serif_subtitle(),
		seoTitle: m.generator_italic_serif_title(),
		description: m.generator_italic_serif_description(),
		urlPath: 'italic-serif-text-generator'
	},
	bold_italic_serif: {
		displayName: m.style_bold_italic_serif(),
		pageTitle: m.generator_bold_italic_serif_h1(),
		subtitle: m.generator_bold_italic_serif_subtitle(),
		seoTitle: m.generator_bold_italic_serif_title(),
		description: m.generator_bold_italic_serif_description(),
		urlPath: 'bold-italic-serif-text-generator'
	},
	script: {
		displayName: m.style_script(),
		pageTitle: m.generator_script_h1(),
		subtitle: m.generator_script_subtitle(),
		seoTitle: m.generator_script_title(),
		description: m.generator_script_description(),
		urlPath: 'script-text-generator'
	},
	bold_script: {
		displayName: m.style_bold_script(),
		pageTitle: m.generator_bold_script_h1(),
		subtitle: m.generator_bold_script_subtitle(),
		seoTitle: m.generator_bold_script_title(),
		description: m.generator_bold_script_description(),
		urlPath: 'bold-script-text-generator'
	},
	fraktur: {
		displayName: m.style_fraktur(),
		pageTitle: m.generator_fraktur_h1(),
		subtitle: m.generator_fraktur_subtitle(),
		seoTitle: m.generator_fraktur_title(),
		description: m.generator_fraktur_description(),
		urlPath: 'fraktur-text-generator'
	},
	bold_fraktur: {
		displayName: m.style_bold_fraktur(),
		pageTitle: m.generator_bold_fraktur_h1(),
		subtitle: m.generator_bold_fraktur_subtitle(),
		seoTitle: m.generator_bold_fraktur_title(),
		description: m.generator_bold_fraktur_description(),
		urlPath: 'bold-fraktur-text-generator'
	},
	double_struck: {
		displayName: m.style_double_struck(),
		pageTitle: m.generator_double_struck_h1(),
		subtitle: m.generator_double_struck_subtitle(),
		seoTitle: m.generator_double_struck_title(),
		description: m.generator_double_struck_description(),
		urlPath: 'double-struck-text-generator'
	},
	sans_serif: {
		displayName: m.style_sans_serif(),
		pageTitle: m.generator_sans_serif_h1(),
		subtitle: m.generator_sans_serif_subtitle(),
		seoTitle: m.generator_sans_serif_title(),
		description: m.generator_sans_serif_description(),
		urlPath: 'sans-serif-text-generator'
	},
	bold_sans_serif: {
		displayName: m.style_bold_sans_serif(),
		pageTitle: m.generator_bold_sans_serif_h1(),
		subtitle: m.generator_bold_sans_serif_subtitle(),
		seoTitle: m.generator_bold_sans_serif_title(),
		description: m.generator_bold_sans_serif_description(),
		urlPath: 'bold-sans-serif-text-generator'
	},
	italic_sans_serif: {
		displayName: m.style_italic_sans_serif(),
		pageTitle: m.generator_italic_sans_serif_h1(),
		subtitle: m.generator_italic_sans_serif_subtitle(),
		seoTitle: m.generator_italic_sans_serif_title(),
		description: m.generator_italic_sans_serif_description(),
		urlPath: 'italic-sans-serif-text-generator'
	},
	bold_italic_sans_serif: {
		displayName: m.style_bold_italic_sans_serif(),
		pageTitle: m.generator_bold_italic_sans_serif_h1(),
		subtitle: m.generator_bold_italic_sans_serif_subtitle(),
		seoTitle: m.generator_bold_italic_sans_serif_title(),
		description: m.generator_bold_italic_sans_serif_description(),
		urlPath: 'bold-italic-sans-serif-text-generator'
	},
	monospace: {
		displayName: m.style_monospace(),
		pageTitle: m.generator_monospace_h1(),
		subtitle: m.generator_monospace_subtitle(),
		seoTitle: m.generator_monospace_title(),
		description: m.generator_monospace_description(),
		urlPath: 'monospace-text-generator'
	},
	regional_indicator: {
		displayName: m.style_regional_indicator(),
		pageTitle: m.generator_regional_indicator_h1(),
		subtitle: m.generator_regional_indicator_subtitle(),
		seoTitle: m.generator_regional_indicator_title(),
		description: m.generator_regional_indicator_description(),
		urlPath: 'regional-indicator-text-generator'
	},
	circle: {
		displayName: m.style_circle(),
		pageTitle: m.generator_circle_h1(),
		subtitle: m.generator_circle_subtitle(),
		seoTitle: m.generator_circle_title(),
		description: m.generator_circle_description(),
		urlPath: 'circle-text-generator'
	},
	black_circle: {
		displayName: m.style_black_circle(),
		pageTitle: m.generator_black_circle_h1(),
		subtitle: m.generator_black_circle_subtitle(),
		seoTitle: m.generator_black_circle_title(),
		description: m.generator_black_circle_description(),
		urlPath: 'black-circle-text-generator'
	},
	square: {
		displayName: m.style_squared(),
		pageTitle: m.generator_square_h1(),
		subtitle: m.generator_square_subtitle(),
		seoTitle: m.generator_square_title(),
		description: m.generator_square_description(),
		urlPath: 'square-text-generator'
	},
	parenthesized: {
		displayName: m.style_parenthesized(),
		pageTitle: m.generator_parenthesized_h1(),
		subtitle: m.generator_parenthesized_subtitle(),
		seoTitle: m.generator_parenthesized_title(),
		description: m.generator_parenthesized_description(),
		urlPath: 'parenthesized-text-generator'
	},
	fullwidth: {
		displayName: m.style_fullwidth(),
		pageTitle: m.generator_fullwidth_h1(),
		subtitle: m.generator_fullwidth_subtitle(),
		seoTitle: m.generator_fullwidth_title(),
		description: m.generator_fullwidth_description(),
		urlPath: 'fullwidth-text-generator'
	},
	'glitch-font': {
		displayName: m.style_glitch_font(),
		pageTitle: m.generator_glitch_font_h1(),
		subtitle: m.generator_glitch_font_subtitle(),
		seoTitle: m.generator_glitch_font_title(),
		description: m.generator_glitch_font_description(),
		urlPath: 'glitch-font-generator'
	},
	'discord-glitch': {
		displayName: m.style_discord_glitch(),
		pageTitle: m.generator_discord_glitch_h1(),
		subtitle: m.generator_discord_glitch_subtitle(),
		seoTitle: m.generator_discord_glitch_title(),
		description: m.generator_discord_glitch_description(),
		urlPath: 'discord-glitch-text-generator'
	},
	'roblox-glitch': {
		displayName: m.style_roblox_glitch(),
		pageTitle: m.generator_roblox_glitch_h1(),
		subtitle: m.generator_roblox_glitch_subtitle(),
		seoTitle: m.generator_roblox_glitch_title(),
		description: m.generator_roblox_glitch_description(),
		urlPath: 'roblox-glitch-text-generator'
	},
	'minecraft-glitch': {
		displayName: m.style_minecraft_glitch(),
		pageTitle: m.generator_minecraft_glitch_h1(),
		subtitle: m.generator_minecraft_glitch_subtitle(),
		seoTitle: m.generator_minecraft_glitch_title(),
		description: m.generator_minecraft_glitch_description(),
		urlPath: 'minecraft-glitch-text-generator'
	}
};

export const SPECIAL_GENERATORS: SpecialGenerator[] = [
	'discord-glitch',
	'glitch-font',
	'minecraft-glitch',
	'roblox-glitch'
];
