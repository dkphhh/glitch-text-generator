import { getRandomValueFromArray } from '$lib/utils/common/tools';

const hackerCharactersMap: Record<BaseCharacters, string[]> = {
	A: ['Λ', 'Д'],
	a: ['α', 'ɑ'],
	B: ['Ƃ', 'Ɓ'],
	b: ['ƃ', 'Ь'],
	C: ['Ͻ', 'Ↄ'],
	c: ['ϲ', 'ς'],
	D: ['Đ', 'Ɗ'],
	d: ['đ', 'ɗ'],
	E: ['Ξ', 'Σ'],
	e: ['ε', 'є'],
	F: ['Ғ', 'Ƒ'],
	f: ['ƒ', 'ſ'],
	G: ['Ԍ', 'Ɠ'],
	g: ['ɡ', 'ց'],
	H: ['Ң', 'Ħ'],
	h: ['ħ', 'һ'],
	I: ['Ι', '|'],
	i: ['ı', 'ι'],
	J: ['Ј', 'Ʝ'],
	j: ['ј', 'ʝ'],
	K: ['Ҝ', 'Ƙ'],
	k: ['ҝ', 'ƙ'],
	L: ['Ł', 'Ŀ'],
	l: ['ł', '|'],
	M: ['Ɱ'],
	m: ['ɱ'],
	N: ['Π', 'И'],
	n: ['η', 'п'],
	O: ['Θ', 'Ø'],
	o: ['θ', 'ø'],
	P: ['Ƥ'],
	p: ['ƥ'],
	Q: ['Ԛ', 'Ɋ'],
	q: ['ԛ', 'ɋ'],
	R: ['Ʀ', 'Я'],
	r: ['г', 'ɾ'],
	S: ['Ș', 'Ƨ'],
	s: ['ș', 'ƨ'],
	T: ['Ŧ', 'Ƭ'],
	t: ['ŧ', 'ƭ'],
	U: ['Ʉ', 'Ų'],
	u: ['ʉ', 'ų'],
	V: ['Ʌ', 'Ѵ'],
	v: ['ν', 'ѵ'],
	W: ['Ш', 'Щ'],
	w: ['ш', 'щ'],
	X: ['Ҳ', 'Ӿ'],
	x: ['ҳ', 'ӿ'],
	Y: ['Ұ', 'Ɏ'],
	y: ['ұ', 'ɏ'],
	Z: ['Ƶ'],
	z: ['ƶ']
};

export const baseHackerCharacters = Object.keys(hackerCharactersMap);

function getRandomHackerVariants(char: string): string {
	if (!baseHackerCharacters.includes(char)) return char;

	const hackerVariant = hackerCharactersMap[char as BaseCharacters];
	const result = getRandomValueFromArray(hackerVariant);
	return result;
}

export function hackifyText(text: string): string {
	for (const char of text) {
		text = text.replaceAll(char, getRandomHackerVariants(char));
	}
	return text;
}
