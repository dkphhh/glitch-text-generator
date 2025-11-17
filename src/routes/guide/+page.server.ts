import type { PageServerLoad } from './$types';
import { getGuidePage, getThreeBlogPostsInLocale } from '$lib/page-data/utils';
import { getLocale } from '$lib/paraglide/runtime';
export const load: PageServerLoad = async () => {
	return {
		page: await getGuidePage(getLocale()),
		recentBlogPosts: getThreeBlogPostsInLocale(getLocale())
	};
};
