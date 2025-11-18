import type { FontName } from 'unicode-text-decorator';

declare global {
	/**
	 * 提前定义好的 style 名称，可以是 undefined，选择 undefined 意味着不进行任何样式转换
	 */
	export type Style =
		| 'zalgo'
		| 'cool'
		| 'cursed'
		| 'flip'
		| 'glitch'
		| 'latin'
		| 'hacker'
		| 'hidden'
		| 'reveal-hidden'
		| 'unreadable'
		| 'upsideDown'
		| FontName;

	export type SpecialGenerator =
		| 'glitch-font'
		| 'discord-glitch'
		| 'roblox-glitch'
		| 'minecraft-glitch';

	export type GeneratorType = Style | SpecialGenerator;

	export type BaseCharacters =
		| 'a'
		| 'A'
		| 'b'
		| 'B'
		| 'c'
		| 'C'
		| 'd'
		| 'D'
		| 'e'
		| 'E'
		| 'f'
		| 'F'
		| 'g'
		| 'G'
		| 'h'
		| 'H'
		| 'i'
		| 'I'
		| 'j'
		| 'J'
		| 'k'
		| 'K'
		| 'l'
		| 'L'
		| 'm'
		| 'M'
		| 'n'
		| 'N'
		| 'o'
		| 'O'
		| 'p'
		| 'P'
		| 'q'
		| 'Q'
		| 'r'
		| 'R'
		| 's'
		| 'S'
		| 't'
		| 'T'
		| 'u'
		| 'U'
		| 'v'
		| 'V'
		| 'w'
		| 'W'
		| 'x'
		| 'X'
		| 'y'
		| 'Y'
		| 'z'
		| 'Z';

	export type BaseNumbers = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

	export type BaseSymbol = BaseCharacters | BaseNumbers;
}

export {};
