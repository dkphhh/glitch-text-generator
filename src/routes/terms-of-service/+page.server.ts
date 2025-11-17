import type { PageServerLoad } from './$types';
import { getTermsOfServicePage, getThreeBlogPostsInLocale } from '$lib/page-data/utils';
import { getLocale } from '$lib/paraglide/runtime';
export const load: PageServerLoad = async () => {
	return {
		page: await getTermsOfServicePage(getLocale()),
		recentBlogPosts: getThreeBlogPostsInLocale(getLocale())
	};
};
