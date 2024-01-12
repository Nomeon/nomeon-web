<script lang="ts">
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { SiteHeader, SiteFooter } from '$lib/components';
</script>

<ModeWatcher />
<div class="relative flex min-h-[101dvh] flex-col bg-gradient-to-br from-primary-foreground to-accent" id="page">
	<SiteHeader />
	<div class="flex-1">
		<slot />
	</div>
    <SiteFooter />
</div>