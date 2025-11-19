<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { FAQProps } from '$lib/page-data/faq';

	let { faqList }: { faqList: FAQProps[] } = $props();
</script>

{#snippet qa(id: string, q: string, a: string, checked: boolean = false)}
	<label for={id} class="collapse-plus collapse rounded border border-base-300 bg-base-200">
		<input {id} type="radio" name="faq-accordion" {checked} />
		<div class="collapse-title text-lg font-semibold">
			{q}
		</div>
		<div class="collapse-content">
			<p class="opacity-70">{a}</p>
		</div>
	</label>
{/snippet}

<section class="container mx-auto max-w-4xl bg-base-100 py-12 md:py-16">
	<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">{m.faq_title()}</h2>
	<div class="space-y-4">
		{#each faqList as faq, index (index)}
			{@const isFirst = index === 0}
			{@const faqId = `faq-${index}`}
			{@render qa(faqId, faq.question, faq.answer, isFirst)}
		{/each}
	</div>
</section>
