<script lang="ts">
	import { ProjectContent } from '$lib/components';
	import Icon from '@iconify/svelte';
</script>

<ProjectContent>
	<div slot="challenge" class="p-2">
		<p>
			At Koopmans Bouwgroep, calculators had to calculate twice, in order to get the correct output
			for their ERP system. IBIS Trad did not allow to configure the export, and the ERP system was
			limited in the configuration for the export.
		</p>
		<p>
			The result is a lot of manual work, especially since most of the work had to be done twice.
			This was a very time-consuming process, and it was prone to human error.
		</p>
	</div>
	<div slot="solution" class="p-2">
		<p>
			Using Tauri, which is a framework for building native apps, I've developed a desktop
			application which converts the output of IBIS Trad into the correct format for the ERP system.
			This setup allows the calculator at Koopmans Bouwgroep to calculate only once, and to create
			an export for the ERP system with the press of a button.
		</p>
	</div>
	<div slot="result" class="p-2">
		<ul>
			<li class="flex items-center gap-2 pb-2">
				<Icon icon="mdi:check" class="min-h-4 min-w-4 text-primary" />
				<span>More error-proof, as the output is generated dynamically.</span>
			</li>
			<li class="flex items-center gap-2 pb-2">
				<Icon icon="mdi:check" class="min-h-4 min-w-4 text-primary" />
				<span>Increased the productivity of the calculator.</span>
			</li>
			<li class="flex items-center gap-2 pb-2">
				<Icon icon="mdi:check" class="min-h-4 min-w-4 text-primary" />
				<span>
					Documented the "business rules" for creating the export, allowing for easier maintenance.
				</span>
			</li>
		</ul>
	</div>
</ProjectContent>
