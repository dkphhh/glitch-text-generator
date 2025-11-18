import { m } from '$lib/paraglide/messages.js';

export type HowToProps = {
	title: string;
	description: string;
};

export const COMMON_HOW_TO_USE: HowToProps[] = [
	{
		title: m.step_1(),
		description: m.step_1_desc()
	},
	{
		title: m.step_2(),
		description: m.step_2_desc()
	},
	{
		title: m.step_3(),
		description: m.step_3_desc()
	},
	{
		title: m.step_4(),
		description: m.step_4_desc()
	}
];
