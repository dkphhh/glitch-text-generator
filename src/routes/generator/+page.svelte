<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SeoTDK from '$lib/components/common/seo/SeoTDK.svelte';
	import {
		GENERATOR_NAME_MAP,
		GENERATOR_SUBTITLE_MAP,
		GENERATOR_URL_PATH_MAP,
		ALL_GENERATOR_KEY,
		getGeneratorStyle,
		stylizeText
	} from '$lib/generator/generator';
	import { COMMON_FAQS } from '$lib/page-data/faq';
	import { resolve } from '$app/paths';
	import { ASCII_ART_GENERATOR, ALL_GENERATOR_DATA } from '$lib/generator/generatorData';
	import Front from '$lib/components/layout/Front.svelte';
	import GeneratorCard from '$lib/components/generator/GeneratorCard.svelte';
	import HowTo from '$lib/components/layout/HowTo.svelte';
	import Features from '$lib/components/layout/Features.svelte';
	import FAQ from '$lib/components/layout/FAQ.svelte';
	import { localizeUrl } from '$lib/paraglide/runtime';
	import { COMMON_FEATURES } from '$lib/page-data/features';
	import { COMMON_HOW_TO_USE } from '$lib/page-data/how-to';

	async function generatePreview(style: Style) {
		if (ASCII_ART_GENERATOR.includes(style)) {
			return await stylizeText('ABC', style);
		}

		return await stylizeText('Glitch Text', style);
	}
</script>

<SeoTDK title={m.generator_page_title()} description={m.generator_page_description()} />

<div>
	<Front title={m.generator_page_h1()} subtitle={m.generator_page_subtitle()} />
	<!-- 暂时所有的 generator -->
	<section class="fieldset">
		<div class="container mx-auto flex flex-col items-center gap-8 rounded pb-8">
			<h2 class="fieldset-legend"><span class="text-lg">✨</span> {m.generator_page_h2()}</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each ALL_GENERATOR_KEY as key (key)}
					{@const k = key as GeneratorType}
					{@const path = localizeUrl(resolve(`/generator/${GENERATOR_URL_PATH_MAP[k]}`)).toString()}
					{@const name = GENERATOR_NAME_MAP[k]}
					{@const subtitle = GENERATOR_SUBTITLE_MAP[k]}
					{@const style = getGeneratorStyle(k)}
					{@const previewText = generatePreview(style)}
					{@const category = ALL_GENERATOR_DATA[k].category}

					<GeneratorCard
						{path}
						generatorName={name}
						generatorSubtitle={subtitle}
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
