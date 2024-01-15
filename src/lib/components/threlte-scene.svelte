<script lang="ts">
	import type * as THREE from 'three';
	import { Group } from 'three';
	import {
		T,
		type Props,
		type Events,
		type Slots,
		forwardEventHandlers,
		useTask
	} from '@threlte/core';
	import { useGltf, OrbitControls } from '@threlte/extras';

	type $$Props = Props<THREE.Group>;
	type $$Events = Events<THREE.Group>;
	type $$Slots = Slots<THREE.Group> & { fallback: {}; error: { error: any } };

	export const ref = new Group();

	type GLTFResult = {
		nodes: {
			Node: THREE.Mesh;
		};
		materials: {
			Cube: THREE.MeshStandardMaterial;
		};
	};

	const gltf = useGltf<GLTFResult>('/Factory-optimized.glb', { useDraco: true });

	const component = forwardEventHandlers();

	let width: number;
	let rotation = 3;
	useTask((delta) => {
		rotation += delta * 0.25;
	});
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
	{#await gltf}
		<slot name="fallback" />
	{:then gltf}
		<T.PerspectiveCamera
			makeDefault
			position={[10, 5, 10]}
			on:create={({ ref }) => {
				ref.lookAt(0, 1, 0);
			}}
		>
			{#if width >= 768}
				<OrbitControls enableDamping enableZoom={false} />
			{/if}
		</T.PerspectiveCamera>
		<T.AmbientLight intensity={1.5} />
		<T.Mesh
			scale={0.011}
			rotation.y={rotation}
			position.y={-2.8}
			geometry={gltf.nodes.Node.geometry}
			material={gltf.materials.Cube}
		/>
	{:catch error}
		<slot name="error" {error} />
	{/await}

	<slot {ref} />
</T>
<svelte:window bind:innerWidth={width} />
