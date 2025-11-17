<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { localizeHref } from '$lib/paraglide/runtime';
	import SeoTDK from '$lib/components/common/seo/SeoTDK.svelte';
	import { m } from '$lib/paraglide/messages';
	const errorStatus = $derived(page.status);
	const errorMessage = $derived(page.error?.message || 'An unexpected error occurred');

	const errorTitle = $derived.by(() => {
		if (errorStatus === 404) return 'Page Not Found';
		if (errorStatus === 500) return 'Server Error';
		if (errorStatus === 403) return 'Access Denied';
		return 'Oops! Something Went Wrong';
	});

	const errorDescription = $derived.by(() => {
		if (errorStatus === 404)
			return "The page you're looking for doesn't exist. It might have been moved or deleted.";
		if (errorStatus === 500)
			return "We're experiencing technical difficulties. Please try again later.";
		if (errorStatus === 403) return "You don't have permission to access this page.";
		return 'An unexpected error occurred. Please try again or return to the homepage.';
	});
</script>

<SeoTDK
	title={`${errorStatus} - ${errorTitle}`}
	description="An error occurred while loading this page. Return to the homepage to continue using our elf name generator."
/>

<main class="container mx-auto px-4 py-8">
	<!-- Hero Section with Error Status -->
	<section class="mb-12 text-center">
		<div class="mb-4">
			<h1 class="text-9xl font-bold text-error">{errorStatus}</h1>
		</div>
		<h2 class="mb-4 text-4xl font-bold md:text-6xl">{errorTitle}</h2>
		<p class="mx-auto max-w-2xl text-xl text-gray-600">
			{errorDescription}
		</p>
	</section>

	<!-- Error Details (for non-404 errors) -->
	{#if errorMessage && errorStatus !== 404}
		<section class="mx-auto mb-12 max-w-2xl">
			<div class="alert alert-error">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 shrink-0 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span class="text-left">{errorMessage}</span>
			</div>
		</section>
	{/if}

	<!-- Action Buttons -->
	<section class="mx-auto mb-12 max-w-xl">
		<div class="flex flex-col gap-4 sm:flex-row">
			<a href={localizeHref(resolve('/'))} class="btn flex-1 btn-lg btn-error">
				{m.error_back_home()}
			</a>

			<button onclick={() => window.history.back()} class="btn flex-1 btn-outline btn-lg">
				{m.error_go_back()}
			</button>
		</div>
	</section>

	<!-- Quick Navigation -->
	<section class="mx-auto mb-12 max-w-4xl">
		<h2 class="mb-6 text-center text-2xl font-bold">Explore Our Site</h2>

		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			<a href={localizeHref(resolve('/'))} class="btn btn-outline"> {m.error_home_page()}</a>
			<a href={localizeHref(resolve('/generator'))} class="btn btn-outline">
				{m.nav_all_generators()}</a
			>
			<a href={localizeHref(resolve('/guide'))} class="btn btn-outline"> {m.nav_use_guide()}</a>
			<a href={localizeHref(resolve('/about'))} class="btn btn-outline"> {m.nav_about()}</a>
		</div>
	</section>
</main>
