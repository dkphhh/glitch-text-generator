<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SeoTDK from '$lib/components/common/seo/SeoTDK.svelte';
	import Generator from '$lib/components/generator/Generator.svelte';
	import Front from '$lib/components/layout/Front.svelte';

	import Features from '$lib/components/layout/Features.svelte';
	import SpecializedGenerators from '$lib/components/layout/SpecializedGenerators.svelte';
	import HowTo from '$lib/components/layout/HowTo.svelte';
	import FAQ from '$lib/components/layout/FAQ.svelte';

	let inputText: string = $state('Glitch Text');

	// 预览样式列表
	const PREVIEW_STYLE: Style[] = [
		'zalgo',
		'glitch',
		'cursed',
		'hacker',
		'cool',
		'flip',
		'upsideDown',
		'latin',
		'script',
		'bold_script',
		'fraktur',
		'bold_fraktur',
		'double_struck',
		'monospace',
		'fullwidth'
	];
</script>

<SeoTDK
	title={m.home_title_seo()}
	description={m.home_description_seo()}
	keywords={[
		'glitch text generator',
		'zalgo text',
		'cursed text generator',
		'cool text generator',
		'glitchy text',
		'glitch font generator',
		'discord glitch text',
		'roblox glitch text'
	]}
/>

<div class="min-h-screen w-full">
	<!-- 标题 -->
	<Front title={m.home_h1()} subtitle={m.home_subtitle()} />

	<!-- Main Generator Tool -->
	<Generator bind:inputText previewStyle={PREVIEW_STYLE} />

	<!-- Features Section -->
	<Features />

	<!-- How to Use Section -->
	<HowTo />

	<!-- Specialized Generators -->
	<SpecializedGenerators />

	<!-- FAQ Section -->
	<FAQ />
</div>
