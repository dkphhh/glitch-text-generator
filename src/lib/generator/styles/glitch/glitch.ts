import { getRandomValueFromArray } from '$lib/utils/common/tools';

const glitchCharactersMap: Record<BaseCharacters, string[]> = {
	A: ['Ѧ', '₳'],
	a: ['ⱥ', 'ⱥ'],
	B: ['฿', 'Ƀ', 'ᗾ'],
	b: ['Б', 'ƀ'],
	C: ['¢'],
	c: ['ȼ', 'ꞓ'],
	D: ['Ð', 'Đ'],
	d: ['đ', '₫'],
	E: ['Ξ', 'Σ', '€', 'Є'],
	e: ['є'],
	F: ['Ғ', '₣'],
	f: ['ʄ', 'ſ'],
	G: ['₲'],
	g: ['ǥ'],
	H: ['Ħ'],
	h: ['ħ'],
	I: ['Ɨ', 'ı'],
	i: ['ɨ', 'ı'],
	J: ['ꓙ', 'ᒍ'],
	j: ['ʝ'],
	K: ['Ҝ', 'Ҡ'],
	k: ['ꝁ', 'ҟ'],
	L: ['Ł', 'Ⱡ'],
	l: ['ł'],
	M: ['Ɱ'],
	m: ['ɱ', 'ᵯ', '₥'],
	N: ['Л'],
	n: ['ꮑ', 'ᴨ'],
	O: ['Ø', 'Ө', 'Ѳ', 'Θ'],
	o: ['ø', 'ө', 'ѳ'],
	P: ['₱'],
	p: ['ƿ', 'ᵽ'],
	Q: ['Ꝗ'],
	q: ["զ"],
	R: ['Ɍ'],
	r: ['г'],
	S: ['§', '$'],
	s: ['ꮥ'],
	T: ['Ꮏ', '₮'],
	t: ['ꮏ', 'ŧ'],
	U: ['Ʉ'],
	u: ['ʉ'],
	V: ['√',"Ѵ"],
	v: ["ѵ"],
	W: ['Ꮤ', '₩'],
	w: ['ꮤ', 'Ш'],
	X: ['Ӿ', 'Ж'],
	x: ['ӿ'],
	Y: ['Ұ', '¥', 'Ɏ'],
	y: ['ұ'],
	Z: ['Ƶ'],
	z: ['ƶ']
};

export const baseGlitchCharacters = Object.keys(glitchCharactersMap);

function getRandomGlitchVariants(char: string): string {
	if (!baseGlitchCharacters.includes(char)) return char;

	const glitchVariant = glitchCharactersMap[char as BaseCharacters];
	const result = getRandomValueFromArray(glitchVariant);
	return result;
}

export function glitchifyText(text: string): string {
	for (const char of text) {
		text = text.replaceAll(char, getRandomGlitchVariants(char));
	}
	return text;
}
