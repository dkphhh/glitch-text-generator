<script lang="ts">
	import Generator from '$lib/components/generator/Generator.svelte';
	import { SPECIAL_GENERATORS_MAP, SPECIAL_GENERATORS, STYLE_LIST } from '$lib/generator/generator';
	import { page } from '$app/state';

	let pathParam = $derived(page.params.page);

	let generatorkey: Style = $derived.by(() => {
		if (!pathParam) {
			console.warn('No generator type specified in the URL, defaulting to zalgo.');
			return 'zalgo';
		}

		if (SPECIAL_GENERATORS.includes(pathParam as SpecialGenerator)) {
			return SPECIAL_GENERATORS_MAP[pathParam as SpecialGenerator];
		}

		if (STYLE_LIST.includes(pathParam)) {
			return pathParam as Style;
		}

		return 'zalgo';
	});

	
</script>
