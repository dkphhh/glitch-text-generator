<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
</script>

{#snippet feature(icon: string, title: string, description: string)}
	<div class="card rounded! bg-base-200 shadow-lg">
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
		{@render feature('⚡', m.feature_instant(), m.feature_instant_desc())}
		{@render feature('📋', m.feature_copy(), m.feature_copy_desc())}
		{@render feature('🎨', m.feature_styles(), m.feature_styles_desc())}
		{@render feature('🆓', m.feature_free(), m.feature_free_desc())}
	</div>
</section>
