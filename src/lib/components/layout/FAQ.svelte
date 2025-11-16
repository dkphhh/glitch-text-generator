<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
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

<section class="container mx-auto max-w-4xl bg-base-100 px-4 py-12 md:py-16">
	<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">{m.faq_title()}</h2>
	<div class="space-y-4">
		{@render qa('faq-1', m.faq_what(), m.faq_what_answer(), true)}
		{@render qa('faq-2', m.faq_how(), m.faq_how_answer())}
		{@render qa('faq-3', m.faq_safe(), m.faq_safe_answer())}
		{@render qa('faq-4', m.faq_platforms(), m.faq_platforms_answer())}
	</div>
</section>
