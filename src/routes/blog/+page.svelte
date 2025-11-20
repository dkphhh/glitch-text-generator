<script lang="ts">
	import Front from '$lib/components/layout/Front.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { resolve } from '$app/paths';
	import SeoTDK from '$lib/components/common/seo/SeoTDK.svelte';
	import ArticleCard from '$lib/components/common/article/ArticleCard.svelte';
	let { data } = $props();

	const localData = $derived(data.ALL_BLOG_POSTS);
</script>

<SeoTDK title={m.blog_title()} description={m.blog_description()} />

<div class="container mx-auto flex flex-col items-center gap-8 px-4 py-8">
	<Front title={m.blog_title()} subtitle={m.blog_subtitle()} />
	<section class="grid grid-cols-1 gap-4 lg:grid-cols-3">
		{#each localData as p (p.slug)}
			<ArticleCard post={p} articleUrl={localizeHref(resolve(`/blog/${p.slug}`))} />
		{/each}
	</section>
</div>
