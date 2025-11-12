import { obfuscate, remove } from 'confusables'; // with ES modules

export function confusedText(text: string): string {
	return obfuscate(text);
}

export function deConfusedText(text: string): string {
	return remove(text);
}
