<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { Canvas } from '@threlte/core';
	import { ThrelteScene } from '$lib/components';
	import Icon from '@iconify/svelte';
</script>

<div class="container relative flex flex-col gap-2 md:flex-row">
	<div class="mx-2 pt-8 md:w-1/2 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
		<h1 class="mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
			Stijn Nijhuis
		</h1>
		<h2 class="text-xl text-muted-foreground">
			Passionate about business optimizations and IT implementations, combining these worlds to
			deliver solutions that benefit both.
		</h2>
		<div
			class="flex w-full items-center justify-center space-x-4 pb-8 pt-4 md:justify-start md:pb-10"
		>
			<a href="/projects" class={cn(buttonVariants())}> View projects </a>
			<a href="/contact" class={cn(buttonVariants({ variant: 'outline' }))}> Contact me </a>
		</div>
	</div>
	<div class="min-h-80 w-full md:min-h-0 md:w-1/2">
		<Canvas>
			<ThrelteScene />
		</Canvas>
	</div>
</div>
<div
	class="container relative flex flex-col gap-8 px-8 py-8 md:flex-row md:items-start md:gap-16 md:py-16"
>
	<section id="story" class="flex w-full flex-col justify-center">
		<h1 class="w-full border-b-2 border-primary pb-1 text-2xl">My background</h1>
		<div id="info" class="pt-4">
			<p class="text-muted-foreground">
				After graduating in Business & IT at the University of Twente, I found my groove: coming up
				with smart solutions that fit just right with the company. My goal? Making things simpler
				and better, so everyone can do their job with ease and do it well.
			</p>
			<p class="mt-4 text-muted-foreground">
				Curious about how I can benefit your company? Dive into my <a
					class="text-primary"
					href="/projects">portfolio</a
				> or send me a message!
			</p>
		</div>
		<div
			class="flex w-full items-center justify-center space-x-4 pb-8 pt-4 md:justify-start md:pb-10"
		>
			<a href="/contact" class={cn(buttonVariants())}> Contact me </a>
		</div>
	</section>
	<section id="coding" class="flex w-full flex-col justify-center">
		<h1 class="w-full border-b-2 border-primary pb-1 text-2xl">Two languages</h1>
		<div id="info" class="pt-4">
			<p class="text-muted-foreground">
				In the dynamic landscape of Business & IT, two distinct languages often emerge: the
				strategic voice of business and the technical dialect of IT. Bridging the gap between these
				worlds is what I do best. I comprehend the business challenges and translate them seamlessly
				for the tech team. This ensures solutions that are aligned with business goals and
				technically robust.
			</p>
			<p class="mt-4 text-muted-foreground">
				When the off-the-shelf solutions fall short, I take a proactive approach. I create custom
				software that fits; whether it's to transform data, run detailed production simulations, or
				connecting two existing software systems.
			</p>
			<div id="icons" class="mt-4 flex w-full justify-center gap-8">
				<Icon width="32" icon="logos:python" />
				<Icon width="32" icon="vscode-icons:file-type-rust" />
				<Icon width="32" icon="devicon:svelte" />
				<Icon width="32" icon="skill-icons:typescript" />
				<Icon width="32" icon="skill-icons:javascript" />
			</div>
		</div>
	</section>
</div>
