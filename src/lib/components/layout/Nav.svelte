<script lang="ts">
	import { resolve } from '$app/paths';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
	import Logo from '$lib/assets/dkphhh.ico';
	import LanguageButton from '../common/LanguageButton.svelte';
</script>

{#snippet linksList()}
	<li>
		<a class="btn rounded btn-ghost btn-sm lg:btn-lg" href={localizeHref(resolve('/generator'))}
			>{m.nav_all_generators()}</a
		>
	</li>
	<li>
		<a class="btn rounded btn-ghost btn-sm lg:btn-lg" href={localizeHref(resolve('/guide'))}
			>{m.nav_use_guide()}</a
		>
	</li>
	<li>
		<a class="btn rounded btn-ghost btn-sm lg:btn-lg" href={localizeHref(resolve('/blog'))}
			>{m.nav_blog()}</a
		>
	</li>
	<li>
		<a class="btn rounded btn-ghost btn-sm lg:btn-lg" href={localizeHref(resolve('/about'))}
			>{m.nav_about()}</a
		>
	</li>
{/snippet}

<nav class="navbar fixed top-0 z-50 h-12 glass shadow">
	<div class="flex-1">
		<a href={localizeHref(resolve('/'))} class="flex flex-row items-center gap-2 p-0 lg:p-4">
			<img src={Logo} class="size-8 sm:size-12" alt="creater dkphhh icon" />
			<div class="badge badge-sm badge-primary lg:badge-xl">{m.nav_title()}</div>
		</a>
	</div>
	<!-- 多语言按钮 -->
	<LanguageButton />
	<!-- 栏目选项 -->
	<div class="flex-none">
		<div class="dropdown dropdown-end lg:hidden">
			<div tabindex="0" role="button" class="btn m-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-menu-icon lucide-menu size-6 fill-none stroke-current stroke-2"
					><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg
				>
			</div>
			<ul
				tabindex="-1"
				class="dropdown-content menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm"
			>
				{@render linksList()}
			</ul>
		</div>
		<ul class="menu menu-horizontal hidden px-1 lg:flex">
			{@render linksList()}
		</ul>
	</div>
</nav>

<div class="h-18"></div>
