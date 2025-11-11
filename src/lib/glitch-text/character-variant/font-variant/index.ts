import { decorate, type FontName } from 'unicode-text-decorator';
import { FONT_STYLES } from './const';
import { getRandomValueFromArray } from '$lib/utils/common/tools';
export function textFontVariant(text: string, style: FontName): string {
	return decorate(text, style, { fallback: true });
}

export function randomFontVariant(text: string): string {
	for (const char of text) {
		const randomStyle = getRandomValueFromArray(FONT_STYLES);
		text = text.replace(char, textFontVariant(char, randomStyle));
	}
	return text;
}
