<script lang="ts">
	import Generator from '$lib/components/generator/Generator.svelte';
	import {
		SPECIAL_GENERATORS_STYLE_MAP,
		SPECIAL_GENERATORS,
		STYLE_LIST,
		GENERATOR_PAGE_TITLE_MAP,
		GENERATOR_SUBTITLE_MAP,
		GENERATOR_DESCRIPTION_MAP,
		getGeneratorFromPath
	} from '$lib/generator/generator';
	import { page } from '$app/state';

	import Front from '$lib/components/layout/Front.svelte';
	import SeoTDK from '$lib/components/common/seo/SeoTDK.svelte';
	import HowTo from '$lib/components/layout/HowTo.svelte';
	import Features from '$lib/components/layout/Features.svelte';
	import FAQ from '$lib/components/layout/FAQ.svelte';

	// url 路径
	let pathParam = $derived(page.params.page);

	// 输入文本状态，默认为 "Glitch Text"
	let inputText = $state('Glitch Text');

	// 通过 url 路径获取生成器类型，默认是 zalgo
	let generatorKey: GeneratorType = $derived.by(() => {
		if (!pathParam) {
			console.warn('No generator type specified in the URL, defaulting to zalgo.');
			return 'zalgo';
		}
		return getGeneratorFromPath(pathParam);
	});

	// 通过生成器类型获取对应的样式键
	let styleKey: Style = $derived.by(() => {
		if (SPECIAL_GENERATORS.includes(generatorKey as SpecialGenerator)) {
			return SPECIAL_GENERATORS_STYLE_MAP[generatorKey as SpecialGenerator];
		}

		if (STYLE_LIST.includes(generatorKey)) {
			return generatorKey as Style;
		}

		return 'zalgo';
	});

	// 预览样式列表，排除当前生成器类型，最多显示 12 种
	const PREVIEW_STYLE: Style[] = $derived.by(() => {
		const otherStyles = STYLE_LIST.filter((style) => style !== styleKey) as Style[];
		return [...otherStyles.slice(0, 12)];
	});

	// 当前生成器页面的 title
	let pageTitle: string = $derived(GENERATOR_PAGE_TITLE_MAP[generatorKey]);

	let pageSubtitle: string = $derived(GENERATOR_SUBTITLE_MAP[generatorKey]);

	let pageDescription: string = $derived(GENERATOR_DESCRIPTION_MAP[generatorKey]);

	// 当前生成器页面的
</script>

<SeoTDK title={pageTitle} description={pageDescription} />
<div class="min-h-screen w-full">
	<Front title={pageTitle} subtitle={pageSubtitle} />
	<Generator bind:inputText previewStyle={PREVIEW_STYLE} preSetStyle={styleKey} />
	<Features />
	<HowTo />
	<FAQ />
</div>
