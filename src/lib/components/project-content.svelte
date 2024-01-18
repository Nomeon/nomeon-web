<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="flex h-full w-full flex-col gap-4 md:flex-row">
	<div class="w-full md:w-1/3">
		<div class="flex items-center gap-2 p-1">
			<Icon icon="mdi:alert-circle-outline" class="h-4 w-4 text-primary" />
			<h2 class="font-medium">Challenge</h2>
		</div>
		<slot name="challenge" />
	</div>
	<div class="w-full md:w-1/3">
		<div class="flex items-center gap-2 p-1">
			<Icon icon="mdi:lightbulb-outline" class="h-4 w-4 text-primary" />
			<h2 class="font-medium">Solution</h2>
		</div>
		<slot name="solution" />
	</div>
	<div class="w-full md:w-1/3">
		<div class="flex items-center gap-2 p-1">
			<Icon icon="mdi:check-circle-outline" class="h-4 w-4 text-primary" />
			<h2 class="font-medium">Result</h2>
		</div>
		<slot name="result" />
	</div>
</div>
