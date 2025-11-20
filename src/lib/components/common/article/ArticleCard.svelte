<script lang="ts">
	import type { BlogPost } from '$lib/article/types';
	import { m } from '$lib/paraglide/messages';
	let { post, articleUrl }: { post: BlogPost; articleUrl: string } = $props();
</script>

<div class="card border-base-300 bg-base-200 card-border">
	<a class="card-body hover:bg-base-200" href={articleUrl}>
		<h2 class="card-title">{post.title}</h2>
		<p class="line-clamp-3 text-base text-base-content/70">
			{post.description}
		</p>
		<div class="card-actions items-center! justify-end">
			<time datetime={post.date} class="badge badge-outline badge-sm">{post.date}</time>
			<button type="button" class="btn btn-xs btn-primary">{m.read_article()}</button>
		</div>
	</a>
</div>
