import * as z from 'zero-width-lib';

export function hideText(text: string): string {
	const encoded = z.encode('*'.repeat(text.length), text);
	return encoded;
}

export function revealText(encoded: string): string {
	const decoded = z.decode(encoded);
	return decoded;
}
