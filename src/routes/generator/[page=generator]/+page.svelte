<script lang="ts">
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { zalgoRandomGeneration, zalgoGeneration } from '$lib/main/zalgo';
	import { styleText } from '$lib/main/glitch-text/style-text';
	import { randomFontVariant, textFontVariant } from '$lib/main/font-variant';
	import { FONT_STYLES } from '$lib/main/font-variant/const';
	import SeoTDK from '$lib/components/common/seo/SeoTDK.svelte';
	import { notificationManager } from '$lib/components/common/notification/notificationManager.svelte';

	// 获取当前页面参数
	const generatorType = $derived(page.params.page as string);

	// 状态管理
	let inputText = $state('');
	let outputText = $state('');
	let intensity = $state(5);
	let zalgoUp = $state(5);
	let zalgoMid = $state(5);
	let zalgoDown = $state(5);
	let selectedFont = $state<string>('bold_serif');

	// 根据 generator 类型配置
	type GeneratorConfig = {
		titleKey: string;
		descKey: string;
		h1Key: string;
		subtitleKey: string;
		showIntensity: boolean;
		showZalgoControls: boolean;
		showFontSelector: boolean;
		defaultStyle:
			| 'zalgo'
			| 'cursed'
			| 'cool'
			| 'sharp'
			| 'confused'
			| 'latin'
			| 'hacker'
			| 'unreadable';
	};

	const generatorConfigs: Record<string, GeneratorConfig> = {
		'zalgo-text-generator': {
			titleKey: 'generator_zalgo_title',
			descKey: 'generator_zalgo_description',
			h1Key: 'generator_zalgo_h1',
			subtitleKey: 'generator_zalgo_subtitle',
			showIntensity: true,
			showZalgoControls: true,
			showFontSelector: false,
			defaultStyle: 'zalgo'
		},
		'cursed-text-generator': {
			titleKey: 'generator_cursed_title',
			descKey: 'generator_cursed_description',
			h1Key: 'generator_cursed_h1',
			subtitleKey: 'generator_cursed_subtitle',
			showIntensity: true,
			showZalgoControls: false,
			showFontSelector: false,
			defaultStyle: 'cursed'
		},
		'cool-text-generator': {
			titleKey: 'generator_cool_title',
			descKey: 'generator_cool_description',
			h1Key: 'generator_cool_h1',
			subtitleKey: 'generator_cool_subtitle',
			showIntensity: false,
			showZalgoControls: false,
			showFontSelector: true,
			defaultStyle: 'cool'
		},
		'glitch-font-generator': {
			titleKey: 'generator_glitch_font_title',
			descKey: 'generator_glitch_font_description',
			h1Key: 'generator_glitch_font_h1',
			subtitleKey: 'generator_glitch_font_subtitle',
			showIntensity: false,
			showZalgoControls: false,
			showFontSelector: true,
			defaultStyle: 'cool'
		},
		'discord-glitch-text-generator': {
			titleKey: 'generator_discord_title',
			descKey: 'generator_discord_description',
			h1Key: 'generator_discord_h1',
			subtitleKey: 'generator_discord_subtitle',
			showIntensity: true,
			showZalgoControls: false,
			showFontSelector: false,
			defaultStyle: 'zalgo'
		},
		'roblox-glitch-text-generator': {
			titleKey: 'generator_roblox_title',
			descKey: 'generator_roblox_description',
			h1Key: 'generator_roblox_h1',
			subtitleKey: 'generator_roblox_subtitle',
			showIntensity: true,
			showZalgoControls: false,
			showFontSelector: false,
			defaultStyle: 'zalgo'
		},
		'minecraft-glitch-text-generator': {
			titleKey: 'generator_minecraft_title',
			descKey: 'generator_minecraft_description',
			h1Key: 'generator_minecraft_h1',
			subtitleKey: 'generator_minecraft_subtitle',
			showIntensity: true,
			showZalgoControls: false,
			showFontSelector: false,
			defaultStyle: 'zalgo'
		},
		'unreadable-text-generator': {
			titleKey: 'generator_unreadable_title',
			descKey: 'generator_unreadable_description',
			h1Key: 'generator_unreadable_h1',
			subtitleKey: 'generator_unreadable_subtitle',
			showIntensity: true,
			showZalgoControls: true,
			showFontSelector: false,
			defaultStyle: 'unreadable'
		},
		'hacker-text-generator': {
			titleKey: 'generator_hacker_title',
			descKey: 'generator_hacker_description',
			h1Key: 'generator_hacker_h1',
			subtitleKey: 'generator_hacker_subtitle',
			showIntensity: false,
			showZalgoControls: false,
			showFontSelector: true,
			defaultStyle: 'hacker'
		}
	};

	const config = $derived(
		generatorConfigs[generatorType] || generatorConfigs['zalgo-text-generator']
	);

	// 生成文本
	function generateText() {
		if (!inputText.trim()) {
			outputText = '';
			return;
		}

		let result = inputText;

		switch (config.defaultStyle) {
			case 'zalgo':
				if (config.showZalgoControls) {
					result = zalgoGeneration(result, zalgoUp, zalgoMid, zalgoDown);
				} else {
					result = zalgoRandomGeneration(result, Math.min(intensity, 5)); // 限制强度避免 Discord 等平台问题
				}
				break;
			case 'cursed':
				result = zalgoRandomGeneration(result, intensity);
				result = styleText(result, 'confused');
				break;
			case 'cool':
				if (config.showFontSelector) {
					result = textFontVariant(result, selectedFont as Parameters<typeof textFontVariant>[1]);
				} else {
					result = randomFontVariant(result);
				}
				break;
			case 'sharp':
				result = styleText(result, 'sharp');
				break;
			case 'confused':
				result = styleText(result, 'confused');
				break;
			case 'latin':
				result = styleText(result, 'latin');
				break;
			case 'hacker':
				result = textFontVariant(result, 'monospace');
				result = styleText(result, 'sharp');
				break;
			case 'unreadable':
				result = zalgoGeneration(result, 10, 10, 10);
				break;
		}

		outputText = result;
	}

	// 监听输入变化自动生成
	$effect(() => {
		generateText();
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

	// 获取配置对应的 i18n 消息
	const titleText = $derived(m[config.titleKey as keyof typeof m]?.() ?? '');
	const descText = $derived(m[config.descKey as keyof typeof m]?.() ?? '');
	const h1Text = $derived(m[config.h1Key as keyof typeof m]?.() ?? '');
	const subtitleText = $derived(m[config.subtitleKey as keyof typeof m]?.() ?? '');
</script>

<SeoTDK title={titleText} description={descText} />

<div class="min-h-screen bg-base-200">
	<!-- Hero Section -->
	<section class="hero bg-linear-to-br from-primary/10 via-base-100 to-secondary/10 py-12 md:py-16">
		<div class="hero-content text-center">
			<div class="max-w-4xl">
				<h1
					class="mb-4 bg-linear-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
				>
					{h1Text}
				</h1>
				<p class="mb-6 text-lg opacity-80 md:text-xl">
					{subtitleText}
				</p>
			</div>
		</div>
	</section>

	<!-- Main Generator Tool -->
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
				<div class="mb-6 space-y-4">
					{#if config.showZalgoControls}
						<!-- Zalgo 精细控制 -->
						<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
							<div class="form-control">
								<label class="label" for="zalgo-up">
									<span class="label-text font-semibold">Zalgo Up: {zalgoUp}</span>
								</label>
								<input
									id="zalgo-up"
									type="range"
									min="0"
									max="10"
									bind:value={zalgoUp}
									class="range range-primary range-sm"
								/>
							</div>
							<div class="form-control">
								<label class="label" for="zalgo-mid">
									<span class="label-text font-semibold">Zalgo Mid: {zalgoMid}</span>
								</label>
								<input
									id="zalgo-mid"
									type="range"
									min="0"
									max="10"
									bind:value={zalgoMid}
									class="range range-primary range-sm"
								/>
							</div>
							<div class="form-control">
								<label class="label" for="zalgo-down">
									<span class="label-text font-semibold">Zalgo Down: {zalgoDown}</span>
								</label>
								<input
									id="zalgo-down"
									type="range"
									min="0"
									max="10"
									bind:value={zalgoDown}
									class="range range-primary range-sm"
								/>
							</div>
						</div>
					{:else if config.showIntensity}
						<!-- 简单强度控制 -->
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
							/>
						</div>
					{/if}

					{#if config.showFontSelector}
						<!-- 字体选择器 -->
						<div class="form-control">
							<label class="label" for="font-select">
								<span class="label-text font-semibold">Font Style</span>
							</label>
							<select id="font-select" bind:value={selectedFont} class="select-bordered select">
								{#each FONT_STYLES as fontStyle (fontStyle)}
									<option value={fontStyle}>{fontStyle.replace(/_/g, ' ').toUpperCase()}</option>
								{/each}
							</select>
						</div>
					{/if}
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

	<!-- Platform-specific Tips (if applicable) -->
	{#if generatorType === 'discord-glitch-text-generator'}
		<section class="container mx-auto max-w-4xl px-4 pb-12">
			<div class="alert alert-info">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="h-6 w-6 shrink-0 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path></svg
				>
				<div>
					<h3 class="font-bold">Discord Tips</h3>
					<p class="text-sm">
						We limit the intensity to prevent display issues on Discord. For best results, keep
						intensity moderate.
					</p>
				</div>
			</div>
		</section>
	{:else if generatorType === 'roblox-glitch-text-generator'}
		<section class="container mx-auto max-w-4xl px-4 pb-12">
			<div class="alert alert-info">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="h-6 w-6 shrink-0 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path></svg
				>
				<div>
					<h3 class="font-bold">Roblox Compatibility</h3>
					<p class="text-sm">
						This generator is optimized for Roblox. Text works on both mobile and desktop versions.
					</p>
				</div>
			</div>
		</section>
	{:else if generatorType === 'minecraft-glitch-text-generator'}
		<section class="container mx-auto max-w-4xl px-4 pb-12">
			<div class="alert alert-info">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="h-6 w-6 shrink-0 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path></svg
				>
				<div>
					<h3 class="font-bold">Minecraft Compatibility</h3>
					<p class="text-sm">
						Compatible with both Java and Bedrock editions. Test in-game to ensure proper display.
					</p>
				</div>
			</div>
		</section>
	{:else if generatorType === 'unreadable-text-generator'}
		<section class="container mx-auto max-w-4xl px-4 pb-12">
			<div class="alert alert-warning">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 shrink-0 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/></svg
				>
				<div>
					<h3 class="font-bold">Warning: Maximum Intensity</h3>
					<p class="text-sm">
						This generator uses maximum zalgo intensity. The result may be difficult to read and
						could cause display issues on some platforms.
					</p>
				</div>
			</div>
		</section>
	{/if}

	<!-- How it Works Section -->
	<section class="bg-base-100 py-12 md:py-16">
		<div class="container mx-auto max-w-4xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">{m.how_to_use()}</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div class="flex gap-4">
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-content"
					>
						1
					</div>
					<div>
						<h3 class="mb-2 text-lg font-bold">{m.step_1()}</h3>
						<p class="text-sm opacity-70">{m.step_1_desc()}</p>
					</div>
				</div>
				<div class="flex gap-4">
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-content"
					>
						2
					</div>
					<div>
						<h3 class="mb-2 text-lg font-bold">{m.step_3()}</h3>
						<p class="text-sm opacity-70">{m.step_3_desc()}</p>
					</div>
				</div>
				<div class="flex gap-4">
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-content"
					>
						3
					</div>
					<div>
						<h3 class="mb-2 text-lg font-bold">Preview Result</h3>
						<p class="text-sm opacity-70">See your glitch text generated in real-time</p>
					</div>
				</div>
				<div class="flex gap-4">
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-content"
					>
						4
					</div>
					<div>
						<h3 class="mb-2 text-lg font-bold">{m.step_4()}</h3>
						<p class="text-sm opacity-70">{m.step_4_desc()}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
