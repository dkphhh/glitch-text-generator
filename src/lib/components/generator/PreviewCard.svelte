<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { notificationManager } from '$lib/components/common/notification/notificationManager.svelte';

	let {
		outputText,
		inputText = $bindable(),
		previewTitle
	}: { outputText: string; inputText: string; previewTitle: string } = $props();

	// 复制到剪贴板
	async function copyToClipboard() {
		if (!outputText) return;

		try {
			await navigator.clipboard.writeText(outputText);
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

	// 清除
	function clear() {
		inputText = '';
	}
</script>

<div class="stats w-full rounded border border-base-300 bg-base-200">
	<div class="stat">
		<div class="stat-title">{previewTitle}</div>
		<div class="stat-value h-32 font-mono! text-sm/8! font-light! lg:text-base/20!">
			{outputText}
		</div>
		<div class="stat-actions">
			<button onclick={copyToClipboard} class="btn btn-xs btn-neutral" disabled={!outputText}>
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
			<button onclick={clear} class="btn btn-xs btn-accent" disabled={!outputText}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-eraser-icon lucide-eraser size-4 fill-none stroke-current stroke-2"
					><path
						d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"
					/><path d="m5.082 11.09 8.828 8.828" /></svg
				>

				{m.clear_button()}
			</button>
		</div>
	</div>
</div>
