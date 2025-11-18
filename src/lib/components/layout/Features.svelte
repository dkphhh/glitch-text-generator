<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	import type { FeatureProps } from '$lib/page-data/features';

	let { features }: { features: FeatureProps[] } = $props();
</script>

{#snippet feature(icon: string, title: string, description: string)}
	<div class="card rounded! bg-base-200">
		<div class="card-body items-center text-center">
			<div class="mb-4 text-4xl">{icon}</div>
			<h3 class="card-title text-lg">{title}</h3>
			<p class="text-sm opacity-70">{description}</p>
		</div>
	</div>
{/snippet}

<section class="container mx-auto px-4 py-12 md:py-16">
	<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">{m.features_title()}</h2>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		{#each features as f (f.title)}
			{@render feature(f.icon, f.title, f.description)}
		{/each}
	</div>
</section>
