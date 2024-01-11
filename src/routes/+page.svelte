<script lang='ts'>
	import { buttonVariants } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";
	import { onMount } from "svelte";
    import {
        DirectionalLight,
        HemisphereLight,
        Mesh,
        PerspectiveCamera,
        Scene,
        WebGLRenderer
    } from 'three';
    // @ts-ignore
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import Icon from '@iconify/svelte';

    let canvas: HTMLCanvasElement;
    let camera: PerspectiveCamera;
    let renderer: WebGLRenderer;
    let mesh: Mesh;
    let width: number;
    let height: number;

    onMount(() => {
        const scene = new Scene();
        camera = new PerspectiveCamera( 50, width / height, 0.1, 1000 );
        camera.position.y = 19;
        camera.position.z = 35;
        camera.rotateX(-0.3);

        renderer = new WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize( width, height );

        const loader = new GLTFLoader();
        loader.load( '/Factory.glb', function ( gltf: any ) {
            mesh = gltf.scene;
            mesh.scale.set(0.029, 0.029, 0.029);
            mesh.rotateY(3 * Math.PI/4);
            scene.add( mesh );
        }, undefined, function ( error: any ) {
            console.error( error );
        } );

        const directionalLight = new DirectionalLight(0xffffff);
        scene.add(directionalLight);

        const hemisphereLight = new HemisphereLight(0xffffff, 0x444444);
        hemisphereLight.position.set(1, 1, 1);
        scene.add(hemisphereLight);


        function animate() {
            requestAnimationFrame( animate );
            mesh.rotateY(0.001);
            renderer.render( scene, camera );
        }

        animate();
    });

    function resize() {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize( width, height );
    }
</script>

<div class='container relative flex md:flex-row flex-col gap-2'>
    <div class='md:w-1/2 mx-2 pt-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
        <h1 class='text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] mb-4'>Stijn Nijhuis</h1>
        <h2 class='text-xl text-muted-foreground'>Passionate about business optimizations and IT implementations, combining these worlds to deliver solutions that benefit both.</h2>
        <div class="flex w-full items-center justify-center md:justify-start space-x-4 pb-8 pt-4 md:pb-10">
			<a href="/projects" class={cn(buttonVariants())}> View projects </a>
            <a href="/contact" class={cn(buttonVariants({ variant: "outline" }))}> Contact me </a>
        </div>
    </div>
    <div class='md:w-1/2 w-full min-h-80 md:min-h-0' bind:clientHeight={height} bind:clientWidth={width}>
        <canvas bind:this={canvas} {height} {width}  />
    </div>
</div>
<div class='flex flex-col md:flex-row container relative px-8 md:py-16 py-8 gap-8 md:gap-16 md:items-start'>
    <section id='story' class='justify-center flex flex-col w-full'>
        <h1 class="text-2xl w-full border-b-2 pb-1 border-primary">My background</h1>
        <div id='info' class='pt-4'>
            <p class="text-muted-foreground">After graduating in Business & IT at the University of Twente, I found my groove: coming up with smart solutions that fit just right with the company. My goal? Making things simpler and better, so everyone can do their job with ease and do it well.</p>
            <p class='mt-4 text-muted-foreground'>Curious about how I can benefit your company? Dive into my <a class='text-primary' href='/projects'>portfolio</a> or send me a message!</p>
        </div>
        <div class="flex w-full items-center justify-center md:justify-start space-x-4 pb-8 pt-4 md:pb-10">
            <a href="/contact" class={cn(buttonVariants())}> Contact me </a>
        </div>
    </section>
    <section id="coding" class='justify-center flex flex-col w-full'>
        <h1 class="text-2xl w-full border-b-2 pb-1 border-primary">Two languages</h1>
        <div id='info' class='pt-4'>
            <p class="text-muted-foreground">In the dynamic landscape of Business & IT, two distinct languages often emerge: the strategic voice of business and the technical dialect of IT. Bridging the gap between these worlds is what I do best. I comprehend the business challenges and translate them seamlessly for the tech team. This ensures solutions that are aligned with business goals and technically robust.</p>
            <p class='mt-4 text-muted-foreground'>When the off-the-shelf solutions fall short, I take a proactive approach. I create custom software that fits; whether it's to transform data, run detailed production simulations, or connecting two existing software systems.</p>
            <div id='icons' class='flex gap-8 mt-4 w-full justify-center'>
                <Icon width='32' icon="logos:python" />
                <Icon width='32' icon="vscode-icons:file-type-rust" />
                <Icon width='32' icon="devicon:svelte" />
                <Icon width='32' icon="skill-icons:typescript" />    
                <Icon width='32' icon="skill-icons:javascript" />
            </div>
        </div>
    </section>
</div>
<svelte:window on:resize={resize} />