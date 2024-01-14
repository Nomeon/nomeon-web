<script lang="ts">
	import { onMount } from 'svelte';
	import {
		DirectionalLight,
		HemisphereLight,
		Mesh,
		PerspectiveCamera,
		Scene,
		WebGLRenderer
	} from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
	import { Skeleton } from '$lib/components/ui/skeleton';

	export let canvas: HTMLCanvasElement;
	export let width: number;
	export let height: number;

	let renderer: WebGLRenderer;
	let camera: PerspectiveCamera;
	let scene: Scene;
	let mesh: Mesh;
    let loading: boolean = true;

	onMount(() => {
        createScene();
		animate();
	});

	function createScene() {
		scene = new Scene();
		camera = new PerspectiveCamera(50, width / height, 0.1, 1000);
		camera.position.y = 19;
		camera.position.z = 35;
		camera.rotateX(-0.3);

		renderer = new WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
		renderer.setSize(width, height);

		const loader = new GLTFLoader();
		loader.load(
			'/Factory.glb',
			function (gltf: any) {
				mesh = gltf.scene;
				mesh.scale.set(0.029, 0.029, 0.029);
				mesh.rotateY((3 * Math.PI) / 4);
				scene.add(mesh);
			},
			undefined,
			function (error) {
				console.error(error);
			}
		);
		const directionalLight = new DirectionalLight(0xffffff);
		scene.add(directionalLight);

		const hemisphereLight = new HemisphereLight(0xffffff, 0x444444);
		hemisphereLight.position.set(1, 1, 1);
		scene.add(hemisphereLight);
	}

	function animate() {
		canvas.width = width;
		canvas.height = height;
		requestAnimationFrame(animate);
		if (mesh) {
			mesh.rotateY(0.001);
		}
        loading = false;
		renderer.render(scene, camera);
	}

	function resize() {
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);
	}
</script>

{#if loading}
    <div class='w-full h-full p-4'>
        <Skeleton class='w-full h-full rounded-sm' />
    </div>
{/if}
<canvas bind:this={canvas} />
<svelte:window on:resize={resize} />
