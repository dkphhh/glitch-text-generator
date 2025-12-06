<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	import PreviewCard from '$lib/components/generator/PreviewCard.svelte';
	import {
		stylizeText,
		STYLE_LIST,
		GENERATOR_NAME_MAP,
		GENERATOR_URL_PATH_MAP
	} from '$lib/generator/generator';
	import { notificationManager } from '$lib/components/common/notification/notificationManager.svelte';
	import { resolve } from '$app/paths';
	import { ASCII_ART_FONTS } from '$lib/generator/styles/ascii-art';
	// 输入组件的参数
	let {
		inputText = $bindable(),
		inputTextInternal = $bindable(),
		intensity = $bindable(),
		preSetStyle,
		preSetAsciiArtFont
	}: {
		inputText: string;
		inputTextInternal: string;
		intensity: number;
		preSetStyle?: Style;
		preSetAsciiArtFont?: string;
	} = $props();

	// ------- 用户选项 ---------
	// 选风格
	let selectedStyle = $derived.by(() => {
		return preSetStyle || 'zalgo';
	});
	// ascii 艺术字体选择
	let asciiArtFont = $derived.by(() => {
		if (ASCII_ART_FONTS.includes(preSetAsciiArtFont || 'Terrace')) {
			return preSetAsciiArtFont;
		}

		return 'Terrace';
	});

	// 生成文本的函数
	async function generateText(): Promise<string> {
		if (!inputTextInternal.trim()) {
			return '';
		}

		if (selectedStyle && !STYLE_LIST.includes(selectedStyle)) {
			notificationManager.sentMessage({
				message: [m.inavlid_style_selected()],
				type: 'error'
			});
			return '';
		}

		if (selectedStyle === 'ascii-art' && asciiArtFont && !ASCII_ART_FONTS.includes(asciiArtFont)) {
			notificationManager.sentMessage({
				message: [m.invalid_ascii_art_font_selected()],
				type: 'error'
			});
			return '';
		}

		let result = inputTextInternal;

		// 应用样式
		result = await stylizeText(result, selectedStyle, { intensity }, asciiArtFont);

		return result;
	}

	// 输出文本
	let outputText = $derived.by(async () => {
		return await generateText();
	});

	// 清除
	function clear() {
		inputText = '';
	}
</script>

<section class="container mx-auto mb-8 flex max-w-6xl flex-col items-center gap-4">
	<!-- Input -->
	<fieldset
		class="sticky top-14 z-10 fieldset w-full gap-2 rounded border-2 border-primary bg-base-200 p-4 lg:top-18"
	>
		<legend class="fieldset-legend">{m.input_label()}</legend>
		<input
			id="input-text"
			bind:value={inputText}
			class="input w-full resize-none font-mono text-sm lg:text-base"
			placeholder={m.input_placeholder()}
		/>
		<!-- 参数选项 -->
		<div class="flex flex-col items-center justify-center gap-2 lg:flex-row">
			<!-- 选择风格 -->
			<label for="select-style" class="select w-full lg:flex-1">
				<span class="label w-32">{m.style_label()}</span>
				<select id="select-style" bind:value={selectedStyle} class="text-sm lg:text-base">
					{#each STYLE_LIST as style (style)}
						{@const displayName = GENERATOR_NAME_MAP[style as Style]}
						<option value={style}>{displayName}</option>
					{/each}
				</select>
			</label>
			<!--  zalgo 强度 -->
			<label
				for="zalgo-intensity"
				class="input w-full text-sm lg:flex-1 lg:text-base"
				hidden={selectedStyle !== 'zalgo'}
			>
				<span class="label">{m.input_add_zalgo_intensity()}:{intensity}</span>
				<input
					id="zalgo-intensity"
					type="range"
					min="0"
					max="10"
					bind:value={intensity}
					class="range w-full"
					disabled={selectedStyle !== 'zalgo'}
				/>
			</label>
			<!-- ASCII Art 字体选择 -->
			<label
				for="select-ascii-font"
				class="select w-full lg:flex-1"
				hidden={selectedStyle !== 'ascii-art'}
			>
				<span class="label">{m.ascii_art_font_label}</span>
				<select id="select-ascii-font" bind:value={asciiArtFont} class="text-sm lg:text-base">
					{#each ASCII_ART_FONTS as font (font)}
						<option value={font}>{font}</option>
					{/each}
				</select>
			</label>
			<!-- 按钮组 -->
			<div class="flex w-full flex-col gap-2 lg:flex-1 lg:flex-row">
				<!-- 显影按钮 -->
				<a
					href={localizeHref(resolve(`/generator/${GENERATOR_URL_PATH_MAP['reveal-hidden']}`))}
					hidden={selectedStyle !== 'hidden'}
					class="btn btn-sm btn-neutral lg:flex-1 lg:btn-md"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-eye-icon lucide-eye size-4 fill-none stroke-current stroke-2"
						><path
							d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
						/><circle cx="12" cy="12" r="3" /></svg
					>
					{m.reveal_button()}</a
				>
				<!-- 清除按钮 -->
				<button
					onclick={clear}
					class="btn btn-sm btn-accent lg:flex-1 lg:btn-md"
					disabled={!outputText}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-eraser-icon lucide-eraser size-4 fill-none stroke-current stroke-2"
						><path
							d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"
						/><path d="m5.082 11.09 8.828 8.828" /></svg
					>

					{m.clear_button()}
				</button>
				<!-- 重新生成按钮 -->
				<button
					type="button"
					class="btn btn-sm btn-neutral lg:flex-1 lg:btn-md"
					onclick={() => {
						inputText = inputText + '\u200B';
						inputText = inputText.slice(0, -1);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-refresh-cw-icon lucide-refresh-cw size-4 fill-none stroke-current stroke-2"
						><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path
							d="M21 3v5h-5"
						/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path
							d="M8 16H3v5"
						/></svg
					>

					{m.generator_rerun()}</button
				>
			</div>
		</div>
	</fieldset>

	<!-- Output -->
	<PreviewCard previewTitle={(async () => m.output_label())()} {outputText} />
</section>
