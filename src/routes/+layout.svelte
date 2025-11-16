<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.ico';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import Nav from '$lib/components/layout/Nav.svelte';

	import Notification from '$lib/components/common/notification/Notification.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Notification />
<main class="min-h-screen w-full">
	<Nav />
	{@render children()}
	<Footer />
</main>

<div style="display:none">
	{#each locales as locale (locale)}
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
