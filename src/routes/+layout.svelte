<script lang="ts">
	import '../app.pcss';
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import { ModeWatcher } from 'mode-watcher';
	import { SiteHeader, SiteFooter, MetaData } from '$lib/components';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { Toaster } from '$lib/components/ui/sonner';

	injectSpeedInsights();
</script>

<Toaster />
<ModeWatcher />
<MetaData />
<div
	class="relative flex min-h-[100dvh] flex-col bg-gradient-to-br from-primary-foreground to-accent"
	id="page"
>
	<SiteHeader />
	<div class="flex-1">
		<slot />
	</div>
	<SiteFooter />
</div>
