<script lang='ts'>
	import Icon from "@iconify/svelte";
</script>

<div class='w-full h-full flex flex-col md:flex-row gap-4'>
    <div class='w-full md:w-1/3'>
        <div class='flex gap-2 p-1 items-center'>
            <Icon icon="mdi:alert-circle-outline" class='w-4 h-4 text-primary' />
            <h2 class='font-medium'>Challenge</h2>
        </div>
        <slot name='challenge' />
    </div>
    <div class='w-full md:w-1/3'>
        <div class='flex gap-2 p-1 items-center'>
            <Icon icon="mdi:lightbulb-outline" class='w-4 h-4 text-primary' />
            <h2 class='font-medium'>Solution</h2>
        </div>
        <slot name='solution' />
    </div>
    <div class='w-full md:w-1/3'>
        <div class='flex gap-2 p-1 items-center'>
            <Icon icon="mdi:check-circle-outline" class='w-4 h-4 text-primary' />
            <h2 class='font-medium'>Result</h2>
        </div>
        <slot name='result' />
    </div>
</div>