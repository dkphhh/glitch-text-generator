<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
</script>

{#snippet howTo(index: number, title: string, description: string)}
	<div class="text-center">
		<div
			class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-content"
		>
			{index}
		</div>
		<h3 class="mb-2 text-lg font-bold">{title}</h3>
		<p class="text-sm opacity-70">{description}</p>
	</div>
{/snippet}

<section class="container mx-auto px-4 py-12 md:py-16">
	<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">{m.how_to_use()}</h2>
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
		{@render howTo(1, m.step_1(), m.step_1_desc())}
		{@render howTo(2, m.step_2(), m.step_2_desc())}
		{@render howTo(3, m.step_3(), m.step_3_desc())}
		{@render howTo(4, m.step_4(), m.step_4_desc())}
	</div>
</section>
