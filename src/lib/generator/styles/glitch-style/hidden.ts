import * as z from 'zero-width-lib';

// TODO: 实现真正的隐藏字符
export function hideText(text: string): string {
	const encoded = z.encode('*'.repeat(text.length), text);
	return encoded;
}

export function revealText(encoded: string): string {
	const decoded = z.decode(encoded);
	return decoded;
}
