/**
 * 所有文章都放在 lib/page-data/content 目录下。
 * 博客文章放在 lib/page-data/content/blog 目录下
 * 其他单页放在对应的目录下，如 about、privacy-policy、terms-of-service、guide 等。
 * 文章使用 Markdown 格式编写，front matter 使用 YAML 语法，包含 language 字段以支持多语言。
 */

import type { BlogPost, BlogFrontmatter } from './types';
import matter from 'gray-matter';
import yaml from 'js-yaml';

/**
 * 从 Markdown 字符串中分割 front matter 和正文内容。
 *
 * @template T - 用于定义 front matter 解析后 `data` 对象的类型。
 * @param markdownContent - 包含 front matter 的完整 Markdown 字符串。
 * @returns 一个包含 `data` 和 `content` 的对象。`data` 是解析后的 front matter 数据，`content` 是剩余的 Markdown 内容。
 */
function spiltFrontMatterAndContent<T>(markdownContent: string): {
	data: T;
	content: string;
} {
	return matter(markdownContent.trim(), {
		engines: {
			yaml: {
				parse: (s: string) =>
					// 使用 JSON_SCHEMA 会把时间当作普通字符串而不是 Date
					yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object
			}
		}
	}) as unknown as {
		data: T;
		content: string;
	};
}

/**
 * 获取所有博客文章
 * 使用 Vite 的 import.meta.glob 动态导入所有 Markdown 文件
 */
async function getAllBlogPosts(): Promise<BlogPost[]> {
	const modules = import.meta.glob<string>('./content/blog/*.md', {
		query: '?raw',
		import: 'default'
	});

	const posts: BlogPost[] = [];

	for (const [path, resolver] of Object.entries(modules)) {
		// 从文件路径提取 slug
		const slug = path.replace('./content/blog/', '').replace('.md', '');

		// 获取 Markdown 内容
		const rawContent = await resolver();

		// 解析 front matter
		const { data, content } = spiltFrontMatterAndContent<BlogFrontmatter>(rawContent);

		posts.push({
			slug,
			title: data.title,
			description: data.description,
			date: data.date,
			author: data.author,
			tags: data.tags,
			language: data.language,
			content
		});
	}

	// 按日期倒序排列
	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * 根据 slug 获取单篇文章
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
	return ALL_BLOG_POSTS.find((post) => post.slug === slug) || null;
}

async function processSinglePages(
	modules: Record<string, () => Promise<string>>,
	basePath: string
): Promise<BlogPost[]> {
	const pages: BlogPost[] = [];
	for (const [path, resolver] of Object.entries(modules)) {
		const rawContent = await resolver();
		const { data, content } = spiltFrontMatterAndContent<BlogFrontmatter>(rawContent);
		const slug = path.replace(basePath, '').replace('.md', '');

		pages.push({
			slug,
			title: data.title,
			description: data.description,
			date: data.date,
			author: data.author,
			tags: data.tags,
			language: data.language,
			content
		});
	}
	return pages;
}

async function getAllPrivacyPolicyPages(): Promise<BlogPost[]> {
	const modules = import.meta.glob<string>('./content/privacy-policy/*.md', {
		query: '?raw',
		import: 'default'
	});
	return processSinglePages(modules, './content/');
}

async function getAllAboutPages(): Promise<BlogPost[]> {
	const modules = import.meta.glob<string>('./content/about/*.md', {
		query: '?raw',
		import: 'default'
	});
	return processSinglePages(modules, './content/');
}

async function getAllGuidePages(): Promise<BlogPost[]> {
	const modules = import.meta.glob<string>('./content/guide/*.md', {
		query: '?raw',
		import: 'default'
	});
	return processSinglePages(modules, './content/');
}

async function getAllTermsOfServicePages(): Promise<BlogPost[]> {
	const modules = import.meta.glob<string>('./content/terms-of-service/*.md', {
		query: '?raw',
		import: 'default'
	});
	return processSinglePages(modules, './content/');
}

export const ALL_PRIVACY_POLICY_PAGE = await getAllPrivacyPolicyPages();
export const ALL_ABOUT_PAGE = await getAllAboutPages();
export const ALL_GUIDE_PAGE = await getAllGuidePages();
export const ALL_TERMS_OF_SERVICE_PAGE = await getAllTermsOfServicePages();

export const ALL_BLOG_POSTS = await getAllBlogPosts();
export const LATEST_3_BLOG_POSTS = ALL_BLOG_POSTS.sort((a, b) => {
	const dateA = new Date(a.date).getTime();
	const dateB = new Date(b.date).getTime();
	return dateB - dateA;
}).slice(0, 3);
console.log(
	'网站文章加载完成:\n',
	`博客文章数量：${ALL_BLOG_POSTS.length} 篇\n`,
	`关于页面：${ALL_ABOUT_PAGE.length} 篇\n`,
	`使用指南页面：${ALL_GUIDE_PAGE.length} 篇\n`,
	`隐私政策页面：${ALL_PRIVACY_POLICY_PAGE.length} 篇\n`,
	`服务条款页面：${ALL_TERMS_OF_SERVICE_PAGE.length} 篇\n`
);
