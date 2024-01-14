<script lang="ts">
	import { mode } from 'mode-watcher';
</script>

<footer class="py-6 md:px-8 md:py-0">
	<div class="container flex flex-col items-center justify-between md:h-24 md:flex-row">
		<div class="flex flex-row gap-2">
			<a href="/" class="flex items-center gap-2">
				<img src="/favicon.svg" alt="Nomeon" class="h-4 w-4 {$mode === 'light' ? '' : 'invert'}" />
			</a>
			<p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
				Built using <a class="text-primary" href="https://kit.svelte.dev/">Sveltekit </a>and
				<a href="https://vercel.com/" class="text-primary">Vercel</a>, all by me.
			</p>
		</div>
		<div>
			<p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
				© 2023 Nomeon. All rights reserved.
			</p>
		</div>
	</div>
</footer>
