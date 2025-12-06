import { m } from '$lib/paraglide/messages.js';

type GeneratorData = {
	displayName: string;
	pageTitle: string;
	subtitle: string;
	seoTitle: string;
	description: string;
	urlPath: string;
	category: GeneratorCatgory;
};

export const ALL_GENERATOR_DATA: Record<GeneratorType, GeneratorData> = {
	zalgo: {
		displayName: m.style_zalgo(),
		pageTitle: m.generator_zalgo_h1(),
		subtitle: m.generator_zalgo_subtitle(),
		seoTitle: m.generator_zalgo_title(),
		description: m.generator_zalgo_description(),
		urlPath: 'zalgo-text-generator',
		category: 'glitch'
	},
	glitch: {
		displayName: m.style_glitch(),
		pageTitle: m.generator_glitch_h1(),
		subtitle: m.generator_glitch_subtitle(),
		seoTitle: m.generator_glitch_title(),
		description: m.generator_glitch_description(),
		urlPath: 'glitch-text-generator',
		category: 'glitch'
	},
	hacker: {
		displayName: m.style_hacker(),
		pageTitle: m.generator_hacker_h1(),
		subtitle: m.generator_hacker_subtitle(),
		seoTitle: m.generator_hacker_title(),
		description: m.generator_hacker_description(),
		urlPath: 'hacker-text-generator',
		category: 'glitch'
	},
	cursed: {
		displayName: m.style_cursed(),
		pageTitle: m.generator_cursed_h1(),
		subtitle: m.generator_cursed_subtitle(),
		seoTitle: m.generator_cursed_title(),
		description: m.generator_cursed_description(),
		urlPath: 'cursed-text-generator',
		category: 'glitch'
	},
	unreadable: {
		displayName: m.style_unreadable(),
		pageTitle: m.generator_unreadable_h1(),
		subtitle: m.generator_unreadable_subtitle(),
		seoTitle: m.generator_unreadable_title(),
		description: m.generator_unreadable_description(),
		urlPath: 'unreadable-text-generator',
		category: 'glitch'
	},
	upsideDown: {
		displayName: m.style_upsideDown(),
		pageTitle: m.generator_upsideDown_h1(),
		subtitle: m.generator_upsideDown_subtitle(),
		seoTitle: m.generator_upsideDown_title(),
		description: m.generator_upsideDown_description(),
		urlPath: 'upside-down-text-generator',
		category: 'fun'
	},
	flip: {
		displayName: m.style_filp(),
		pageTitle: m.generator_flip_h1(),
		subtitle: m.generator_flip_subtitle(),
		seoTitle: m.generator_flip_title(),
		description: m.generator_flip_description(),
		urlPath: 'flip-text-generator',
		category: 'fun'
	},
	cool: {
		displayName: m.style_cool(),
		pageTitle: m.generator_cool_h1(),
		subtitle: m.generator_cool_subtitle(),
		seoTitle: m.generator_cool_title(),
		description: m.generator_cool_description(),
		urlPath: 'cool-text-generator',
		category: 'font-variant'
	},
	latin: {
		displayName: m.style_latin(),
		pageTitle: m.generator_latin_h1(),
		subtitle: m.generator_latin_subtitle(),
		seoTitle: m.generator_latin_title(),
		description: m.generator_latin_description(),
		urlPath: 'latin-text-generator',
		category: 'glitch'
	},
	hidden: {
		displayName: m.style_hidden(),
		pageTitle: m.generator_hidden_h1(),
		subtitle: m.generator_hidden_subtitle(),
		seoTitle: m.generator_hidden_title(),
		description: m.generator_hidden_description(),
		urlPath: 'hidden-text-generator',
		category: 'fun'
	},
	bold_serif: {
		displayName: m.style_bold_serif(),
		pageTitle: m.generator_bold_serif_h1(),
		subtitle: m.generator_bold_serif_subtitle(),
		seoTitle: m.generator_bold_serif_title(),
		description: m.generator_bold_serif_description(),
		urlPath: 'bold-serif-text-generator',
		category: 'font-variant'
	},
	italic_serif: {
		displayName: m.style_italic_serif(),
		pageTitle: m.generator_italic_serif_h1(),
		subtitle: m.generator_italic_serif_subtitle(),
		seoTitle: m.generator_italic_serif_title(),
		description: m.generator_italic_serif_description(),
		urlPath: 'italic-serif-text-generator',
		category: 'font-variant'
	},
	bold_italic_serif: {
		displayName: m.style_bold_italic_serif(),
		pageTitle: m.generator_bold_italic_serif_h1(),
		subtitle: m.generator_bold_italic_serif_subtitle(),
		seoTitle: m.generator_bold_italic_serif_title(),
		description: m.generator_bold_italic_serif_description(),
		urlPath: 'bold-italic-serif-text-generator',
		category: 'font-variant'
	},
	script: {
		displayName: m.style_script(),
		pageTitle: m.generator_script_h1(),
		subtitle: m.generator_script_subtitle(),
		seoTitle: m.generator_script_title(),
		description: m.generator_script_description(),
		urlPath: 'script-text-generator',
		category: 'font-variant'
	},
	bold_script: {
		displayName: m.style_bold_script(),
		pageTitle: m.generator_bold_script_h1(),
		subtitle: m.generator_bold_script_subtitle(),
		seoTitle: m.generator_bold_script_title(),
		description: m.generator_bold_script_description(),
		urlPath: 'bold-script-text-generator',
		category: 'font-variant'
	},
	fraktur: {
		displayName: m.style_fraktur(),
		pageTitle: m.generator_fraktur_h1(),
		subtitle: m.generator_fraktur_subtitle(),
		seoTitle: m.generator_fraktur_title(),
		description: m.generator_fraktur_description(),
		urlPath: 'fraktur-text-generator',
		category: 'font-variant'
	},
	bold_fraktur: {
		displayName: m.style_bold_fraktur(),
		pageTitle: m.generator_bold_fraktur_h1(),
		subtitle: m.generator_bold_fraktur_subtitle(),
		seoTitle: m.generator_bold_fraktur_title(),
		description: m.generator_bold_fraktur_description(),
		urlPath: 'bold-fraktur-text-generator',
		category: 'font-variant'
	},
	double_struck: {
		displayName: m.style_double_struck(),
		pageTitle: m.generator_double_struck_h1(),
		subtitle: m.generator_double_struck_subtitle(),
		seoTitle: m.generator_double_struck_title(),
		description: m.generator_double_struck_description(),
		urlPath: 'double-struck-text-generator',
		category: 'font-variant'
	},
	sans_serif: {
		displayName: m.style_sans_serif(),
		pageTitle: m.generator_sans_serif_h1(),
		subtitle: m.generator_sans_serif_subtitle(),
		seoTitle: m.generator_sans_serif_title(),
		description: m.generator_sans_serif_description(),
		urlPath: 'sans-serif-text-generator',
		category: 'font-variant'
	},
	bold_sans_serif: {
		displayName: m.style_bold_sans_serif(),
		pageTitle: m.generator_bold_sans_serif_h1(),
		subtitle: m.generator_bold_sans_serif_subtitle(),
		seoTitle: m.generator_bold_sans_serif_title(),
		description: m.generator_bold_sans_serif_description(),
		urlPath: 'bold-sans-serif-text-generator',
		category: 'font-variant'
	},
	italic_sans_serif: {
		displayName: m.style_italic_sans_serif(),
		pageTitle: m.generator_italic_sans_serif_h1(),
		subtitle: m.generator_italic_sans_serif_subtitle(),
		seoTitle: m.generator_italic_sans_serif_title(),
		description: m.generator_italic_sans_serif_description(),
		urlPath: 'italic-sans-serif-text-generator',
		category: 'font-variant'
	},
	bold_italic_sans_serif: {
		displayName: m.style_bold_italic_sans_serif(),
		pageTitle: m.generator_bold_italic_sans_serif_h1(),
		subtitle: m.generator_bold_italic_sans_serif_subtitle(),
		seoTitle: m.generator_bold_italic_sans_serif_title(),
		description: m.generator_bold_italic_sans_serif_description(),
		urlPath: 'bold-italic-sans-serif-text-generator',
		category: 'font-variant'
	},
	monospace: {
		displayName: m.style_monospace(),
		pageTitle: m.generator_monospace_h1(),
		subtitle: m.generator_monospace_subtitle(),
		seoTitle: m.generator_monospace_title(),
		description: m.generator_monospace_description(),
		urlPath: 'monospace-text-generator',
		category: 'font-variant'
	},
	regional_indicator: {
		displayName: m.style_regional_indicator(),
		pageTitle: m.generator_regional_indicator_h1(),
		subtitle: m.generator_regional_indicator_subtitle(),
		seoTitle: m.generator_regional_indicator_title(),
		description: m.generator_regional_indicator_description(),
		urlPath: 'regional-indicator-text-generator',
		category: 'font-variant'
	},
	circle: {
		displayName: m.style_circle(),
		pageTitle: m.generator_circle_h1(),
		subtitle: m.generator_circle_subtitle(),
		seoTitle: m.generator_circle_title(),
		description: m.generator_circle_description(),
		urlPath: 'circle-text-generator',
		category: 'font-variant'
	},
	black_circle: {
		displayName: m.style_black_circle(),
		pageTitle: m.generator_black_circle_h1(),
		subtitle: m.generator_black_circle_subtitle(),
		seoTitle: m.generator_black_circle_title(),
		description: m.generator_black_circle_description(),
		urlPath: 'black-circle-text-generator',
		category: 'font-variant'
	},
	square: {
		displayName: m.style_squared(),
		pageTitle: m.generator_square_h1(),
		subtitle: m.generator_square_subtitle(),
		seoTitle: m.generator_square_title(),
		description: m.generator_square_description(),
		urlPath: 'square-text-generator',
		category: 'font-variant'
	},
	parenthesized: {
		displayName: m.style_parenthesized(),
		pageTitle: m.generator_parenthesized_h1(),
		subtitle: m.generator_parenthesized_subtitle(),
		seoTitle: m.generator_parenthesized_title(),
		description: m.generator_parenthesized_description(),
		urlPath: 'parenthesized-text-generator',
		category: 'font-variant'
	},
	fullwidth: {
		displayName: m.style_fullwidth(),
		pageTitle: m.generator_fullwidth_h1(),
		subtitle: m.generator_fullwidth_subtitle(),
		seoTitle: m.generator_fullwidth_title(),
		description: m.generator_fullwidth_description(),
		urlPath: 'fullwidth-text-generator',
		category: 'font-variant'
	},
	'glitch-font': {
		displayName: m.style_glitch_font(),
		pageTitle: m.generator_glitch_font_h1(),
		subtitle: m.generator_glitch_font_subtitle(),
		seoTitle: m.generator_glitch_font_title(),
		description: m.generator_glitch_font_description(),
		urlPath: 'glitch-font-generator',
		category: 'glitch'
	},
	'discord-glitch': {
		displayName: m.style_discord_glitch(),
		pageTitle: m.generator_discord_glitch_h1(),
		subtitle: m.generator_discord_glitch_subtitle(),
		seoTitle: m.generator_discord_glitch_title(),
		description: m.generator_discord_glitch_description(),
		urlPath: 'discord-glitch-text-generator',
		category: 'glitch'
	},
	'roblox-glitch': {
		displayName: m.style_roblox_glitch(),
		pageTitle: m.generator_roblox_glitch_h1(),
		subtitle: m.generator_roblox_glitch_subtitle(),
		seoTitle: m.generator_roblox_glitch_title(),
		description: m.generator_roblox_glitch_description(),
		urlPath: 'roblox-glitch-text-generator',
		category: 'glitch'
	},
	'minecraft-glitch': {
		displayName: m.style_minecraft_glitch(),
		pageTitle: m.generator_minecraft_glitch_h1(),
		subtitle: m.generator_minecraft_glitch_subtitle(),
		seoTitle: m.generator_minecraft_glitch_title(),
		description: m.generator_minecraft_glitch_description(),
		urlPath: 'minecraft-glitch-text-generator',
		category: 'glitch'
	},
	'reveal-hidden': {
		displayName: m.style_reveal_hidden(),
		pageTitle: m.generator_reveal_hidden_h1(),
		subtitle: m.generator_reveal_hidden_subtitle(),
		seoTitle: m.generator_reveal_hidden_title(),
		description: m.generator_reveal_hidden_description(),
		urlPath: 'reveal-hidden-text',
		category: 'fun'
	},
	'ascii-art': {
		displayName: m.style_ascii_art(),
		pageTitle: m.generator_ascii_art_h1(),
		subtitle: m.generator_ascii_art_subtitle(),
		seoTitle: m.generator_ascii_art_title(),
		description: m.generator_ascii_art_description(),
		urlPath: 'ascii-art-generator',
		category: 'ascii-art'
	},
	'cli-style': {
		displayName: m.generator_cli_style_h1(),
		pageTitle: m.generator_cli_style_h1(),
		subtitle: m.generator_cli_style_subtitle(),
		seoTitle: m.generator_cli_style_title(),
		description: m.generator_cli_style_description(),
		urlPath: 'cli-text-generator',
		category: 'ascii-art'
	},
	'hacker-style': {
		displayName: m.generator_hacker_style_h1(),
		pageTitle: m.generator_hacker_style_h1(),
		subtitle: m.generator_hacker_style_subtitle(),
		seoTitle: m.generator_hacker_style_title(),
		description: m.generator_hacker_style_description(),
		urlPath: 'hacker-style-text-generator',
		category: 'ascii-art'
	},
	'console-style': {
		displayName: m.generator_console_style_h1(),
		pageTitle: m.generator_console_style_h1(),
		subtitle: m.generator_console_style_subtitle(),
		seoTitle: m.generator_console_style_title(),
		description: m.generator_console_style_description(),
		urlPath: 'console-text-generator',
		category: 'ascii-art'
	},
	'matrix-style': {
		displayName: m.generator_matrix_style_h1(),
		pageTitle: m.generator_matrix_style_h1(),
		subtitle: m.generator_matrix_style_subtitle(),
		seoTitle: m.generator_matrix_style_title(),
		description: m.generator_matrix_style_description(),
		urlPath: 'matrix-text-generator',
		category: 'ascii-art'
	}
};

