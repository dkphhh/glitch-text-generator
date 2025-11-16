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
				<h1 class="text-2xl font-bold lg:text-4xl">{title}</h1>
				<p class="py-6">
					{subtitle}
					{isGeneratorPage ? '' : '👇'}
				</p>
				<!-- 在 Generator 页面不显示 -->
				{#if !isGeneratorPage}
					<span class="text-rotate text-2xl leading-16 duration-6000 lg:text-4xl">
						<span class="">
							{#each showcaseText as s (s)}
								<span class="">{s}</span>
							{/each}
						</span>
					</span>
				{/if}
			</div>
		</div>
	</div>
</section>
