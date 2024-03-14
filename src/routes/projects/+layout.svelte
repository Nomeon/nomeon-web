<script lang="ts">
	import { cn } from '$lib/utils';
	import { ProjectNav } from '$lib/components/nav';
	import { buttonVariants } from '$lib/components/ui/button';
	import { ScrollArea } from '$lib/components/ui/scroll-area';

	const projectItems = [
		{
			title: 'geWOONhout',
			href: '/projects/gewoonhout'
		},
		{
			title: 'Koopmans',
			href: '/projects/koopmans'
		},
		{
			title: 'Nijhuis',
			href: '/projects/nijhuis'
		}
	]
</script>

<div class="container relative flex flex-col gap-2 md:flex-row">
	<div class="mx-2 pt-8 md:w-1/2 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
		<h1 class="mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
			Projects
		</h1>
		<h2 class="text-xl text-muted-foreground">
			A non-exhaustive showcase of the projects I have worked on. If you are interested to know what
			I can do for your company, feel free to reach out!
		</h2>
		<div
			class="flex w-full items-center justify-center space-x-4 pb-8 pt-4 md:justify-start md:pb-10"
		>
			<a href="/contact" class={cn(buttonVariants())}> Contact me </a>
		</div>
	</div>
</div>

<div class="container relative pb-16">
	<div class="relative">
		<div class="lg:max-w-none">
			<ScrollArea class="mb-4 rounded-md" orientation='horizontal'>
				<ProjectNav items={projectItems} class="mb-4" />
			</ScrollArea>
		</div>
	</div>
	<div class="overflow-hidden rounded-[0.5rem] border bg-background p-4 shadow-xl">
		<slot />
	</div>
</div>
