/**
 * 所有文章都放在 lib/article/content 目录下。
 * 博客文章放在 lib/article/content/blog 目录下
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
	const modules = import.meta.glob<string>('./content/blog/**/*.md', {
		query: '?raw',
		import: 'default'
	});

	const posts: BlogPost[] = [];

	for (const [path, resolver] of Object.entries(modules)) {
		// 从文件路径提取 slug
		const slug = path.replace('./content/blog/', '').replace(/\/.*.md/, '');

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

	return posts;
}

const ALL_BLOG_POSTS = await getAllBlogPosts();

/**
 * 根据 slug 获取单篇文章，返回这篇文章的多语言版本，需要在调用处过滤
 */
export async function getPostBySlug(slug: string): Promise<BlogPost[]> {
	return ALL_BLOG_POSTS.filter((post) => post.slug === slug);
}

/**
 * 处理单篇页面模块并返回解析后的 BlogPost 列表。
 *
 * 遍历传入的 modules 映射（键为模块路径，值为返回原始文件内容的异步解析函数），
 * 对每个模块调用解析函数以获取原始文本，然后使用 spiltFrontMatterAndContent<BlogFrontmatter>
 * 将 frontmatter 与内容分离。通过从模块路径中移除 basePath 并删除 ".md" 后缀来生成 slug，
 * 最终将解析得到的字段（title、description、date、author、tags、language、content）组装为 BlogPost 对象。
 *
 * @param modules - 一个 Record 映射：键为文件路径（例如绝对或相对路径），值为一个返回原始文件字符串的异步函数。
 *                  该字符串应包含可被 spiltFrontMatterAndContent 解析的 frontmatter（例如 Markdown 文件）。
 * @param basePath - 用于从模块路径中裁剪出相对 slug 的基准路径。函数会将模块路径中的该 basePath 移除并去掉 ".md" 后缀以生成 slug。
 *
 * @returns 一个 Promise，解析为 BlogPost 数组。每个 BlogPost 至少包含以下字段：
 *          - slug: 从路径派生的标识符
 *          - title, description, date, author, tags, language: 来自 frontmatter 的元数据
 *          - content: frontmatter 之后的主体文本
 *
 */
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

/**
 * 获取隐私政策页面的指定语言版本。
 *
 * @param language - 目标语言（LangOptions），用于选择对应 language 字段的隐私政策页面
 * @returns 返回匹配语言的 BlogPost；如果指定语言不存在，则返回英语 ('en') 的 BlogPost 作为默认值
 */
export async function getPrivacyPolicyPage(language: LangOptions): Promise<BlogPost> {
	const modules = import.meta.glob<string>('./content/privacy-policy/*.md', {
		query: '?raw',
		import: 'default'
	});
	const allPages = await processSinglePages(modules, './content/');

	const locale = allPages.find((p) => p.language === language);
	const defaultLocale = allPages.find((p) => p.language === 'en');

	return locale ? locale : defaultLocale!;
}

/**
 * 获取关于页面的指定语言版本。
 * @param language - 目标语言（LangOptions），用于选择对应 language 字段的关于页面
 * @returns 返回匹配语言的 BlogPost；如果指定语言不存在，则返回英语 ('en') 的 BlogPost 作为默认值
 *
 */
export async function getAboutPage(language: LangOptions): Promise<BlogPost> {
	const modules = import.meta.glob<string>('./content/about/*.md', {
		query: '?raw',
		import: 'default'
	});
	const allPages = await processSinglePages(modules, './content/');

	const locale = allPages.find((p) => p.language === language);
	const defaultLocale = allPages.find((p) => p.language === 'en');

	return locale ? locale : defaultLocale!;
}

/**
 * 获取 guide 页面的指定语言版本。
 *
 * @param language - 目标语言（LangOptions），用于选择对应 language 字段的 guide 页面
 * @returns 返回匹配语言的 BlogPost；如果指定语言不存在，则返回英语 ('en') 的 BlogPost 作为默认值
 */
export async function getGuidePage(language: LangOptions): Promise<BlogPost> {
	const modules = import.meta.glob<string>('./content/guide/*.md', {
		query: '?raw',
		import: 'default'
	});
	const allPages = await processSinglePages(modules, './content/');

	const locale = allPages.find((p) => p.language === language);
	const defaultLocale = allPages.find((p) => p.language === 'en');

	return locale ? locale : defaultLocale!;
}

