import { decorate, type FontName } from 'unicode-text-decorator';


export function styleText(text: string, style: FontName): string {
	return decorate(text, style, { fallback: true });
}

