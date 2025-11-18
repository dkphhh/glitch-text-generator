<script lang="ts">
	import { resolve } from '$app/paths';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
	import Logo from '$lib/assets/dkphhh.ico';
	import LanguageButton from '../common/LanguageButton.svelte';

	type navItem = {
		href: string;
		label: string;
	};

	const navItems: navItem[] = [
		{ href: localizeHref(resolve('/generator')), label: m.nav_all_generators() },
		{ href: localizeHref(resolve('/guide')), label: m.nav_use_guide() },
		{ href: localizeHref(resolve('/blog')), label: m.nav_blog() },
		{ href: localizeHref(resolve('/about')), label: m.nav_about() }
	];
</script>

{#snippet linksList(items: navItem[])}
	{#each items as item (item.href)}
		<li>
			<a class="btn rounded btn-ghost btn-md lg:btn-lg" href={item.href}>{item.label}</a>
		</li>
	{/each}
{/snippet}

<nav class="navbar fixed top-0 z-50 h-12 glass shadow">
	<div class="flex-1">
		<!-- flex flex-row items-center gap-2 p-0 lg:p-4 -->
		<a href={localizeHref(resolve('/'))} class="btn btn-ghost btn-xs lg:gap-4 lg:btn-xl">
			<img src={Logo} class="size-8 sm:size-10" alt="creater dkphhh icon" />
			<div class="badge badge-sm badge-primary lg:badge-xl">{m.nav_title()}</div>
		</a>
	</div>
	<!-- 多语言按钮 -->
	<LanguageButton />
	<!-- 栏目选项 -->
	<div class="flex-none">
		<!-- 移动设备 下拉菜单栏 -->
		<div class="dropdown dropdown-end lg:hidden">
			<div tabindex="0" role="button" class="btn m-1 btn-ghost btn-xs lg:btn-lg">
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
				class="dropdown-content menu z-1 w-52 rounded-box bg-base-300 p-2 shadow-sm"
			>
				{@render linksList(navItems)}
			</ul>
		</div>
		<!-- 大屏幕 横向菜单栏 -->
		<ul class="menu menu-horizontal hidden px-1 lg:flex">
			{@render linksList(navItems)}
		</ul>
	</div>
</nav>

<div class="h-18"></div>
