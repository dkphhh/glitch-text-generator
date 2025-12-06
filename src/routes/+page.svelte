<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import SeoTDK from '$lib/components/common/seo/SeoTDK.svelte';
	import Generator from '$lib/components/generator/Generator.svelte';
	import { COMMON_FEATURES } from '$lib/page-data/features';
	import Features from '$lib/components/layout/Features.svelte';
	import SpecializedGenerators from '$lib/components/layout/SpecializedGenerators.svelte';
	import HowTo from '$lib/components/layout/HowTo.svelte';
	import FAQ from '$lib/components/layout/FAQ.svelte';
	import { COMMON_FAQS } from '$lib/page-data/faq';
	import { COMMON_HOW_TO_USE } from '$lib/page-data/how-to';
	import Preview from '$lib/components/generator/Preview.svelte';
	import Front from '$lib/components/layout/Front.svelte';
	import Content from '$lib/components/layout/Content.svelte';

	// 页面内容
	let { data } = $props();

	let pageData = $derived(data.content);

	// 用户输入的文本
	let inputText: string = $state('');

	// 实际输入的文本
	let inputTextInternal = $derived.by(() => {
		return inputText ? inputText : 'Glitch Text';
	});

	// zalgo 强度
	let intensity = $state(5);

	// 预览样式列表
	const PREVIEW_STYLE: Style[] = [
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
		'double_struck',
		'monospace'
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
	<Front title={m.home_h1()} subtitle={m.home_subtitle()} />
	<!-- Main Generator Tool -->
	<Generator bind:inputText bind:inputTextInternal bind:intensity />

	<!-- Preview Section -->
	<Preview previewStyle={PREVIEW_STYLE} inputText={inputTextInternal} {intensity} />

	<!-- 页面内容 -->
	<Content post={pageData} />

	<!-- Features Section -->
	<Features features={COMMON_FEATURES} />

	<!-- How to Use Section -->
	<HowTo howToList={COMMON_HOW_TO_USE} />

	<!-- Specialized Generators -->
	<SpecializedGenerators />

	<!-- FAQ Section -->
	<FAQ faqList={COMMON_FAQS} />
</div>
