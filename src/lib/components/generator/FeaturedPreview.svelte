<script lang="ts">
	import { stylizeText, GENERATOR_NAME_MAP } from '$lib/generator/generator';
	import PreviewCard from '$lib/components/generator/PreviewCard.svelte';

	let {
		inputText,
		intensity = 5
	}: {
		inputText: string;
		intensity: number;
	} = $props();

	const FEATURED_STYLES: Style[] = ['zalgo', 'ascii-art'];

	// 生成预览文本
	let previewStyleText: Promise<Record<Style, string>> = $derived.by(async () => {
		if (!inputText.trim()) {
			let result = {} as Record<Style, string>;
			for (let style of FEATURED_STYLES) {
				const s = style as Style;
				result[s] = '';
			}
			return result;
		}

		const previews = {} as Record<Style, string>;

		for (let style of FEATURED_STYLES) {
			const s = style as Style;
			previews[s] = await stylizeText(inputText, s, { intensity: intensity });
		}

		return previews;
	});

	let previewItems = $derived.by(() => {
		const previewsPromise = previewStyleText;

		return FEATURED_STYLES.map((style) => {
			const s = style as Style;
			return {
				key: s,
				outputText: previewsPromise.then((previews) => previews[s]),
				previewTitle: Promise.resolve(GENERATOR_NAME_MAP[s])
			};
		});
	});
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
	{#each previewItems as item (item.key)}
		{#if item.key === 'zalgo'}
			<div>
				<PreviewCard outputText={item.outputText} previewTitle={item.previewTitle} />
			</div>
		{:else}
			<div class="sm:col-span-1 lg:col-span-2">
				<PreviewCard outputText={item.outputText} previewTitle={item.previewTitle} />
			</div>
		{/if}
	{/each}
</div>