/**
 * 获取 Terms Of Service 页面的指定语言版本。
 *
 * @param language - 目标语言（LangOptions），用于选择对应 language 字段的 Terms Of Service  页面
 * @returns 返回匹配语言的 BlogPost；如果指定语言不存在，则返回英语 ('en') 的 BlogPost 作为默认值
 */
export async function getTermsOfServicePage(language: LangOptions): Promise<BlogPost> {
	const modules = import.meta.glob<string>('./content/terms-of-service/*.md', {
		query: '?raw',
		import: 'default'
	});
	const allPages = await processSinglePages(modules, './content/');

	const locale = allPages.find((p) => p.language === language);
	const defaultLocale = allPages.find((p) => p.language === 'en');

	return locale ? locale : defaultLocale!;
}

// 预加载所有 page-content 目录下的内容
const ALL_PAGE_CONTENT = await (async () => {
	// 使用静态 glob 模式导入所有页面内容
	const modules = import.meta.glob<string>('./page-content/**/*.md', {
		query: '?raw',
		import: 'default'
	});

	const allPages = await processSinglePages(modules, './page-content/');

	return allPages;
})();

/**
 * 获取指定页面的指定语言版本。
 *
 * @param pageType - 目标页面名称，格式为 "生成器 key" + "page",例如:"zalgo"、"upsideDown"
 * @param language - 目标语言 (LangOptions)
 * @returns 返回匹配语言的 BlogPost;如果指定语言不存在，则返回英语 ('en') 的 BlogPost 作为默认值
 */
export async function getGeneratorPageContent(
	pageType: GeneratorType | 'home',
	language: LangOptions
): Promise<BlogPost> {
	// 在运行时根据 pageType 和 language 进行过滤
	const targetFolder = `${pageType}-page`;
	const pagesInFolder = ALL_PAGE_CONTENT.filter((p) => p.slug.startsWith(targetFolder));

	const locale = pagesInFolder.find((p) => p.language === language);
	const defaultLocale = pagesInFolder.find((p) => p.language === 'en');

	return locale ? locale : defaultLocale!;
}

/**
 * 获取指定语言的最多三篇最新博客文章。
 *
 * 该函数从全局 ALL_BLOG_POSTS 中筛选出 language 字段与传入参数匹配的文章，
 * 然后按文章的 date 字段进行降序排序
 *
 * @param language - 目标语言（LangOptions），用于筛选文章的 language 字段
 * @returns 返回一个数组，包含按日期从新到旧排序的匹配语言的博客文章对象
 *
 * @remarks
 * - date 字段通过 new Date(...) 进行解析，确保日期字符串可被正确解析以进行比较。
 * - 函数对原始 ALL_BLOG_POSTS 进行非破坏性的筛选/排序操作（返回新数组的切片）。
 *
 */
export function getAllBlogPostsInLocale(language: LangOptions) {
	const locale = ALL_BLOG_POSTS.filter((p) => p.language === language);

	const defaultLocale = ALL_BLOG_POSTS.filter((p) => p.language === 'en');

	const result = locale.length === 0 || !locale ? defaultLocale : locale;

	return result.sort((a, b) => {
		const dateA = new Date(a.date).getTime();
		const dateB = new Date(b.date).getTime();
		return dateB - dateA;
	});
}

/**
 * 获取指定语言的最多三篇最新博客文章。
 *
 * 该函数从全局 ALL_BLOG_POSTS 中筛选出 language 字段与传入参数匹配的文章，
 * 然后按文章的 date 字段进行降序排序（使用 new Date(...) 解析日期），
 * 最后返回排序后的前 3 项。如果可用文章少于 3 篇，则返回实际存在的数量。
 *
 * @param language - 目标语言（LangOptions），用于筛选文章的 language 字段
 * @returns 返回一个数组，包含按日期从新到旧排序的最多三篇匹配语言的博客文章对象
 *
 * @remarks
 * - date 字段通过 new Date(...) 进行解析，确保日期字符串可被正确解析以进行比较。
 * - 函数对原始 ALL_BLOG_POSTS 进行非破坏性的筛选/排序操作（返回新数组的切片）。
 *
 */
export function getThreeBlogPostsInLocale(language: LangOptions) {
	return ALL_BLOG_POSTS.filter((p) => p.language === language)
		.sort((a, b) => {
			const dateA = new Date(a.date).getTime();
			const dateB = new Date(b.date).getTime();
			return dateB - dateA;
		})
		.slice(0, 3);
}

console.log('网站文章加载完成');
