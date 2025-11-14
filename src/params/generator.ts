import type { ParamMatcher } from '@sveltejs/kit';
import { GENERATOR_URL_PATH_MAP } from '$lib/generator/generator';

const GENERATOR_URL_PATH = Object.values(GENERATOR_URL_PATH_MAP);

export const match = ((param: string) => {
	return GENERATOR_URL_PATH.includes(param);
}) satisfies ParamMatcher;
