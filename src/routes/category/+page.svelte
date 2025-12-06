<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SeoTDK from '$lib/components/common/seo/SeoTDK.svelte';
	import { ALL_CATEGORY } from '$lib/generator/generatorData';
	import { stylizeText } from '$lib/generator/generator';
	import { resolve } from '$app/paths';
	import Front from '$lib/components/layout/Front.svelte';
	import CategoryCard from '$lib/components/generator/CategoryCard.svelte';
	import HowTo from '$lib/components/layout/HowTo.svelte';
	import Features from '$lib/components/layout/Features.svelte';
	import FAQ from '$lib/components/layout/FAQ.svelte';
	import { localizeUrl } from '$lib/paraglide/runtime';
	import { COMMON_FEATURES } from '$lib/page-data/features';
	import { COMMON_HOW_TO_USE } from '$lib/page-data/how-to';
	import { COMMON_FAQS } from '$lib/page-data/faq';

	const CATEGORY_DETAILS: Record<GeneratorCatgory, { title: string; desc: string }> = {
		glitch: { title: m.category_glitch_title(), desc: m.category_glitch_desc() },
		'font-variant': {
			title: m.category_font_variant_title(),
			desc: m.category_font_variant_desc()
		},
		fun: { title: m.category_fun_title(), desc: m.category_fun_desc() },
		'ascii-art': { title: m.category_ascii_art_title(), desc: m.category_ascii_art_desc() }
	};

	const CATEGORY_PREVIEW_STYLE: Record<GeneratorCatgory, Style> = {
		glitch: 'zalgo',
		'font-variant': 'bold_serif',
		fun: 'upsideDown',
		'ascii-art': 'ascii-art'
	};

	async function generatePreview(category: GeneratorCatgory) {
		const style = CATEGORY_PREVIEW_STYLE[category];
		if (category === 'ascii-art') {
			return await stylizeText('ABC', style);
		}
		return await stylizeText('Glitch Text', style);
	}
</script>

<SeoTDK title={m.category_page_title()} description={m.category_page_description()} />

<div>
	<Front title={m.category_page_h1()} subtitle={m.category_page_subtitle()} />

	<section class="fieldset">
		<div class="container mx-auto flex flex-col items-center gap-8 rounded pb-8">
			<h2 class="fieldset-legend"><span class="text-lg">✨</span> {m.category_page_h2()}</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				{#each ALL_CATEGORY as category (category)}
					{@const path = localizeUrl(resolve(`/category/${category}`)).toString()}
					{@const details = CATEGORY_DETAILS[category]}
					{@const previewText = generatePreview(category)}

					<CategoryCard
						{path}
						title={details.title}
						description={details.desc}
						preview={previewText}
						{category}
					/>
				{/each}
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<Features features={COMMON_FEATURES} />

	<!-- How to Use Section -->
	<HowTo howToList={COMMON_HOW_TO_USE} />

	<FAQ faqList={COMMON_FAQS} />
</div>
