<script lang="ts">
	import { resolve } from '$app/paths';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
	import LanguageButton from '../common/LanguageButton.svelte';
</script>

{#snippet linksList()}
	<li>
		<a class="text-lg" href={localizeHref(resolve('/generator'))}>{m.nav_all_generators()}</a>
	</li>
	<li><a class="text-lg" href={localizeHref(resolve('/guide'))}>{m.nav_use_guide()}</a></li>
	<li><a class="text-lg" href={localizeHref(resolve('/blog'))}>{m.nav_blog()}</a></li>
	<li><a class="text-lg" href={localizeHref(resolve('/about'))}>{m.nav_about()}</a></li>
{/snippet}

<nav class="navbar fixed top-0 z-50 h-12 glass shadow">
	<div class="flex-1">
		<a href={localizeHref(resolve('/'))} class="btn text-xl btn-ghost">{m.nav_title()}</a>
	</div>
	<!-- 多语言按钮 -->
	<LanguageButton />
	<!-- 栏目选项 -->
	<div class="flex-none">
		<div class="drawer drawer-end lg:hidden">
			<input id="menu-drawer" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content">
				<!-- Page content here -->
				<label
					for="menu-drawer"
					class="drawer-button btn btn-square btn-ghost"
					aria-label="open sidebar"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-5 w-5 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						></path>
					</svg></label
				>
			</div>
			<div class="drawer-side">
				<label for="menu-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
				<ul class="menu min-h-full w-80 bg-base-200 p-4">
					{@render linksList()}
				</ul>
			</div>
		</div>

		<ul class="menu menu-horizontal hidden px-1 lg:flex">
			{@render linksList()}
		</ul>
	</div>
</nav>

<div class="h-18"></div>
