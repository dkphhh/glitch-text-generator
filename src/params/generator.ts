import type { ParamMatcher } from '@sveltejs/kit';
import { GENERATORS } from '$lib/generator/generator';

export const match = ((param: string) => {
	return GENERATORS.includes(param);
}) satisfies ParamMatcher;
