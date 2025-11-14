<script lang="ts">
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import SeoTDK from '$lib/components/common/seo/SeoTDK.svelte';

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
