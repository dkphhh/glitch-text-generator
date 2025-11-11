import { SHARP_STYLE_MAP } from './const';
import { BASE_CHARACTERS_AND_NUMBERS } from '../../const';
import { getRandomValueFromArray } from '$lib/utils/common/tools';

export function getRandomSharpVariantChar(char: string): string {
	if (!BASE_CHARACTERS_AND_NUMBERS.includes(char as BaseCharacters | BaseNumbers)) {
		return char;
	}
	const variants = SHARP_STYLE_MAP[char as BaseCharacters | BaseNumbers];
	return getRandomValueFromArray(variants);
}

export function randomSharpStyleText(text: string): string {
	for (const char of text) {
		const variantChar = getRandomSharpVariantChar(char);
		text = text.replaceAll(char, variantChar);
	}
	return text;
}

export function deSharpStyleText(text: string): string {
	for (const baseChar of BASE_CHARACTERS_AND_NUMBERS) {
		const variants = SHARP_STYLE_MAP[baseChar as BaseCharacters | BaseNumbers];
		for (const variant of variants) {
			text = text.replaceAll(variant, baseChar);
		}
	}
	return text;
}
