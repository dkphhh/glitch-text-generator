<script lang="ts">
	import { stylizeText, STYLE_MAP } from '$lib/generator/style';
	import PreviewCard from '$lib/components/generator/PreviewCard.svelte';
	let {
		previewStyle,
		inputText = $bindable(),
		intensity = 5
	}: {
		previewStyle: Style[];
		inputText: string;
		intensity: number;
	} = $props();

	// 其他样式预览文本
	let previewStyleText: Record<Style, string> = $derived.by(() => {
		if (!inputText.trim()) {
			let result = {} as Record<Style, string>;
			for (let style of previewStyle) {
				const s = style as Style;
				result[s] = '';
			}
			return result;
		}

		const previews = {} as Record<Style, string>;

		for (let style of previewStyle) {
			const s = style as Style;
			previews[s] = stylizeText(inputText, s, { intensity: intensity });
		}

		return previews;
	});
</script>

<div class=" grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
	{#each Object.keys(previewStyleText) as style (style)}
		{@const s = style as Style}
		{@const outputText = previewStyleText[s]}
		{@const previewTitle = STYLE_MAP[s]}
		<PreviewCard {outputText} bind:inputText {previewTitle} />
	{/each}
</div>


