import type { PageServerLoad } from './$types';
import { getGeneratorPageContent } from '$lib/article/utils';
import { URL_PATH_GENERATOR_MAP } from '$lib/generator/generator';
import { getLocale } from '$lib/paraglide/runtime';
export const load: PageServerLoad = async ({ params }) => {
	const page = params.page;
	const generator = URL_PATH_GENERATOR_MAP[page];
	return {
		content: await getGeneratorPageContent(generator, getLocale())
	};
};
