<script lang="ts">
	import { ProjectContent } from '$lib/components';
	import Icon from '@iconify/svelte';
</script>

<ProjectContent>
	<div slot="challenge" class="p-2">
		<p>
			Nijhuis Rioolreiniging rents out containers, in addition to a variety of other activities.
			They needed software that would allow them to manage their containers, see which containers
			were available, and be notified when a container was due to be picked up. They also wanted to
			be able to see which containers were rented out to which customers.
		</p>
	</div>
	<div slot="solution" class="p-2">
		<p>
			The application was going to be used by multiple users, so I proposed a web application as
			this would allow for easy access from any device with a browser. The application allows for
			easy management of the containers. In addition, a mail service was set up to send out
			notifications when a container was due to be picked up. This application was completely custom
			made.
		</p>
	</div>
	<div slot="result" class="p-2">
		<ul>
			<li class="flex items-center gap-2 pb-2">
				<Icon icon="mdi:check" class="min-h-4 min-w-4 text-primary" />
				<span>Lightweight application that just does what it needs to do.</span>
			</li>
			<li class="flex items-center gap-2 pb-2">
				<Icon icon="mdi:check" class="min-h-4 min-w-4 text-primary" />
				<span>Simple and intuitive UI.</span>
			</li>
			<li class="flex items-center gap-2 pb-2">
				<Icon icon="mdi:check" class="min-h-4 min-w-4 text-primary" />
				<span> Clear, organized overview of all containers and their status. </span>
			</li>
		</ul>
	</div>
</ProjectContent>
