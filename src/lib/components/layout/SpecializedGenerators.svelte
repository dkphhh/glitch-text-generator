<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	// 工具列表配置
	const tools: { key: keyof typeof m; desKey: keyof typeof m; href: string }[] = [
		{ key: 'tool_zalgo', desKey: 'tool_zalgo_desc', href: '/generator/zalgo-text-generator' },
		{ key: 'tool_cursed', desKey: 'tool_cool_desc', href: '/generator/cursed-text-generator' },
		{ key: 'tool_cool', desKey: 'tool_cool_desc', href: '/generator/cool-text-generator' },
		{
			key: 'tool_glitch_font',
			desKey: 'tool_glitch_font_desc',
			href: '/generator/glitch-font-generator'
		},
		{
			key: 'tool_discord',
			desKey: 'tool_discord_desc',
			href: '/generator/discord-glitch-text-generator'
		},
		{
			key: 'tool_roblox',
			desKey: 'tool_roblox_desc',
			href: '/generator/roblox-glitch-text-generator'
		},
		{
			key: 'tool_minecraft',
			desKey: 'tool_minecraft_desc',
			href: '/generator/minecraft-glitch-text-generator'
		},
		{
			key: 'tool_unreadable',
			desKey: 'tool_unreadable_desc',
			href: '/generator/unreadable-text-generator'
		},
		{ key: 'tool_hacker', desKey: 'tool_hacker_desc', href: '/generator/hacker-text-generator' }
	];
</script>

<section class="bg-base-100 py-12 md:py-16">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">{m.tools_section()}</h2>
		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each tools as tool (tool.key)}
				<a
					href={localizeHref(tool.href)}
					class="card bg-base-200 transition-shadow hover:bg-base-300"
				>
					<div class="card-body">
						<h3 class="card-title text-lg">{m[tool.desKey]({ name: {} })}</h3>
						<p class="text-sm opacity-70">{m[tool.desKey]({ name: {} })}</p>
						<div class="card-actions justify-end">
							<button class="btn btn-sm btn-primary">→</button>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
