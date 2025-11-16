<script lang="ts">
	import { resolve } from '$app/paths';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	const year = new Date().getFullYear();
</script>

<section class="px-4 py-8">
	<div class="divider divider-neutral"></div>
	<footer class="footer text-base-content sm:footer-horizontal">
		<aside>
			<img src="/dkphhh.ico" class="size-16" alt="creater dkphhh icon" />
			<p class="text-sm">
				Made By <a href="https://dkphhh.me">DKPhhh</a> with ❤️
				<br />
				© {year} <a href="https://dkphhh.me">DKPhhh</a>. All rights reserved.
			</p>
		</aside>
		<nav>
			<strong class="footer-title">{m.popular_generators()}</strong>
			<a href={localizeHref(resolve('/generator/glitch-font-generator'))} class="link link-hover"
				>{m.generator_glitch_font_h1()}</a
			>
			<a href={localizeHref(resolve('/generator/zalgo-text-generator'))} class="link link-hover"
				>{m.generator_zalgo_h1()}</a
			>
			<a href={localizeHref(resolve('/generator/cursed-text-generator'))} class="link link-hover"
				>{m.generator_cursed_h1()}</a
			>
			<a href={localizeHref(resolve('/generator/hacker-text-generator'))} class="link link-hover"
				>{m.generator_hacker_h1()}</a
			>
			<a href={localizeHref(resolve('/generator'))} class="link link-hover"
				>{m.nav_all_generators()}……</a
			>
		</nav>

		<nav>
			<strong class="footer-title">{m.let_us_talk_title()}</strong>
			<a href={localizeHref(resolve('/blog'))} class="link link-hover">{m.blog_title()}</a>
			<a href={localizeHref(resolve('/guide'))} class="link link-hover">{m.user_guide_title()}</a>
			<a href={localizeHref(resolve('/about'))} class="link link-hover">{m.about_us_title()}</a>
		</nav>
		<nav>
			<strong class="footer-title">{m.resources_title()}</strong>
			<a href={localizeHref(resolve('/terms-of-service'))} class="link link-hover"
				>{m.terms_of_service_title()}</a
			>
			<a href={localizeHref(resolve('/privacy-policy'))} class="link link-hover"
				>{m.privacy_policy_title()}</a
			>
		</nav>
	</footer>
</section>
