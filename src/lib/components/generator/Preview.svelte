<script lang="ts">
	import { stylizeText, GENERATOR_NAME_MAP } from '$lib/generator/generator';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { resolve } from '$app/paths';
	import { m } from '$lib/paraglide/messages.js';
	import PreviewCard from '$lib/components/generator/PreviewCard.svelte';
	import { page } from '$app/state';

	let {
		previewStyle,
		inputText,
		intensity = 5
	}: {
		previewStyle: Style[];
		inputText: string;
		intensity: number;
	} = $props();

	const FEATURED_STYLES: Style[] = ['zalgo', 'ascii-art'];

	// Featured styles preview text
	let featuredPreviewStyleText: Promise<Record<Style, string>> = $derived.by(async () => {
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

	let featuredPreviewItems = $derived.by(() => {
		const previewsPromise = featuredPreviewStyleText;

		return FEATURED_STYLES.map((style) => {
			const s = style as Style;
			return {
				key: s,
				outputText: previewsPromise.then((previews) => previews[s]),
				previewTitle: Promise.resolve(GENERATOR_NAME_MAP[s])
			};
		});
	});

	// Other styles preview text
	let previewStyleText: Promise<Record<Style, string>> = $derived.by(async () => {
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
			previews[s] = await stylizeText(inputText, s, { intensity: intensity });
		}

		return previews;
	});

	let isGeneratorPage = $derived.by(() => {
		return page.params.generator !== undefined;
	});

	let previewItems = $derived.by(() => {
		const previewsPromise = previewStyleText;

		return previewStyle.map((style) => {
			const s = style as Style;

			return {
				key: s,
				outputText: previewsPromise.then((previews) => previews[s]),
				previewTitle: Promise.resolve(GENERATOR_NAME_MAP[s])
			};
		});
	});
</script>

{#snippet moreStyleButton()}
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
{/snippet}

<section class="container mx-auto mb-8 flex max-w-6xl flex-col gap-4">
	{#if isGeneratorPage}
		{@render moreStyleButton()}
	{/if}

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each featuredPreviewItems as item (item.key)}
			{#if item.key === 'zalgo'}
				<div>
					<PreviewCard
						outputText={item.outputText}
						previewTitle={item.previewTitle}
						style={item.key}
					/>
				</div>
			{:else}
				<div class="sm:col-span-1 lg:col-span-2">
					<PreviewCard
						outputText={item.outputText}
						previewTitle={item.previewTitle}
						style={item.key}
					/>
				</div>
			{/if}
		{/each}
	</div>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each previewItems as item (item.key)}
			<PreviewCard outputText={item.outputText} previewTitle={item.previewTitle} style={item.key} />
		{/each}
	</div>
	{#if !isGeneratorPage}
		{@render moreStyleButton()}
	{/if}
</section>
