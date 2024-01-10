<script lang="ts">
	import { cn } from '$lib/utils';
	import { ModeToggle } from '$lib/components';
	import { MainNav, MobileNav } from '$lib/components/nav';
	import { LinkedinLogo } from 'radix-icons-svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import { mode } from 'mode-watcher';
</script>

<header
	class="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 items-center">
		<MainNav />
		<MobileNav />
		<div class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
			<div
				class="m-auto flex w-full flex-1 items-center justify-center md:hidden md:w-auto md:flex-none"
			>
				<a href="/" class="flex items-center space-x-2">
					<img
						src="/weblogo.svg"
						alt="Nomeon"
						class="h-6 {$mode === 'light' ? 'brightness-0' : ''}"
					/>
				</a>
			</div>
			<nav class="flex items-center">
				<a
					href="https://www.linkedin.com/in/alexandre-lemieux-0b1b0b1b0/"
					target="_blank"
					rel="noreferrer"
				>
					<div
						class={cn(
							buttonVariants({
								size: 'icon',
								variant: 'ghost'
							}),
							''
						)}
					>
						<LinkedinLogo class="h-5 w-5 px-0" />
						<span class="sr-only">Linkedin</span>
					</div>
				</a>
				<ModeToggle />
			</nav>
		</div>
	</div>
</header>
