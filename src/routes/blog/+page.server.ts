import type { PageServerLoad } from './$types';
import { ALL_BLOG_POSTS } from '$lib/page-data/utils';

export const load: PageServerLoad = () => {
	return { ALL_BLOG_POSTS };
};
