<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
	import SeoTDK from '$lib/components/common/seo/SeoTDK.svelte';
	import type { BlogPost } from '$lib/page-data/types';
	import Article from '$lib/components/common/article/Article.svelte';

	// 获取当前页面的文章
	const locale = getLocale() as LangOptions;
	let { data } = $props();
	let localGuideData = $derived.by(() => {
		const defaultGuideData = data.ALL_GUIDE_PAGE.find((p) => p.language === 'en') as BlogPost;
		const local = data.ALL_GUIDE_PAGE.find((p) => p.language === locale);

		return local || defaultGuideData;
	});
</script>

<SeoTDK
	title={localGuideData.title}
	description={localGuideData.description}
	keywords={localGuideData.tags}
/>
<div class="py-8">
	<Article post={localGuideData} recommendPost={data.LATEST_3_BLOG_POSTS} />
</div>
