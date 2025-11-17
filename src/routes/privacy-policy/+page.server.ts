import type { PageServerLoad } from './$types';
import { getPrivacyPolicyPage, getThreeBlogPostsInLocale } from '$lib/page-data/utils';
import { getLocale } from '$lib/paraglide/runtime';
export const load: PageServerLoad = async () => {
	return {
		page: await getPrivacyPolicyPage(getLocale()),
		recentBlogPosts: getThreeBlogPostsInLocale(getLocale())
	};
};
