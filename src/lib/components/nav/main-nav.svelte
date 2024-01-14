<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import { mode } from 'mode-watcher';
</script>

<div class="mr-4 hidden md:flex">
	<a href="/" class="mr-8 flex items-center space-x-2">
		<img src="/weblogo.svg" alt="Nomeon" class="h-6 {$mode === 'light' ? 'brightness-0' : ''}" />
	</a>
	<nav class="flex items-center space-x-6 text-sm font-medium">
		<a
			href="/projects"
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname === '/projects' ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			Projects
		</a>
		<a
			href="/Nomeon Terms & Conditions.pdf"
			download
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith('/terms') ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			Terms & Conditions
		</a>
		<a
			href="/contact"
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith('/contact') ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			Contact
		</a>
	</nav>
</div>
