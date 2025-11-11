declare module 'unicode-text-decorator' {
	type FontName =
		| 'bold_serif'
		| 'italic_serif'
		| 'bold_italic_serif'
		| 'script'
		| 'bold_script'
		| 'fraktur'
		| 'bold_fraktur'
		| 'double_struck'
		| 'sans_serif'
		| 'bold_sans_serif'
		| 'italic_sans_serif'
		| 'bold_italic_sans_serif'
		| 'monospace'
		| 'regional_indicator'
		| 'circle'
		| 'black_circle'
		| 'square'
		| 'parenthesized'
		| 'fullwidth';

	interface DecorateOptions {
		fallback?: boolean;
	}

	function decorate(targetString: string, fontName: FontName, option?: DecorateOptions): string;
}
