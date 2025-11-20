<script lang="ts">
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { page } from '$app/state';
	import { dev } from '$app/environment';
	import { locales, baseLocale, localizeHref } from '$lib/paraglide/runtime';

	let {
		title,
		description,
		keywords,
		canonical
	}: {
		title?: string;
		description?: string;
		keywords?: string[];
		/**
		 * baseUrl 之后的规范链接部分，例如："/generator/zalgo"
		 */
		canonical?: string;
	} = $props();

	// 默认 TDK 配置
	const DEFAULT_TITLE = 'Glitch Text Generator - Create Zalgo & Glitchy Text - Copy & Paste';
	const DEFAULT_TITLE_SUFFIX = 'Glitch Text Generator - Copy & Paste';
	const DEFAULT_DESCRIPTION =
		'Free online glitch text generator. Create scary, cursed, and cool glitchy text effects instantly. Perfect for Discord, Roblox, and more. Copy and paste easily.';
	const DEFAULT_KEYWORDS = [
		'glitch text generator',
		'zalgo text',
		'cursed text generator',
		'cool text generator',
		'glitchy text',
		'glitch font generator',
		'discord glitch text',
		'roblox glitch text'
	];

	// 网站基础 URL，e.g. https://www.example.com
	const SITE_URL = PUBLIC_BASE_URL;

	/**
	 * 生成最终的页面标题
	 * 否则使用默认标题
	 */
	let seoTitle = (() => {
		if (title && title.length <= 30) {
			return `${title} - ${DEFAULT_TITLE_SUFFIX}`;
		}

		if (title) {
			return title;
		}

		return DEFAULT_TITLE;
	})();

	/**
	 * 生成最终的页面描述
	 * 优先使用自定义描述，否则使用默认描述
	 */
	let seoDescription = description || DEFAULT_DESCRIPTION;

	/**
	 * 生成最终的关键词列表
	 * 合并自定义关键词和默认关键词，去重
	 */
	let seoKeywords = keywords
		? [...new Set([...keywords, ...DEFAULT_KEYWORDS])].join(', ')
		: DEFAULT_KEYWORDS.join(', ');

	/**
	 * 生成规范链接
	 */
	let canonicalUrl = $derived.by(() => {
		if (canonical) {
			// 如果提供了规范链接，则使用 baseUrl + canonical
			return `${SITE_URL}${canonical}`;
		}
		// 否则使用当前页面路径
		return SITE_URL + page.url.pathname;
	});

	/**
	 * 语言代码映射到 ISO 639-1 和国家代码
	 * 用于 hreflang 标签
	 */
	const LOCALE_TO_HREFLANG: Record<string, string> = {
		en: 'en',
		es: 'es',
		fr: 'fr',
		de: 'de',
		zh: 'zh-CN',
		ja: 'ja',
		ru: 'ru',
		pt: 'pt',
		id: 'id',
		ko: 'ko'
	};

	/**
	 * 生成所有语言版本的 hreflang URLs
	 */
	let hreflangUrls = $derived.by(() => {
		const currentPath = page.url.pathname;
		return locales.map((locale) => ({
			locale,
			hreflang: LOCALE_TO_HREFLANG[locale] || locale,
			url: `${SITE_URL}${localizeHref(currentPath, { locale })}`
		}));
	});

	/**
	 * 生成 Schema.org 结构化数据的 JSON 字符串
	 */
	const schemaJson = JSON.stringify(
		{
			'@context': 'https://schema.org',
			'@type': 'WebApplication',
			name: seoTitle,
			description: DEFAULT_DESCRIPTION,
			url: SITE_URL,
			applicationCategory: 'UtilityApplication',
			operatingSystem: 'Web',
			offers: {
				'@type': 'Offer',
				price: '0',
				priceCurrency: 'USD'
			}
		},
		null,
		2
	);

	const schemaScript = '<script type="application/ld+json">' + schemaJson + '<' + '/script>';
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
	<meta name="keywords" content={seoKeywords} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Hreflang tags for multilingual SEO -->
	{#each hreflangUrls as { hreflang, url } (hreflang)}
		<link rel="alternate" {hreflang} href={url} />
	{/each}

	<!-- x-default for default language -->
	<link
		rel="alternate"
		hreflang="x-default"
		href={`${SITE_URL}${localizeHref(page.url.pathname, { locale: baseLocale })}`}
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={seoDescription} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={canonicalUrl} />
	<meta property="twitter:title" content={seoTitle} />
	<meta property="twitter:description" content={seoDescription} />

	<!-- Schema.org structured data -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html schemaScript}

	<!-- 正式环境才加载统计代码 -->
	{#if !dev}
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-CB0W6K7F5X"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', 'G-CB0W6K7F5X');
		</script>

		<!-- google 站长工具 -->

		<!-- Microsoft clarity -->
		<script type="text/javascript">
			(function (c, l, a, r, i, t, y) {
				c[a] =
					c[a] ||
					function () {
						(c[a].q = c[a].q || []).push(arguments);
					};
				t = l.createElement(r);
				t.async = 1;
				t.src = 'https://www.clarity.ms/tag/' + i;
				y = l.getElementsByTagName(r)[0];
				y.parentNode.insertBefore(t, y);
			})(window, document, 'clarity', 'script', 'u7y85wmryq');
		</script>
	{/if}
</svelte:head>
