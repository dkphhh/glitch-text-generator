import type { PageServerLoad } from './$types';
import { getAllBlogPostsInLocale } from '$lib/page-data/utils';
import { getLocale } from '$lib/paraglide/runtime';
export const load: PageServerLoad = () => {
	return { ALL_BLOG_POSTS: getAllBlogPostsInLocale(getLocale()) };
};
