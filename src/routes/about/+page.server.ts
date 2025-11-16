import type { PageServerLoad } from './$types';
import { ALL_ABOUT_PAGE, LATEST_3_BLOG_POSTS } from '$lib/page-data/utils';

export const load: PageServerLoad = () => {
	return { ALL_ABOUT_PAGE, LATEST_3_BLOG_POSTS };
};
