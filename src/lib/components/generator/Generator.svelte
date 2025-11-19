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

	// 输入组件的参数
	let {
		inputText = $bindable(),
		inputTextInternal = $bindable(),
		intensity = $bindable(),
		preSetStyle
	}: {
		inputText: string;
		inputTextInternal: string;
		intensity: number;
		preSetStyle?: Style;
	} = $props();

	// ------- 用户选项 ---------
	// 选风格
	let selectedStyle = $derived.by(() => {
		return preSetStyle || 'zalgo';
	});

	// 生成文本的函数
	function generateText(): string {
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

		let result = inputTextInternal;

		// 应用样式
		result = stylizeText(result, selectedStyle, { intensity });

		return result;
	}

	// 输出文本
	let outputText = $derived.by(() => {
		return generateText();
	});

	// 清除
	function clear() {
		inputText = '';
	}
</script>

<section class="container mx-auto mb-8 flex max-w-6xl flex-col items-center gap-4">
	<!-- Input -->
	<fieldset
		class="sticky top-14 z-10 fieldset w-full gap-2 rounded border-2 border-primary bg-base-200 p-4"
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
			<!-- 按钮组 -->
			<div class="flex w-full flex-col gap-2 lg:flex-1 lg:flex-row">
				<!-- 显影按钮 -->
				<a
					href={localizeHref(resolve(`/generator/${GENERATOR_URL_PATH_MAP['reveal-hidden']}`))}
					hidden={selectedStyle !== 'hidden'}
					class="btn btn-sm btn-neutral lg:flex-1 lg:btn-md">{m.reveal_button()}</a
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
					}}>{m.generator_rerun()}</button
				>
			</div>
		</div>
	</fieldset>

	<!-- Output -->
	<PreviewCard previewTitle={m.output_label()} {outputText} />
</section>
