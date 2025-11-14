<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SeoTDK from '$lib/components/common/seo/SeoTDK.svelte';
	import { STYLE_LIST, GENERATOR_NAME_MAP } from '$lib/generator/style';
	import { GENERATOR_URL_MAP, GENERATORS } from '../../params/generator';
	import Front from '$lib/components/layout/Front.svelte';
</script>

<SeoTDK title={m.generator_page_title()} description={m.generator_page_description()} />

<div>
	<Front title={m.generator_page_h1()} subtitle={m.generator_page_subtitle()} />
	<!-- 暂时所有的 generator -->
	<section class="fieldset bg-base-100 py-12">
		<h2 class="fieldset-legend">{m.generator_page_h2()}</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each GENERATORS as g (g)}
				{@const url = GENERATOR_URL_MAP[g]}
				{@const styleList = STYLE_LIST.filter((s) => s === g)}
			{/each}
		</div>
	</section>
</div>
