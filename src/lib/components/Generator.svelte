<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { stylizeText, STYLE_LIST, type Style } from '$lib/generator/style';
	import { notificationManager } from '$lib/components/common/notification/notificationManager.svelte';

	// 用户选项
	let selectedStyle = $state<Style>(undefined);
	let isZalgo = $state(false);
	let intensity = $state(5);

	// 状态管理
	let inputText = $state('');
	let outputText = $derived.by(() => {
		if (!inputText.trim()) {
			return '';
		}

		if (selectedStyle && !STYLE_LIST.includes(selectedStyle)) {
			notificationManager.sentMessage({
				// TODO: i18n
				message: ['Invalid style selected'],
				type: 'error'
			});
			return '';
		}

		let result = inputText;

		// 应用样式
		result = stylizeText(result, selectedStyle, { enabled: isZalgo, intensity });

		return result;
	});

	// 复制到剪贴板
	async function copyToClipboard() {
		if (!outputText) return;

		try {
			await navigator.clipboard.writeText(outputText);
			notificationManager.sentMessage({
				message: [m.copy_success()],
				type: 'success'
			});
		} catch {
			notificationManager.sentMessage({
				message: ['Failed to copy'],
				type: 'error'
			});
		}
	}

	// 清除
	function clear() {
		inputText = '';
		outputText = '';
	}
</script>

<section class="container mx-auto px-4 py-8 md:py-12">
	<div class="card mx-auto max-w-4xl bg-base-100 shadow-2xl">
		<div class="card-body">
			<!-- Input -->
			<div class="form-control mb-6">
				<label class="label" for="input-text">
					<span class="label-text text-lg font-semibold">{m.input_placeholder()}</span>
				</label>
				<textarea
					id="input-text"
					bind:value={inputText}
					class="textarea-bordered textarea h-32 text-lg textarea-lg"
					placeholder={m.input_placeholder()}
				></textarea>
			</div>

			<!-- Controls -->
			<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
				<!-- Style Selector -->
				<div class="form-control">
					<label class="label" for="style-select">
						<span class="label-text font-semibold">{m.style_label()}</span>
					</label>
					<select id="style-select" bind:value={selectedStyle} class="select-bordered select">
						<option value="random">{m.style_random()}</option>
						<option value="zalgo">{m.style_zalgo()}</option>
						<option value="cursed">{m.style_cursed()}</option>
						<option value="cool">{m.style_cool()}</option>
						<option value="sharp">{m.style_sharp()}</option>
						<option value="confused">{m.style_confused()}</option>
						<option value="latin">{m.style_latin()}</option>
					</select>
				</div>

				<!-- Intensity Slider -->
				<div class="form-control">
					<label class="label" for="intensity-slider">
						<span class="label-text font-semibold">{m.intensity_label()}: {intensity}</span>
					</label>
					<input
						id="intensity-slider"
						type="range"
						min="1"
						max="10"
						bind:value={intensity}
						class="range range-primary"
						disabled={selectedStyle === 'cool'}
					/>
				</div>
			</div>

			<!-- Output -->
			<div class="form-control mb-6">
				<label class="label" for="output-text">
					<span class="label-text text-lg font-semibold">{m.output_label()}</span>
				</label>
				<textarea
					id="output-text"
					value={outputText}
					readonly
					class="textarea-bordered textarea h-32 font-mono text-lg textarea-lg"
					placeholder={m.output_label()}
				></textarea>
			</div>

			<!-- Action Buttons -->
			<div class="flex flex-wrap justify-center gap-3">
				<button onclick={copyToClipboard} class="btn btn-lg btn-primary" disabled={!outputText}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
						/>
					</svg>
					{m.copy_button()}
				</button>
				<button onclick={clear} class="btn btn-ghost btn-lg">
					{m.clear_button()}
				</button>
			</div>
		</div>
	</div>
</section>
