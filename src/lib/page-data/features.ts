import { m } from '$lib/paraglide/messages.js';

export type FeatureProps = {
	icon: string;
	title: string;
	description: string;
};

export const COMMON_FEATURES: FeatureProps[] = [
	{
		icon: '⚡',
		title: m.feature_instant(),
		description: m.feature_instant_desc()
	},
	{
		icon: '📋',
		title: m.feature_copy(),
		description: m.feature_copy_desc()
	},
	{
		icon: '🎨',
		title: m.feature_styles(),
		description: m.feature_styles_desc()
	},
	{
		icon: '🆓',
		title: m.feature_free(),
		description: m.feature_free_desc()
	}
];
