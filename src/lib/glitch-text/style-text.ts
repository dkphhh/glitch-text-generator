import { obfuscate, remove } from 'confusables'; // with ES modules
import { randomSharpStyleText, deSharpStyleText } from './character-variant/sharp-style';
import { STYLE_MAP, BASE_CHARACTERS_AND_NUMBERS } from './const';

// confusables 基本覆盖了拉丁扩展 、国际音标扩展、unicode-text-decorator 的字体变体，sharp style 主要增加了货币符号的变体

function getRandomStyleVariantChar(char: string): string {
	if (!BASE_CHARACTERS_AND_NUMBERS.includes(char as BaseCharacters | BaseNumbers)) {
		return char;
	}
	const length = Object.keys(STYLE_MAP).length;
	const randomIndex = Math.floor(Math.random() * length);
	const styleKey = Object.keys(STYLE_MAP)[randomIndex];
	const styleVariant = STYLE_MAP[styleKey as keyof typeof STYLE_MAP](char);
	return styleVariant;
}


export function randomConfusedText(text: string): string {
	return obfuscate(text);
}


export function randomStyleText(text: string): string {
	for (const char of text) {
		text = text.replaceAll(char, getRandomStyleVariantChar(char));
	}
	return text;
}

export function deStyleText(text: string): string {
	return remove(deSharpStyleText(text));
}

export { randomSharpStyleText };
