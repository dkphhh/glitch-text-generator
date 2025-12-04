<script lang="ts">
	let {
		path,
		generatorName,
		generatorSubtitle,
		preview
	}: { path: string; generatorName: string; generatorSubtitle: string; preview?: Promise<string> } =
		$props();
</script>

<a
	href={path}
	class="card rounded! border border-base-300 bg-base-200 transition-shadow hover:bg-base-300"
>
	<div class="card-body">
		<h3 class="card-title text-lg">{generatorName}</h3>
		<p class="text-sm opacity-70">{generatorSubtitle}</p>
		{#await preview}
			<span class="loading loading-sm loading-bars"></span>
		{:then p}
			{#if p}
				<p class="max-h-8 rounded bg-base-100 text-center font-mono text-sm leading-8">
					👉 {p}
				</p>
			{/if}
		{/await}
		<div class="card-actions justify-end">
			<button class="btn btn-sm btn-primary">→</button>
		</div>
	</div>
</a>
