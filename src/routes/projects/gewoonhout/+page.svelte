<script lang='ts'>
    import { ProjectContent } from "$lib/components";
	import Icon from "@iconify/svelte";
</script>

<ProjectContent>
    <div slot="challenge" class='p-2'>
        <p>At geWOONhout, work planners were spending a lot of time extracting data from the 3D (IFC) Models. Components of several buildings had to be manually entered into multiple Excel sheet, taking multiple days per project.</p>
        <p>This significantly decreased their producticity, while also increasing the room for human error.</p>
    </div>
    <div slot="solution" class='p-2'>
        <p>I've developed an easy-to-use Python tool which loads the IFC models, checks and extracts the data, and transforms this data into several different CSV files. These CSV files are customized according to the specification of the milling companies. In addition, a report can be generated for the 3D modellers which states the errors that have corrected.</p>
    </div>
    <div slot="result" class='p-2'>
        <ul>
            <li class='flex gap-2 items-center pb-2'>
                <Icon icon="mdi:check" class='w-6 h-6 text-primary' />
                <span>
                    Increased productivity, converting a 3-day job into the press of a button.
                </span>
            </li>
            <li class='flex gap-2 items-center pb-2'>
                <Icon icon="mdi:check" class='w-6 h-6 text-primary' />
                <span>
                    Reduced the room for human error, as the data is extracted automatically.
                </span>
            </li>
            <li class='flex gap-2 items-center pb-2'>
                <Icon icon="mdi:check" class='w-6 h-6 text-primary' />
                <span>
                    Optimized workflow, as faulty components in the IFC models are detected earlier in the process.
                </span>
            </li>
        </ul>
    </div>
</ProjectContent>