import { styleText } from '.';
import { getRandomValueFromArray } from '$lib/utils/common/tools';
import { type FontName } from 'unicode-text-decorator';

export const COOL_FONT_STYLES: FontName[] = [
	'script',
	'bold_script',
	'fraktur',
	'bold_fraktur',
	'double_struck',
	'monospace',
	'bold_serif',
	'italic_serif',
	'bold_italic_serif'
];

export function coolifyText(text: string): string {
	const randomStyle = getRandomValueFromArray(COOL_FONT_STYLES);
	return styleText(text, randomStyle);
}
