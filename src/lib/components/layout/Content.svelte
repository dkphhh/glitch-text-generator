<script lang="ts">
	import type { BlogPost } from '$lib/article/types';
	import MarkdownRender from '../common/article/MarkdownRender.svelte';

	let { post }: { post: BlogPost } = $props();
</script>

<section
	class="container mx-auto my-12 prose prose-base flex max-w-4xl flex-col items-center lg:prose-lg"
>
	<h2 class="px-6">{post.title}</h2>
	<article class="rounded border border-base-300 bg-base-200 p-12">
		<p class="opacity-70">{post.description}</p>
		<MarkdownRender md={post.content} />
	</article>
</section>
