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
	import Preview from '$lib/components/generator/Preview.svelte';

	// 输入组件的参数
	let {
		inputText = $bindable(),
		previewStyle,
		preSetStyle
	}: { inputText: string; previewStyle: Style[]; preSetStyle?: Style } = $props();

	// ------- 用户选项 ---------
	// 选风格
	let selectedStyle = $derived.by(() => {
		return preSetStyle || 'zalgo';
	});

	// zalgo 强度
	let intensity = $state(5);

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

	// 清除
	function clear() {
		inputText = '';
	}
</script>

<section class="flex w-full flex-col items-center gap-4 px-4 pb-8 lg:px-4">
	<!-- 输入和输出区域 -->
	<div class="flex w-full max-w-6xl flex-col items-center gap-4">
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
			<!-- 选项 -->
			<div class="flex flex-col gap-2 lg:flex-row">
				<!-- 选择风格 -->
				<label class="select w-full">
					<span class="label w-32">{m.style_label()}</span>
					<select bind:value={selectedStyle} class="h-fit">
						{#each STYLE_LIST as style (style)}
							{@const displayName = GENERATOR_NAME_MAP[style as Style]}
							<option value={style}>{displayName}</option>
						{/each}
					</select>
				</label>
				<!--  zalgo 强度 -->
				<label class="input w-full" hidden={selectedStyle !== 'zalgo'}>
					<span class="label">{m.input_add_zalgo_intensity()}:{intensity}</span>
					<input
						type="range"
						min="0"
						max="10"
						bind:value={intensity}
						class="range"
						disabled={selectedStyle !== 'zalgo'}
					/>
				</label>
				<!--TODO: 隐藏文字显影按钮 -->
				<a
					href={localizeHref(resolve(`/generator/${GENERATOR_URL_PATH_MAP['reveal-hidden']}`))}
					hidden={selectedStyle !== 'hidden'}
					class="btn btn-neutral">{m.style_reveal_hidden()}</a
				>
				<!-- 清除按钮 -->
				<button onclick={clear} class="btn btn-accent" disabled={!outputText}>
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
					class="btn btn-neutral"
					onclick={() => {
						inputText = inputText + '\u200B';
						inputText = inputText.slice(0, -1);
					}}>{m.generator_rerun()}</button
				>
			</div>
		</fieldset>

		<!-- Output -->
		<PreviewCard previewTitle={m.output_label()} {outputText} />
		<!-- 其他样式预览 -->
		<Preview {previewStyle} bind:inputText {intensity} />
	</div>

	<a
		href={localizeHref(resolve('/generator'))}
		class=" btn min-w-90 rounded text-xl btn-xl btn-primary"
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
