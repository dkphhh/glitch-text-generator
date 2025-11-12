import { getRandomValueFromArray } from '$lib/utils/common/tools';

const flippedCharactersMap: Record<BaseCharacters, string[]> = {
	A: ['A'],
	a: ['ɒ'],
	B: ['ꓭ'],
	b: ['d'],
	C: ['Ɔ'],
	c: ['ɔ'],
	D: ['ᗡ'],
	d: ['b'],
	E: ['Ǝ'],
	e: ['ɘ'],
	F: ['ᖷ'],
	f: ['ʇ'],
	G: ['ᘐ'],
	g: ['ϱ'],
	H: ['H'],
	h: ['ᖽ'],
	I: ['I'],
	i: ['i'],
	J: ['ᒐ'],
	j: ['ᒐ'],
	K: ['ʞ'],
	k: ['ʞ'],
	L: ['⅃'],
	l: ['l'],
	M: ['M'],
	m: ['m'],
	N: ['ᴎ'],
	n: ['n'],
	O: ['O'],
	o: ['o'],
	P: ['ꟼ'],
	p: ['q'],
	Q: ['Ϙ'],
	q: ['p'],
	R: ['Я'],
	r: ['ɿ'],
	S: ['Ꙅ'],
	s: ['ꙅ'],
	T: ['T'],
	t: ['ታ'],
	U: ['U'],
	u: ['u'],
	V: ['V'],
	v: ['v'],
	W: ['W'],
	w: ['w'],
	X: ['X'],
	x: ['x'],
	Y: ['Y'],
	y: ['ʏ'],
	Z: ['S'],
	z: ['s']
};

export const baseFlippedCharacters = Object.keys(flippedCharactersMap);

function getRandomFlippedVariants(char: string): string {
	if (!baseFlippedCharacters.includes(char)) return char;

	const flippedVariant = flippedCharactersMap[char as BaseCharacters];
	const result = getRandomValueFromArray(flippedVariant);
	return result;
}

export function flipText(text: string): string {
	// 镜面反转：反转文本顺序并转换每个字符
	let result = '';
	for (let i = text.length - 1; i >= 0; i--) {
		result += getRandomFlippedVariants(text[i]);
	}
	return result;
}
