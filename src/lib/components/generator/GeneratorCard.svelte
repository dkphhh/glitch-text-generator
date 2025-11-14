<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';
	let {
		path,
		generatorName,
		generatorSubtitle
	}: { path: string; generatorName: string; generatorSubtitle: string } = $props();

	const link = localizeHref(`/generator/${path}`);
</script>

<a
	href={link}
	class="card rounded! border border-base-300 bg-base-200 transition-shadow hover:bg-base-300"
>
	<div class="card-body">
		<h3 class="card-title text-lg">{generatorName}</h3>
		<p class="text-sm opacity-70">{generatorSubtitle}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-sm btn-primary">→</button>
		</div>
	</div>
</a>
