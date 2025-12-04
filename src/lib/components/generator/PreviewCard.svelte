<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { notificationManager } from '$lib/components/common/notification/notificationManager.svelte';

	let { outputText, previewTitle }: { outputText: Promise<string>; previewTitle: string } =
		$props();

	// 复制到剪贴板
	async function copyToClipboard() {
		const text = await outputText;
		if (!text) return;

		try {
			await navigator.clipboard.writeText(text);
			notificationManager.sentMessage({
				message: [m.copy_success()],
				type: 'success'
			});
		} catch {
			notificationManager.sentMessage({
				message: ['Failed to copy'],
				type: 'error'
			});
		}
	}
</script>

<div class="stats w-full rounded border border-base-300 bg-base-200">
	<div class="stat">
		<div class="stat-title">
			{previewTitle}
		</div>
		<div class="stat-value h-32 overflow-auto font-mono! text-sm/8! font-light! lg:text-base/20!">
			{#await outputText}
				<span class="loading loading-sm loading-bars"></span>
			{:then text}
				{text}
			{/await}
		</div>
		<div class="stat-actions flex justify-end">
			{#await outputText}
				<button disabled aria-label="Loading"
					><span class="loading loading-sm loading-dots"></span>
				</button>
			{:then text}
				<button onclick={copyToClipboard} class="btn btn-sm btn-neutral" disabled={!text}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-copy-icon lucide-copy size-4 fill-none stroke-current stroke-2"
						><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path
							d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
						/></svg
					>
					{m.copy_button()}
				</button>
			{/await}
		</div>
	</div>
</div>
