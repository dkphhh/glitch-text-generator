<script lang="ts">
	let { title, subtitle }: { title: string; subtitle: string } = $props();
</script>

<section class="mx-auto w-full">
	<div class="hero w-full">
		<div class="hero-content p-0 text-center">
			<div class="max-w-4xl">
				<h1 class="text-xl font-bold md:text-2xl lg:text-4xl">{title}</h1>
				<p class="pt-2 text-sm md:text-base">
					{subtitle}
				</p>
			</div>
		</div>
	</div>
</section>
