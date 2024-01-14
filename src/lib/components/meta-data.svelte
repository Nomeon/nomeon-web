<script lang="ts">
	import { page } from '$app/stores';

	export let title: string = 'Nomeon';

	$: title = $page.data?.title ? `Nomeon | ${$page.data.title}` : 'Nomeon';
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content="Passionate about business optimizations and IT implementations, combining these worlds to deliver solutions that benefit both."
	/>
	<meta name="keywords" content="Business,IT,Stijn Nijhuis,Process,Optimization,Bedrijf" />
	<meta name="author" content="Stijn Nijhuis" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://nomeon.nl" />
	<meta name="twitter:title" content={title} />
	<meta
		name="twitter:description"
		content="Passionate about business optimizations and IT implementations, combining these worlds to deliver solutions that benefit both."
	/>
	<meta name="twitter:image" content="https://nomeon.nl/weblogo.svg" />
	<meta name="twitter:image:alt" content="Nomeon" />
	<meta name="twitter:creator" content="Stijn Nijhuis" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={'https://nomeon.nl/' + $page.url.pathname} />
	<meta property="og:image" content="https://nomeon.nl/weblogo.svg" />
	<meta property="og:image:alt" content="Nomeon" />
	<meta property="og:image:width" content="1010" />
	<meta property="og:image:height" content="230" />
	<meta
		property="og:description"
		content="Passionate about business optimizations and IT implementations, combining these worlds to deliver solutions that benefit both."
	/>
	<meta property="og:site_name" content="Nomeon" />
	<meta property="og:locale" content="en_NL" />
	<link rel="shortcut icon" href="/favicon-16x16.png" />
	<!-- <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> -->
</svelte:head>
