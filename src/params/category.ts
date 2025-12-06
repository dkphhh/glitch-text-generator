import type { ParamMatcher } from '@sveltejs/kit';
import { ALL_CATEGORY } from '$lib/generator/generatorData';

export const match = ((param: string) => {
	return (ALL_CATEGORY as string[]).includes(param);
}) satisfies ParamMatcher;
