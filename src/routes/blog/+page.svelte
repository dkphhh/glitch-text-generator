<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Nav from '$lib/components/layout/Nav.svelte';
	import SeoTDK from '$lib/components/common/seo/SeoTDK.svelte';
	import Generator from '$lib/components/generator/Generator.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { resolve } from '$app/paths';
	import Preview from '$lib/components/generator/Preview.svelte';

	let inputText: string = $state('Glitch Text');
	// 工具列表配置
	const tools = [
		{ key: 'zalgo', href: '/generator/zalgo-text-generator' },
		{ key: 'cursed', href: '/generator/cursed-text-generator' },
		{ key: 'cool', href: '/generator/cool-text-generator' },
		{ key: 'glitch_font', href: '/generator/glitch-font-generator' },
		{ key: 'discord', href: '/generator/discord-glitch-text-generator' },
		{ key: 'roblox', href: '/generator/roblox-glitch-text-generator' },
		{ key: 'minecraft', href: '/generator/minecraft-glitch-text-generator' },
		{ key: 'unreadable', href: '/generator/unreadable-text-generator' },
		{ key: 'hacker', href: '/generator/hacker-text-generator' }
	];

	// 预览样式列表
	const PREVIEW_STYLE: Style[] = [
		'glitch',
		'cursed',
		'hacker',
		'cool',
		'flip',
		'upsideDown',
		'fraktur',
		'bold_fraktur',
		'script',
		'bold_script',
		'double_struck',
		'sans_serif',
		'bold_serif',
		'monospace',
		'fullwidth'
	];
</script>

<SeoTDK
	title={m.home_title()}
	description={m.home_description()}
	keywords={[
		'glitch text generator',
		'zalgo text',
		'cursed text generator',
		'cool text generator',
		'glitchy text',
		'glitch font generator',
		'discord glitch text',
		'roblox glitch text'
	]}
/>

<div class="min-h-screen bg-base-200">
	<!-- Hero Section -->
	<Nav />

	<!-- Main Generator Tool -->
	<section class="container mx-auto"><Generator bind:inputText /></section>

	<!-- 其他样式预览 -->
	<section class="container mx-auto flex flex-col gap-8 px-4 py-12 md:py-16">
		<Preview previewStyle={PREVIEW_STYLE} bind:inputText />
		<a href={localizeHref(resolve('/generator'))} class="btn py-12 text-4xl font-light btn-xl"
			>{m.more_style()}……</a
		>
	</section>

	<!-- Features Section -->
	<section class="container mx-auto px-4 py-12 md:py-16">
		<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">{m.features_title()}</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body items-center text-center">
					<div class="mb-4 text-4xl">⚡</div>
					<h3 class="card-title text-lg">{m.feature_instant()}</h3>
					<p class="text-sm opacity-70">{m.feature_instant_desc()}</p>
				</div>
			</div>
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body items-center text-center">
					<div class="mb-4 text-4xl">📋</div>
					<h3 class="card-title text-lg">{m.feature_copy()}</h3>
					<p class="text-sm opacity-70">{m.feature_copy_desc()}</p>
				</div>
			</div>
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body items-center text-center">
					<div class="mb-4 text-4xl">🎨</div>
					<h3 class="card-title text-lg">{m.feature_styles()}</h3>
					<p class="text-sm opacity-70">{m.feature_styles_desc()}</p>
				</div>
			</div>
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body items-center text-center">
					<div class="mb-4 text-4xl">🆓</div>
					<h3 class="card-title text-lg">{m.feature_free()}</h3>
					<p class="text-sm opacity-70">{m.feature_free_desc()}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Specialized Generators -->
	<section class="bg-base-100 py-12 md:py-16">
		<div class="container mx-auto px-4">
			<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">{m.tools_section()}</h2>
			<div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each tools as tool (tool.key)}
					{@const toolMsgKey = `tool_${tool.key}` as keyof typeof m}
					{@const toolDescKey = `tool_${tool.key}_desc` as keyof typeof m}
					<a
						href={localizeHref(tool.href)}
						class="card bg-base-200 transition-shadow hover:shadow-xl"
					>
						<div class="card-body">
							<h3 class="card-title text-lg">{m[toolMsgKey]()}</h3>
							<p class="text-sm opacity-70">{m[toolDescKey]()}</p>
							<div class="card-actions justify-end">
								<button class="btn btn-ghost btn-sm">→</button>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- How to Use Section -->
	<section class="container mx-auto px-4 py-12 md:py-16">
		<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">{m.how_to_use()}</h2>
		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-content"
				>
					1
				</div>
				<h3 class="mb-2 text-lg font-bold">{m.step_1()}</h3>
				<p class="text-sm opacity-70">{m.step_1_desc()}</p>
			</div>
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-content"
				>
					2
				</div>
				<h3 class="mb-2 text-lg font-bold">{m.step_2()}</h3>
				<p class="text-sm opacity-70">{m.step_2_desc()}</p>
			</div>
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-content"
				>
					3
				</div>
				<h3 class="mb-2 text-lg font-bold">{m.step_3()}</h3>
				<p class="text-sm opacity-70">{m.step_3_desc()}</p>
			</div>
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-content"
				>
					4
				</div>
				<h3 class="mb-2 text-lg font-bold">{m.step_4()}</h3>
				<p class="text-sm opacity-70">{m.step_4_desc()}</p>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="bg-base-100 py-12 md:py-16">
		<div class="container mx-auto max-w-4xl px-4">
			<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">{m.faq_title()}</h2>
			<div class="space-y-4">
				<div class="collapse-plus collapse bg-base-200">
					<input type="radio" name="faq-accordion" checked />
					<div class="collapse-title text-lg font-semibold">
						{m.faq_what()}
					</div>
					<div class="collapse-content">
						<p class="opacity-70">{m.faq_what_answer()}</p>
					</div>
				</div>
				<div class="collapse-plus collapse bg-base-200">
					<input type="radio" name="faq-accordion" />
					<div class="collapse-title text-lg font-semibold">
						{m.faq_how()}
					</div>
					<div class="collapse-content">
						<p class="opacity-70">{m.faq_how_answer()}</p>
					</div>
				</div>
				<div class="collapse-plus collapse bg-base-200">
					<input type="radio" name="faq-accordion" />
					<div class="collapse-title text-lg font-semibold">
						{m.faq_safe()}
					</div>
					<div class="collapse-content">
						<p class="opacity-70">{m.faq_safe_answer()}</p>
					</div>
				</div>
				<div class="collapse-plus collapse bg-base-200">
					<input type="radio" name="faq-accordion" />
					<div class="collapse-title text-lg font-semibold">
						{m.faq_platforms()}
					</div>
					<div class="collapse-content">
						<p class="opacity-70">{m.faq_platforms_answer()}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
