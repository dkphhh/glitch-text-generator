import type { PageServerLoad } from './$types';
import { getAboutPage, getThreeBlogPostsInLocale } from '$lib/article/utils';
import { getLocale } from '$lib/paraglide/runtime';
export const load: PageServerLoad = async () => {
	return {
		page: await getAboutPage(getLocale()),
		recentBlogPosts: getThreeBlogPostsInLocale(getLocale())
	};
};
