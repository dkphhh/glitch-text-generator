<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { resolve } from '$app/paths';
	import GeneratorCard from '$lib/components/generator/GeneratorCard.svelte';
	import {
		GENERATOR_URL_PATH_MAP,
		GENERATOR_NAME_MAP,
		GENERATOR_SUBTITLE_MAP
	} from '$lib/generator/generator';
	// 工具列表配置
	const selectedTools: Style[] = [
		'glitch',
		'cursed',
		'zalgo',
		'latin',
		'hacker',
		'unreadable',
		'flip',
		'upsideDown'
	];
</script>

<section class="py-12 md:py-16">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">{m.tools_section()}</h2>
		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each selectedTools as tool (tool)}
				{@const path = GENERATOR_URL_PATH_MAP[tool]}
				{@const generatorName = GENERATOR_NAME_MAP[tool]}
				{@const generatorSubtitle = GENERATOR_SUBTITLE_MAP[tool]}
				<GeneratorCard {path} {generatorName} {generatorSubtitle} />
			{/each}
			<GeneratorCard
				path={localizeHref(resolve('/generator'))}
				generatorName={m.generator_page_h1()}
				generatorSubtitle={m.generator_page_subtitle()}
			/>
		</div>
	</div>
</section>
