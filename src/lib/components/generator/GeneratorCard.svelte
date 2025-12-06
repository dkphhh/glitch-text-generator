<script lang="ts">
	let {
		path,
		generatorName,
		generatorSubtitle,
		preview
	}: {
		path: string;
		generatorName: string;
		generatorSubtitle: string;
		preview?: Promise<string>;
	} = $props();
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
				{@const styles = p.length > 200 ? 'text-xs/tight ' : 'text-base'}
				<div class="max-h-24 overflow-auto rounded bg-base-100">
					<pre class="p-2 font-mono whitespace-pre {styles}">{p}</pre>
				</div>
			{/if}
		{/await}
		<div class="card-actions justify-end">
			<button class="btn btn-sm btn-primary">→</button>
		</div>
	</div>
</a>
