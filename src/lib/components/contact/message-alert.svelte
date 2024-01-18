<script lang="ts">
	import { getForm } from 'formsnap';
	import { toast } from 'svelte-sonner';
	const { message } = getForm();

	$: if ($message) {
		toast.success($message);
	}
</script>
