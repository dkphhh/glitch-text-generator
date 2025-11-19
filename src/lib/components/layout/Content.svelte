<script lang="ts">
	let { title, content }: { title: string; content: string } = $props();
</script>

<section class="container mx-auto prose prose-base max-w-4xl py-12 md:py-16 lg:prose-lg">
	<h2>{title}</h2>
	<p>{content}</p>
</section>
