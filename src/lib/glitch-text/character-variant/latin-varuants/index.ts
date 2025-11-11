import { latinCharactersMap, baseLatinCharacters } from './const';

import { getRandomValueFromArray } from '$lib/utils/common/tools';

function getRandomLatinVariants(char: string): string {
	if (!baseLatinCharacters.includes(char)) {
		return char;
	}

	const latinVariant = latinCharactersMap[char as BaseCharacters]['variants'];
	const result = getRandomValueFromArray(latinVariant);
	return result;
}

export function randomLatinizeText(text: string): string {
	for (const char of text) {
		text.replaceAll(char, getRandomLatinVariants(char));
	}

	return text;
}
