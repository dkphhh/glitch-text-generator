<script lang="ts">
	import SeoTDK from '$lib/components/common/seo/SeoTDK.svelte';
	import Article from '$lib/components/common/article/Article.svelte';

	// 获取当前页面的文章
	let { data } = $props();
	let localData = $derived(data.page);
</script>

<SeoTDK title={localData.title} description={localData.description} keywords={localData.tags} />
<div class="py-8">
	<Article post={localData} recommendPost={data.recentBlogPosts} />
</div>
