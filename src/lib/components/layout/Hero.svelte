<script lang="ts">
	let { title, subtitle, description } = $props<{
		title: string;
		subtitle: string;
		description?: string;
	}>();
</script>

<!-- Hero Section -->
<section class="hero bg-linear-to-br from-primary/10 via-base-100 to-secondary/10 py-12 md:py-20">
	<div class="hero-content flex-col lg:flex-row">
		<img
			src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
			class="max-w-sm rounded-lg shadow-2xl"
			alt="logo"
		/>
		<div class="max-w-4xl">
			<h1
				class="mb-4 bg-linear-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
			>
				{title}
			</h1>
			<p class="mb-4 text-xl opacity-80 md:text-2xl">
				{subtitle}
			</p>

			{#if description}
				<p class="text-sm opacity-80 md:text-base">
					{description}
				</p>
			{/if}
		</div>
	</div>
</section>
