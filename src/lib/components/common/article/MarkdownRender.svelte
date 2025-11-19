<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';

	let { md } = $props<{ md: string }>();

	// 配置 GFM 插件以支持表格
	const plugins = [gfmPlugin()];
</script>

<div class="container prose prose-base max-w-4xl lg:prose-lg">
	<Markdown {md} {plugins}>
		{#snippet a(props)}
			{@const { children, style, class: className, ...rest } = props}
			<a {style} class={className || '' + 'link! link-primary!'} {...rest}>
				{@render children?.()}
			</a>
		{/snippet}
	</Markdown>
</div>
