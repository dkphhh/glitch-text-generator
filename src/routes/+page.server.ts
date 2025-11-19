import type { PageServerLoad } from './$types';
import { getGeneratorPageContent } from '$lib/article/utils';
import { getLocale } from '$lib/paraglide/runtime';
export const load: PageServerLoad = async () => {
	return {
		content: await getGeneratorPageContent('home', getLocale())
	};
};
