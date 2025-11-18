import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getPostBySlug, getThreeBlogPostsInLocale } from '$lib/article/utils';
import { getLocale } from '$lib/paraglide/runtime';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	const blogPosts = await getPostBySlug(params.slug);
	const locale = getLocale() as LangOptions;
	const blogPost = blogPosts.filter((p) => p.language === locale)[0];
	if (!blogPost) {
		error(404, 'Blog post not found');
	}
	return { blogPost, recentBlogPosts: getThreeBlogPostsInLocale(locale) };
};
