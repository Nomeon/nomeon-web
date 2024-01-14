<script lang='ts'>
    import type { PageData } from "./$types";
    import SettingsForm from "./settings-form.svelte";
    export let data: PageData;
</script>


<div class='container relative flex md:flex-row flex-col gap-2 mb-8'>
    <div class='md:w-1/2 mx-2 pt-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
        <h1 class='text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] mb-4'>Contact</h1>
        <h2 class='text-xl text-muted-foreground'>Fill in the form or send me an email at <a class="text-primary" href='mailto:stijn@nomeon.nl'>stijn@nomeon.nl</a> and I'll get back to you as soon as possible!</h2>
    </div>
</div>
<div class='container relative'>
    <div class="overflow-hidden rounded-[0.5rem] max-w-6xl m-auto border bg-background shadow-xl p-4">
        <SettingsForm form={data.form} />
    </div>
</div>