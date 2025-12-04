import figlet from 'figlet';
figlet.defaults({
	font: 'Standard', // default font
	fontPath: 'src/lib/assets/flf-font'
});

export const ASCII_ART_FONTS = await figlet.fonts();

export async function asciiStyleText(text: string, font?: string) {
	// 使用 figlet 生成 ASCII 艺术文本
	if (!font || !ASCII_ART_FONTS.includes(font)) {
		await asciiStyleText(text, 'Standard');
	}

	const result = await figlet.text(text, {
		font: font
	});
	return result;
}
