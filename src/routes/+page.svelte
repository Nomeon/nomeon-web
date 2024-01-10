<script lang='ts'>
	import * as PageHeader from "$lib/components/page-header";
	import { buttonVariants } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";
	import { onMount } from "svelte";
    import {
        BoxGeometry,
        DirectionalLight,
        HemisphereLight,
        Mesh,
        MeshStandardMaterial,
        PerspectiveCamera,
        Scene,
        WebGLRenderer
    } from 'three';
    // @ts-ignore
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

    let canvas: HTMLCanvasElement;
    let camera: PerspectiveCamera;
    let renderer: WebGLRenderer;
    let width: number;
    let height: number;

    onMount(() => {
        const scene = new Scene();
        camera = new PerspectiveCamera( 30, width / height, 0.1, 1000 );

        renderer = new WebGLRenderer({ canvas: canvas, alpha: true });
        renderer.setSize( width, height );

        const loader = new GLTFLoader();
        loader.load( '/Desk.glb', function ( gltf: any ) {
            scene.add( gltf.scene );
        }, undefined, function ( error: any ) {
            console.error( error );
        } );

        camera.position.z = 5;
        camera.position.x = -0.5;
        camera.position.y = 0.5;
        const directionalLight = new DirectionalLight(0x9090aa);
        directionalLight.position.set(-10, 10, -10).normalize();
        scene.add(directionalLight);

        const hemisphereLight = new HemisphereLight(0xffffff, 0x444444);
        hemisphereLight.position.set(1, 1, 1);
        scene.add(hemisphereLight);

        function animate() {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        }

        

        animate();
    });

    function resize() {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize( width, height );
    }
</script>

<div class='container relative'>
    <PageHeader.Root class="pb-8">
        <PageHeader.Heading>Stijn Nijhuis</PageHeader.Heading>
        <PageHeader.Description>
			Passionate about business optimizations and IT implementations, 
            combining these worlds to deliver solutions that benefit both.
		</PageHeader.Description>
        <div class="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
			<a href="/projects" class={cn(buttonVariants())}> View projects </a>
            <a href="/contact" class={cn(buttonVariants({ variant: "outline" }))}> Contact me </a>
        </div>
    </PageHeader.Root>
    <section
        class="space-y-8 overflow-hidden rounded-lg border-2 border-primary dark:border-muted"
    >
    <canvas on:resize={resize} bind:this={canvas} bind:clientHeight={height} bind:clientWidth={width} class=''>

    </canvas>
    </section>
</div>
