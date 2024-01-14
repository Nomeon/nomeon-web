<script lang="ts">
    import { mode } from 'mode-watcher';
</script>

<footer class="py-6 md:px-8 md:py-0">
	<div
		class="container flex flex-col items-center justify-between md:h-24 md:flex-row"
	>
        <div class='flex flex-row gap-2'>
            <a href="/" class="flex items-center gap-2">
                <img
                    src="/favicon.svg"
                    alt="Nomeon"
                    class="w-4 h-4 {$mode === 'light' ? '' : 'invert'}"
                />
            </a>
            <p
                class="text-center text-sm leading-loose text-muted-foreground md:text-left"
            >
            Built & designed by me. Coded in <a class="text-primary" href="https://kit.svelte.dev/">Sveltekit</a>, deployed on <a href="https://vercel.com/" class="text-primary">Vercel</a>.
            </p>
        </div>
        <div>
            <p class="text-center text-sm leading-loose text-muted-foreground md:text-left">© 2023 Nomeon. All rights reserved.</p>
        </div>
	</div>
</footer>