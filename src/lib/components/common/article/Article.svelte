<script lang="ts">
	import type { BlogPost } from '$lib/page-data/types';
	import { m } from '$lib/paraglide/messages';
	import { resolve } from '$app/paths';
	import { localizeHref } from '$lib/paraglide/runtime';
	import MarkdownRender from './MarkdownRender.svelte';
	import ArticleCard from './ArticleCard.svelte';
	let { post, recommendPost }: { post: BlogPost; recommendPost: BlogPost[] } = $props();
</script>

<section class="container mx-auto max-w-4xl px-4">
	<article class="flex flex-col items-center gap-16">
		<!-- 文章 meta 部分 -->
		<div class="mb-6 flex flex-col items-center gap-8 text-pretty">
			<!-- 返回到 blog 按钮 -->
			<a class="btn btn-outline btn-sm btn-primary" href={localizeHref(resolve('/blog'))}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-skip-back-icon lucide-skip-back size-4 fill-none stroke-current stroke-2"
					><path
						d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"
					/><path d="M3 20V4" /></svg
				>
				{m.back_to_blog()}</a
			>
			<!-- 文章标题 -->
			<h1 class="text-4xl font-bold">{post.title}</h1>

			<!-- 文章描述 -->
			{#if post.description}
				<p class="text-base text-base-content/70">{post.description}</p>
			{/if}

			<!-- 作者，发布时间 -->
			<span class="text-sm font-light text-base-content/70">
				{post.author}@<time datetime={post.date}>{post.date}</time>
			</span>
		</div>
		<!-- 文章内容部分 -->
		<MarkdownRender md={post.content} />
	</article>
	<!-- 展示 3 篇最近文章 -->
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
		{#each recommendPost as post (post.slug)}
			{@const articleUrl = localizeHref(resolve(`/blog/${post.slug}`))}
			<ArticleCard {post} {articleUrl} />
		{/each}
	</div>
</section>
