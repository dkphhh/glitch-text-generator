<script lang="ts">
	import { stylizeText, GENERATOR_NAME_MAP } from '$lib/generator/generator';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { resolve } from '$app/paths';
	import { m } from '$lib/paraglide/messages.js';
	import PreviewCard from '$lib/components/generator/PreviewCard.svelte';
	let {
		previewStyle,
		inputText,
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

<section class="container mx-auto flex max-w-6xl flex-col gap-4 pb-8">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each Object.keys(previewStyleText) as style (style)}
			{@const s = style as Style}
			{@const outputText = previewStyleText[s]}
			{@const previewTitle = GENERATOR_NAME_MAP[s]}
			<PreviewCard {outputText} {previewTitle} />
		{/each}
	</div>

	<a
		href={localizeHref(resolve('/generator'))}
		class="btn mx-auto w-fit min-w-90 rounded text-xl btn-xl btn-primary"
		>{m.more_style()}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-step-forward-icon lucide-step-forward size-6 fill-none stroke-current stroke-2"
			><path
				d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"
			/><path d="M3 4v16" /></svg
		>
	</a>
</section>
