<script lang="ts">
	import { page } from "$app/stores";
	import { buttonVariants } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<div class='container relative flex md:flex-row flex-col gap-2'>
    <div class='md:w-1/2 mx-2 pt-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
        <h1 class='text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] mb-4'>Projects</h1>
        <h2 class='text-xl text-muted-foreground'>A non-exhaustive showcase of the projects I have worked on. If you are interested to know what I can do for your company, feel free to reach out!</h2>
        <div class="flex w-full items-center justify-center md:justify-start space-x-4 pb-8 pt-4 md:pb-10">
            <a href="/contact" class={cn(buttonVariants())}> Contact me </a>
        </div>
    </div>
</div>

<div class='container relative'>
    <div class="relative">
        <div class="lg:max-w-none">
            <!-- TODO: replace with srollarea component when it's ready -->
            <div
                class={cn("mb-4 flex items-center overflow-y-auto pb-3 md:pb-0", className)}
                {...$$restProps}
            >
                <a
                    href=/projects/gewoonhout
                    data-sveltekit-noscroll
                    class={cn(
                        "flex h-7 font-medium items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                        $page.url.pathname.startsWith('/projects/gewoonhout') ||
                            ($page.url.pathname === "/projects/gewoonhout")
                            ? "bg-muted  text-primary"
                            : "text-muted-foreground"
                    )}
                >
                    geWOONhout
                </a>
                <a
                    href=/projects/koopmans
                    data-sveltekit-noscroll
                    class={cn(
                        "flex h-7 font-medium items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                        $page.url.pathname.startsWith('/projects/koopmans') ||
                            ($page.url.pathname === "/projects/koopmans")
                            ? "bg-muted  text-primary"
                            : "text-muted-foreground"
                    )}
                >
                    Koopmans
                </a>
                <a
                    href=/projects/nijhuis
                    data-sveltekit-noscroll
                    class={cn(
                        "flex h-7 font-medium items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                        $page.url.pathname.startsWith('/projects/nijhuis') ||
                            ($page.url.pathname === "/projects/nijhuis")
                            ? "bg-muted  text-primary"
                            : "text-muted-foreground"
                    )}
                >
                    Nijhuis
                </a>
            </div>
        </div>
    </div>
    <div class="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl p-4">
        <slot />
    </div>
</div>