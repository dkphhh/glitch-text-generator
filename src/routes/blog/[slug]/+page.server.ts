import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getPostBySlug, LATEST_3_BLOG_POSTS } from '$lib/page-data/utils';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	const blogPost = await getPostBySlug(params.slug);
	if (!blogPost) {
		error(404, 'Blog post not found');
	}
	return { blogPost, LATEST_3_BLOG_POSTS };
};