export const SPECIAL_GENERATORS: SpecialGenerator[] = [
	'discord-glitch',
	'glitch-font',
	'minecraft-glitch',
	'roblox-glitch',
	'cli-style',
	'hacker-style',
	'console-style',
	'matrix-style'
];

// -------------风格分类------------

export const ALL_CATEGORY: GeneratorCatgory[] = ['ascii-art', 'font-variant', 'fun', 'glitch'];

// 所有通过 font-variant 实现的字体样式
export const FONT_VARIANT_GENERATOR = Object.entries(ALL_GENERATOR_DATA)
	.filter(([, v]) => v.category === 'font-variant')
	.map(([k]) => k as GeneratorType);

// 包含所有故障风格的列表
export const GLITCH_GENERATOR = Object.entries(ALL_GENERATOR_DATA)
	.filter(([, v]) => v.category === 'glitch')
	.map(([k]) => k as GeneratorType);

// 包含所有有趣风格的列表
export const FUN_GENERATOR = Object.entries(ALL_GENERATOR_DATA)
	.filter(([, v]) => v.category === 'fun')
	.map(([k]) => k as GeneratorType);

// 包含所有 ASCII 艺术风格的列表
export const ASCII_ART_GENERATOR = Object.entries(ALL_GENERATOR_DATA)
	.filter(([, v]) => v.category === 'ascii-art')
	.map(([k]) => k as GeneratorType);
