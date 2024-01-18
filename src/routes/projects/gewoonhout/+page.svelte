<script lang="ts">
	import { ProjectContent } from '$lib/components';
	import Icon from '@iconify/svelte';
</script>

<ProjectContent>
	<div slot="challenge" class="p-2">
		<p>
			At geWOONhout, work planners were spending a lot of time extracting data from the 3D (IFC)
			Models. Components of several buildings had to be manually entered into multiple Excel sheets,
			taking several days per project.
		</p>
		<p>
			This significantly decreased their productivity, while simultaneously increasing the potential of human
			error.
		</p>
	</div>
	<div slot="solution" class="p-2">
		<p>
			I've developed an easy-to-use Python tool which loads the IFC models, checks and extracts the
			data, and transforms this data into several different CSV files. These CSV files are
			customized according to the specification of the milling companies. In addition, a report can
			be generated for the 3D modellers which indicates the errors that have to be solved.
		</p>
	</div>
	<div slot="result" class="p-2">
		<ul>
			<li class="flex items-center gap-2 pb-2">
				<Icon icon="mdi:check" class="h-6 w-6 text-primary min-w-[1rem]" />
				<span> Increased productivity, converting a 3-day job into the press of a button. </span>
			</li>
			<li class="flex items-center gap-2 pb-2">
				<Icon icon="mdi:check" class="h-6 w-6 text-primary min-w-[1rem]" />
				<span> Reduced the chance of human error, as the data is extracted automatically. </span>
			</li>
			<li class="flex items-center gap-2 pb-2">
				<Icon icon="mdi:check" class="h-6 w-6 text-primary min-w-[1rem]" />
				<span>
					Optimized workflow, as faulty components in the IFC models are detected earlier in the
					process.
				</span>
			</li>
		</ul>
	</div>
</ProjectContent>
