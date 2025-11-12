import { decorate, type FontName } from 'unicode-text-decorator';
import { FONT_STYLES } from './const';
import { getRandomValueFromArray } from '$lib/utils/common/tools';
export function styleText(text: string, style: FontName): string {
	return decorate(text, style, { fallback: true });
}

export function randomStyleMixUp(text: string): string {
	for (const char of text) {
		const randomStyle = getRandomValueFromArray(FONT_STYLES);
		text = text.replaceAll(char, styleText(char, randomStyle));
	}
	return text;
}

export function randomStyleText(text: string): string {
	const randomStyle = getRandomValueFromArray(FONT_STYLES);
	return styleText(text, randomStyle);
}
