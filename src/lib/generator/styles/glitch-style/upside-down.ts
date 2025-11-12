import { getRandomValueFromArray } from '$lib/utils/common/tools';

const upsideDownCharactersMap: Record<BaseCharacters, string[]> = {
	A: ['∀'],
	a: ['ɐ'],
	B: ['ꓭ'],
	b: ['q'],
	C: ['Ͻ'],
	c: ['ɔ'],
	D: ['ᗡ'],
	d: ['p'],
	E: ['Ǝ'],
	e: ['ə'],
	F: ['Ⅎ'],
	f: ['ɟ'],
	G: ['⅁'],
	g: ['ƃ'],
	H: ['H'],
	h: ['ɥ'],
	I: ['I'],
	i: ['ᴉ'],
	J: ['ſ'],
	j: ['ɾ'],
	K: ['ꓘ'],
	k: ['ʞ'],
	L: ['˥'],
	l: ['ʃ'],
	M: ['W'],
	m: ['ɯ'],
	N: ['N'],
	n: ['u'],
	O: ['O'],
	o: ['o'],
	P: ['Ԁ'],
	p: ['d'],
	Q: ['Ό'],
	q: ['b'],
	R: ['ꓤ'],
	r: ['ɹ'],
	S: ['S'],
	s: ['s'],
	T: ['ꓕ'],
	t: ['ʇ'],
	U: ['∩'],
	u: ['n'],
	V: ['Λ'],
	v: ['ʌ'],
	W: ['M'],
	w: ['ʍ'],
	X: ['X'],
	x: ['x'],
	Y: ['⅄'],
	y: ['ʎ'],
	Z: ['Z'],
	z: ['z']
};

export const baseUpsideDownCharacters = Object.keys(upsideDownCharactersMap);

function getRandomUpsideDownVariants(char: string): string {
	if (!baseUpsideDownCharacters.includes(char)) return char;

	const upsideDownVariant = upsideDownCharactersMap[char as BaseCharacters];
	const result = getRandomValueFromArray(upsideDownVariant);
	return result;
}

export function upsideDownText(text: string): string {
	// 将文本反转并转换每个字符
	let result = '';
	for (let i = text.length - 1; i >= 0; i--) {
		result += getRandomUpsideDownVariants(text[i]);
	}
	return result;
}
