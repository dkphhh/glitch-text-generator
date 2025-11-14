<script lang="ts">
	import { page } from '$app/state';
	const showcaseText = [
		'G̮̪ͥ̚lit͚̳ch ̘̦́͞Text̙̖ Gen̺͓̔̒er̖̎̃ͅator',
		'₲łıꮏȼħ ₮єӿꮏ ₲єꮑєгⱥꮏѳг',
		'Ǥⱡ⍳Łč৸ ₸€ҳŁ Ǥ€л€ɍმŁǿɍ',
		'₲łıŧςħ Ƭεӿŧ Ɠεηεɾɑŧθɾ '
	];
	import { GENERATOR_URL_PATH_MAP } from '$lib/generator/generator';
	const pageParams = $derived(page.params);
	let isGeneratorPage = $derived.by(
		() =>
			pageParams.page !== undefined &&
			Object.values(GENERATOR_URL_PATH_MAP).includes(pageParams.page)
	);

	let { title, subtitle }: { title: string; subtitle: string } = $props();
</script>

<section class="mx-auto w-full">
	<div class="hero w-full">
		<div class="hero-content text-center">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold">{title}</h1>
				<p class="py-6">
					{subtitle}
					{isGeneratorPage ? '' : '👇'}
				</p>
				{#if !isGeneratorPage}
					<span class="text-rotate leading-16 duration-6000">
						<span class="">
							{#each showcaseText as s (s)}
								<span class="text-4xl">{s}</span>
							{/each}
						</span>
					</span>
				{/if}
			</div>
		</div>
	</div>
</section>
