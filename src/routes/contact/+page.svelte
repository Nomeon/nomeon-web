<script lang="ts">
	import type { PageData } from './$types';
	import SettingsForm from './settings-form.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	export let data: PageData & { form: any };

	// const { form, message } = superForm(data.form);
	// $: if (message) {
	//     console.log($message);
	// }

	// https://superforms.rocks/concepts/messages Check if works with this.
</script>

<div class="container relative mb-8 flex flex-col gap-2 md:flex-row">
	<div class="mx-2 pt-8 md:w-1/2 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
		<h1 class="mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
			Contact
		</h1>
		<h2 class="text-xl text-muted-foreground">
			Fill in the form or send me an email at <a class="text-primary" href="mailto:stijn@nomeon.nl"
				>stijn@nomeon.nl</a
			> and I'll get back to you as soon as possible!
		</h2>
	</div>
</div>
<div class="container relative">
	<div class="m-auto max-w-6xl overflow-hidden rounded-[0.5rem] border bg-background p-4 shadow-xl">
		<SettingsForm form={data.form} />
	</div>
</div>
