declare module 'zero-width-lib' {
	/**
	 * Dictionary of zero-width characters
	 */
	export const zeroWidthDict: {
		/** Left-to-Right Mark: U+200E */
		leftToRightMark: string;
		/** Right-to-Left Mark: U+200F */
		rightToLeftMark: string;
		/** Zero-Width Non-Joiner: U+200C */
		zeroWidthNonJoiner: string;
		/** Zero-Width Joiner: U+200D */
		zeroWidthJoiner: string;
		/** Zero-Width No-Break Space (BOM): U+FEFF */
		zeroWidthNoBreakSpace: string;
		/** Zero-Width Space: U+200B */
		zeroWidthSpace: string;
	};

	/**
	 * Convert text to zero-width characters
	 * @param text - The text to convert
	 * @returns Zero-width character representation of the text
	 * @example
	 * const zwc = t2z('hello'); // Returns invisible zero-width characters
	 */
	export function t2z(text: string): string;

	/**
	 * Convert zero-width characters back to text
	 * @param zwc - The zero-width characters to convert
	 * @returns The original text
	 * @example
	 * const text = z2t(zwc); // Returns 'hello'
	 */
	export function z2t(zwc: string): string;

	/**
	 * Encode hidden text into visible text
	 * Embeds invisible zero-width characters into visible text
	 * @param visible - The visible text
	 * @param hidden - The text to hide
	 * @returns Text with hidden content embedded
	 * @example
	 * const encoded = encode('hello world', 'secret'); // 'h*****ello world'
	 * // (* represents invisible characters)
	 */
	export function encode(visible: string, hidden: string): string;

	/**
	 * Decode hidden text from encoded text
	 * @param encoded - The encoded text containing hidden content
	 * @returns The hidden text
	 * @example
	 * const hidden = decode(encoded); // Returns 'secret'
	 */
	export function decode(encoded: string): string;

	/**
	 * Extract visible and hidden parts from encoded text
	 * @param encoded - The encoded text
	 * @returns Object containing visible and hidden parts
	 * @example
	 * const result = extract(encoded);
	 * console.log(result.vis); // 'hello world'
	 * console.log(result.hid); // Zero-width characters representing 'secret'
	 */
	export function extract(encoded: string): {
		/** The visible text */
		vis: string;
		/** The hidden zero-width characters */
		hid: string;
	};

	/**
	 * Split text by inserting zero-width spaces between characters
	 * Useful for escaping string matching or bypassing filters
	 * @param text - The text to split
	 * @returns Text with zero-width spaces between characters
	 * @example
	 * const escaped = split('forbidden'); // 'f*o*r*b*i*d*d*e*n'
	 * // (* represents invisible zero-width space)
	 */
	export function split(text: string): string;
}
