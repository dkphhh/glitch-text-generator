<script lang="ts">
	import { LANG_MAP, LANG_LIST } from '$lib/i18n/const';
	import { setLocale } from '$lib/paraglide/runtime';
</script>

<div class="dropdown dropdown-end">
	<button
		type="button"
		aria-label="select language"
		tabindex="0"
		class="btn m-1 btn-ghost btn-xs lg:btn-lg"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-languages-icon lucide-languages size-6 fill-none stroke-current stroke-2"
			><path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path
				d="m22 22-5-10-5 10"
			/><path d="M14 18h6" /></svg
		>
	</button>
	<ul tabindex="-1" class="dropdown-content menu z-1 w-52 rounded bg-base-100 p-2 shadow-sm">
		{#each LANG_LIST as l (l)}
			{@const langName = LANG_MAP[l]}
			<li>
				<button
					type="button"
					class="btn rounded btn-ghost btn-sm"
					aria-label={langName}
					onclick={() => setLocale(l, { reload: true })}>{langName}</button
				>
			</li>
		{/each}
	</ul>
</div>
