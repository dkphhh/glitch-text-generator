<script lang="ts">
	const showcaseText = ['₲łıꮏȼħ ₮єӿꮏ ₲єꮑєгⱥꮏѳг', 'Ǥⱡ⍳Łč৸ ₸€ҳŁ Ǥ€л€ɍმŁǿɍ', '₲łıŧςħ Ƭεӿŧ Ɠεηεɾɑŧθɾ '];

	let { title, subtitle }: { title: string; subtitle: string } = $props();
</script>

<section class="mx-auto w-full">
	<div class="hero w-full">
		<div class="hero-content text-center">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold">{title}</h1>
				<p class="py-6">
					{subtitle} 👇
				</p>
				<span class="text-rotate leading-10 duration-6000">
					<span class="">
						{#each showcaseText as s (s)}
							<span class="text-4xl">{s}</span>
						{/each}
					</span>
				</span>
			</div>
		</div>
	</div>
</section>
