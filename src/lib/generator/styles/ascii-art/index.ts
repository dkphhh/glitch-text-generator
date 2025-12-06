import { getRandomValueFromArray } from '$lib/utils/common/tools';
import figlet from 'figlet';
figlet.defaults({
	font: 'Terrace', // default font
	fontPath: 'src/lib/assets/flf-font'
});

export const ASCII_ART_FONTS = [
	'3-D',
	'3D Diagonal',
	'ANSI Regular',
	'ANSI Shadow',
	'ANSI-Compact',
	'Banner4',
	'Bear',
	'Big Money-ne',
	'Bloody',
	'BlurVision ASCII',
	'Bright',
	'Cards',
	'DOS Rebel',
	'Dancing Font',
	'Delta Corps Priest 1',
	'DiamFont',
	'Dr Pepper',
	'Electronic',
	'Elite',
	'Emboss 2',
	'Emboss',
	'Flower Power',
	'Impossible',
	'Isometric1',
	'Isometric3',
	'Isometric4',
	'Larry 3D',
	'Modular',
	'Mono 9',
	'NT Greek',
	'Pagga',
	"Patorjk's Cheese",
	'Pepper',
	'Puffy',
	'Rebel',
	'Red Phoenix',
	'Shadow',
	'Small Block',
	'Small Isometric1',
	'Small Mono 12',
	'Small Slant',
	'Small',
	'Standard',
	'Sub-Zero',
	'Swamp Land',
	'Terrace',
	'Ticks Slant',
	'Train',
	'USA Flag',
	'miniwi'
];

export async function asciiStyleText(text: string, font?: string) {
	// 使用 figlet 生成 ASCII 艺术文本
	if (!font || !ASCII_ART_FONTS.includes(font)) {
		await asciiStyleText(text, getRandomValueFromArray(ASCII_ART_FONTS));
	}

	const result = await figlet.text(text, {
		font: font
	});
	return result;
}
