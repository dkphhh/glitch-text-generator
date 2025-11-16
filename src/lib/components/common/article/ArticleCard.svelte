<script lang="ts">
	import type { BlogPost } from '$lib/page-data/types';
	import { m } from '$lib/paraglide/messages';
	let { post, articleUrl }: { post: BlogPost; articleUrl: string } = $props();
</script>

<div class="card h-72 bg-base-100 card-border">
	<div class="card-body">
		<h2 class="card-title">{post.title}</h2>
		<p class="line-clamp-3 text-base text-base-content/70">
			{post.description}
		</p>
		<div class="card-actions justify-end">
			<time datetime={post.date} class="badge badge-outline">{post.date}</time>
			<a href={articleUrl} class="btn btn-primary">{m.read_article()}</a>
		</div>
	</div>
</div>
