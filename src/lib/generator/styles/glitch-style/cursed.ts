import { BASE_CHARACTERS_AND_NUMBERS } from '../../const';
import { getRandomValueFromArray } from '$lib/utils/common/tools';

/**
 * Sharp style character variant map,主要是货币符号，没有货币符号的字母和数字用了拉丁文的变体
 */
export const CURSED_STYLE_MAP: Record<BaseSymbol, string[]> = {
	'0': ['𝟘'],
	'1': ['𝟙'],
	'2': ['𝟚'],
	'3': ['𝟛'],
	'4': ['𝟜'],
	'5': ['𝟝'],
	'6': ['𝟞'],
	'7': ['𝟟'],
	'8': ['𝟠'],
	'9': ['𝟡'],
	a: ['∂', 'მ'],
	b: ['৳'],
	c: ['č'],
	d: ['₫'],
	e: ['€', 'є'],
	f: ['ƒ', '₤'],
	g: ['ǥ', 'ɠ'],
	h: ['৸', 'ꚕ', 'Ᏺ', 'ℏ'],
	i: ['ɨ', '⍳'],
	j: ['ʝ', 'ɉ'],
	k: ['ḵ', 'ƙ', 'ⱪ'],
	l: ['ƚ', 'ɫ', 'ⱡ'],
	m: ['₼', '₥'],
	n: ['л', '₪'],
	o: ['ø', 'ǿ', 'ɵ'],
	p: ['ᵽ', 'ƥ'],
	q: ['ꝗ', 'գ'],
	r: ['ɍ', 'г', 'Ր'],
	s: ['ֆ', 'ʂ', 'క', 'ȿ'],
	t: ['Ł', 'ł', '₺'],
	u: ['ʉ', 'μ'],
	v: ['ѵ', 'Ṿ'],
	w: ['⍵', 'ա'],
	x: ['ҳ', 'ӽ'],
	y: ['ɏ'],
	z: ['ʐ', 'ȥ'],
	A: ['Д', 'ʌ', 'Λ', 'λ'],
	B: ['в', '₿', '฿', 'Ƀ'],
	C: ['₡', '₾', '₵'],
	D: ['Đ', 'Ð'],
	E: ['Ξ', '£'],
	F: ['₣'],
	G: ['₲', 'Ǥ'],
	H: ['н'],
	I: ['Ɨ', 'エ'],
	J: ['Ɉ', 'ᒴ'],
	K: ['₭'],
	L: ['Ŀ', '乚'],
	M: ['𐌑'],
	N: ['₦', 'и'],
	O: ['Ø', 'Ө', 'Ф', 'Օ'],
	P: ['₱', '₽'],
	Q: ['Ⴓ'],
	R: ['₨', 'Я'],
	S: ['$', '₴'],
	T: ['₸', '₮'],
	U: ['Ս', 'Ս'],
	V: ['Ѵ'],
	W: ['₩'],
	X: ['χ', 'Ӿ'],
	Y: ['¥', '￥'],
	Z: ['Ƶ', 'Ȥ']
};

export function getRandomCursedVariantChar(char: string): string {
	if (!BASE_CHARACTERS_AND_NUMBERS.includes(char as BaseCharacters | BaseNumbers)) {
		return char;
	}
	const variants = CURSED_STYLE_MAP[char as BaseCharacters | BaseNumbers];
	return getRandomValueFromArray(variants);
}

export function cursedText(text: string): string {
	for (const char of text) {
		const variantChar = getRandomCursedVariantChar(char);
		text = text.replaceAll(char, variantChar);
	}
	return text;
}

export function deCursedText(text: string): string {
	for (const baseChar of BASE_CHARACTERS_AND_NUMBERS) {
		const variants = CURSED_STYLE_MAP[baseChar as BaseCharacters | BaseNumbers];
		for (const variant of variants) {
			text = text.replaceAll(variant, baseChar);
		}
	}
	return text;
}
