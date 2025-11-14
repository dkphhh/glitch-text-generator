<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
</script>

<section class="container mx-auto px-4 py-12 md:py-16">
	<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">{m.features_title()}</h2>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		<div class="card bg-base-100 shadow-lg">
			<div class="card-body items-center text-center">
				<div class="mb-4 text-4xl">⚡</div>
				<h3 class="card-title text-lg">{m.feature_instant()}</h3>
				<p class="text-sm opacity-70">{m.feature_instant_desc()}</p>
			</div>
		</div>
		<div class="card bg-base-100 shadow-lg">
			<div class="card-body items-center text-center">
				<div class="mb-4 text-4xl">📋</div>
				<h3 class="card-title text-lg">{m.feature_copy()}</h3>
				<p class="text-sm opacity-70">{m.feature_copy_desc()}</p>
			</div>
		</div>
		<div class="card bg-base-100 shadow-lg">
			<div class="card-body items-center text-center">
				<div class="mb-4 text-4xl">🎨</div>
				<h3 class="card-title text-lg">{m.feature_styles()}</h3>
				<p class="text-sm opacity-70">{m.feature_styles_desc()}</p>
			</div>
		</div>
		<div class="card bg-base-100 shadow-lg">
			<div class="card-body items-center text-center">
				<div class="mb-4 text-4xl">🆓</div>
				<h3 class="card-title text-lg">{m.feature_free()}</h3>
				<p class="text-sm opacity-70">{m.feature_free_desc()}</p>
			</div>
		</div>
	</div>
</section>
