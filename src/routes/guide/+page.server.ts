import type { PageServerLoad } from './$types';
import { ALL_GUIDE_PAGE, LATEST_3_BLOG_POSTS } from '$lib/page-data/utils';

export const load: PageServerLoad = () => {
	return { ALL_GUIDE_PAGE, LATEST_3_BLOG_POSTS };
};
