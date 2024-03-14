<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import HamburgerMenu from 'svelte-radix/HamburgerMenu.svelte';
	import { Button } from '$lib/components/ui/button';
	import SheetContent from '../ui/sheet/sheet-content.svelte';
	import { mode } from 'mode-watcher';
	import MobileLink from '$lib/components/nav/mobile-link.svelte';

	let open = false;
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" size="icon" class="mr-2 px-0 text-base md:hidden">
			<HamburgerMenu class="h-5 w-5" />
			<span class="sr-only">Toggle Menu</span>
		</Button>
	</Sheet.Trigger>
	<SheetContent side="left" class="pr-0">
		<MobileLink href="/" class="flex items-center" bind:open>
			<img
				src="/weblogo.svg"
				alt="Nomeon"
				class="ml-6 h-6 {$mode === 'light' ? 'brightness-0' : ''}"
			/>
		</MobileLink>
		<div class="my-4 h-[calc(100vh-8rem)] overflow-auto pb-10 pl-6">
			<div class="flex flex-col space-y-3">
				<h4 class="font-medium">Projects</h4>
				<MobileLink href="/projects/gewoonhout" class="pl-4" bind:open>geWOONhout</MobileLink>
				<MobileLink href="/projects/koopmans" class="pl-4" bind:open>Koopmans</MobileLink>
				<MobileLink href="/projects/nijhuis" class="pl-4" bind:open>Nijhuis Riool</MobileLink>
				<MobileLink
					href="/Nomeon Terms & Conditions.pdf"
					download="Nomeon Terms & Conditions.pdf"
					class=""
					bind:open>Terms & Conditions</MobileLink
				>
				<MobileLink href="/contact" class="" bind:open>Contact</MobileLink>
			</div>
		</div>
	</SheetContent>
</Sheet.Root>
