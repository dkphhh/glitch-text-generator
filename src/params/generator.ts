import type { ParamMatcher } from '@sveltejs/kit';
import { ALL_GENERATOR_KEY } from '$lib/generator/generator';

export const match = ((param: string): param is GeneratorType => {
	return ALL_GENERATOR_KEY.includes(param);
}) satisfies ParamMatcher;
