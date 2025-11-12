import type { ParamMatcher } from '@sveltejs/kit';

const GENERATORS = [
	'zalgo-text-generator',
	'cursed-text-generator',
	'cool-text-generator',
	'glitch-font-generator',
	'discord-glitch-text-generator',
	'roblox-glitch-text-generator',
	'minecraft-glitch-text-generator',
	'unreadable-text-generator',
	'hacker-text-generator'
];

export const match = ((param: string) => {
	return GENERATORS.includes(param);
}) satisfies ParamMatcher;
