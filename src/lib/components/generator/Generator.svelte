<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	import PreviewCard from '$lib/components/generator/PreviewCard.svelte';
	import { stylizeText, STYLE_LIST, GENERATOR_NAME_MAP } from '$lib/generator/generator';
	import { notificationManager } from '$lib/components/common/notification/notificationManager.svelte';
	import { resolve } from '$app/paths';
	import Preview from '$lib/components/generator/Preview.svelte';
	// ------- 用户选项 ---------
	// 选风格
	let selectedStyle = $state<Style>('zalgo');

	// zalgo 强度
	let intensity = $state(5);

	// 状态管理
	// 输入文本
	let { inputText = $bindable() }: { inputText: string } = $props();

	// 生成文本的函数
	function generateText(): string {
		if (!inputText.trim()) {
			return '';
		}

		if (selectedStyle && !STYLE_LIST.includes(selectedStyle)) {
			notificationManager.sentMessage({
				message: [m.inavlid_style_selected()],
				type: 'error'
			});
			return '';
		}

		let result = inputText;

		// 应用样式
		result = stylizeText(result, selectedStyle, { intensity });

		return result;
	}

	// 输出文本
	let outputText = $derived.by(() => {
		return generateText();
	});

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

<section class="flex w-full flex-col items-center gap-4 px-0 pb-8 lg:px-4">
	<!-- 输入和输出区域 -->
	<div class="flex w-full max-w-6xl flex-col items-center gap-4">
		<!-- Input -->
		<fieldset
			class="sticky top-14 z-10 fieldset w-full gap-2 border border-base-300 bg-base-200 p-4 lg:p-8"
		>
			<legend class="fieldset-legend">{m.input_label()}</legend>
			<input
				id="input-text"
				bind:value={inputText}
				class="input w-full resize-none font-mono text-sm lg:text-base"
				placeholder={m.input_placeholder()}
			/>
			<!-- 选项 -->
			<div class="flex flex-col gap-2 lg:flex-row">
				<!-- 选择风格 -->
				<label class="select w-full">
					<span class="label w-32">{m.style_label()}</span>
					<select bind:value={selectedStyle}>
						{#each Object.keys(GENERATOR_NAME_MAP) as style (style)}
							{@const displayName = GENERATOR_NAME_MAP[style as Style]}
							<option value={style}>{displayName}</option>
						{/each}
					</select>
				</label>
				<!--  zalgo  -->
				<label class="input w-full">
					<span class="label">{m.input_add_zalgo_effect()}:{intensity}</span>
					<input
						type="range"
						min="0"
						max="10"
						bind:value={intensity}
						class="range"
						disabled={selectedStyle !== 'zalgo'}
					/>
				</label>

				<button
					type="button"
					class="btn btn-neutral"
					onclick={() => {
						inputText = inputText + '\u200B';
						inputText = inputText.slice(0, -1);
					}}>{m.generator_rerun()}</button
				>
			</div>
		</fieldset>

		<!-- Output -->
		<PreviewCard previewTitle={m.output_label()} {outputText} bind:inputText />
		<!-- 其他样式预览 -->
		<Preview previewStyle={PREVIEW_STYLE} bind:inputText {intensity} />
	</div>

	<a
		href={localizeHref(resolve('/generator'))}
		class="btn w-full max-w-6xl py-12 text-xl font-light btn-ghost btn-xl">{m.more_style()}……</a
	>
</section>
