<script lang="ts">
	import { CATEGORY_ICONS } from '$lib/generator/generatorData';
	let {
		path,
		title,
		description,
		preview,
		category
	}: {
		path: string;
		title: string;
		description: string;
		preview?: Promise<string>;
		category: GeneratorCatgory;
	} = $props();

	let isAscii = $derived(category === 'ascii-art');
</script>

<a
	href={path}
	class="group card h-full border border-base-300 bg-base-100 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
>
	<div class="card-body p-6">
		<div class="flex items-center justify-between gap-4">
			<div class="flex items-center gap-3">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-lg bg-base-200 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10"
				>
					{CATEGORY_ICONS[category]}
				</div>
				<h3 class="card-title text-lg font-bold transition-colors group-hover:text-primary">
					{title}
				</h3>
			</div>
		</div>

		<p class="mt-2 text-sm text-base-content">{description}</p>

		<div class="mt-4 overflow-hidden rounded-xl border border-base-content/5 bg-base-200/50">
			<div class="relative h-48 w-full overflow-hidden p-4 font-mono text-xs">
				{#await preview}
					<div class="flex h-full items-center justify-center">
						<span class="loading loading-sm loading-dots opacity-50"></span>
					</div>
				{:then p}
					{#if p}
						<div
							class={[
								'absolute inset-0 overflow-hidden p-4 opacity-80 select-none',
								{
									'whitespace-pre': isAscii,
									'whitespace-pre-wrap': !isAscii,
									'break-all': !isAscii,
									'text-[8px] lg:text-[10px]': isAscii,
									'text-4xl': !isAscii,
									'leading-tight': isAscii
								}
							]}
						>
							{p}
						</div>
						<!-- Gradient overlay to fade out text -->
						<div
							class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-base-200/50 to-transparent"
						></div>
					{/if}
				{/await}
			</div>
		</div>

		<div class="mt-auto flex items-center justify-between border-t border-base-content/5 pt-4">
			<span class="text-xs font-medium tracking-wider uppercase opacity-50"
				>{category.replace('-', ' ')}</span
			>
			<span
				class="btn gap-2 text-primary btn-ghost transition-transform btn-sm group-hover:translate-x-1"
			>
				Open
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="h-4 w-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
					/>
				</svg>
			</span>
		</div>
	</div>
</a>
