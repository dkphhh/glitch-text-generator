<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SeoTDK from '$lib/components/common/seo/SeoTDK.svelte';
	import {
		GENERATOR_NAME_MAP,
		GENERATOR_SUBTITLE_MAP,
		GENERATOR_URL_PATH_MAP,
		ALL_GENERATOR_KEY
	} from '$lib/generator/generator';

	import Front from '$lib/components/layout/Front.svelte';
	import GeneratorCard from '$lib/components/generator/GeneratorCard.svelte';
	import HowTo from '$lib/components/layout/HowTo.svelte';
	import Features from '$lib/components/layout/Features.svelte';
	import FAQ from '$lib/components/layout/FAQ.svelte';
</script>

<SeoTDK title={m.generator_page_title()} description={m.generator_page_description()} />

<div>
	<Front title={m.generator_page_h1()} subtitle={m.generator_page_subtitle()} />
	<!-- 暂时所有的 generator -->
	<section class="fieldset">
		<div class="container mx-auto flex flex-col items-center gap-8 rounded px-16 py-8">
			<h2 class="fieldset-legend"><span class="text-lg">✨</span> {m.generator_page_h2()}</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each ALL_GENERATOR_KEY as key (key)}
					{@const k = key as GeneratorType}
					{@const path = GENERATOR_URL_PATH_MAP[k]}
					{@const name = GENERATOR_NAME_MAP[k]}
					{@const subtitle = GENERATOR_SUBTITLE_MAP[k]}

					<GeneratorCard {path} generatorName={name} generatorSubtitle={subtitle} />
				{/each}
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<Features />

	<!-- How to Use Section -->
	<HowTo />

	<FAQ />
</div>
