import type { PageServerLoad } from './$types';
import { ALL_TERMS_OF_SERVICE_PAGE, LATEST_3_BLOG_POSTS } from '$lib/page-data/utils';

export const load: PageServerLoad = async () => {
	return { ALL_TERMS_OF_SERVICE_PAGE, LATEST_3_BLOG_POSTS };
};
