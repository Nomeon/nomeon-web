<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { formSchema, type FormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import MessageAlert from './message-alert.svelte';
	import { toast } from 'svelte-sonner';
	export let form: SuperValidated<FormSchema>;
</script>

<Form.Root
	method="POST"
	{form}
	schema={formSchema}
	options={{
		onSubmit: () => {
			toast.loading('Loading...');
		},
		resetForm: true,
		clearOnSubmit: 'errors-and-message'
	}}
	let:config
>
	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label>Name</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label>Email</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="message">
		<Form.Item>
			<Form.Label>Message</Form.Label>
			<Form.Textarea placeholder="Write your message here." />
			<Form.Description></Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button class="mt-4">Submit</Form.Button>
	<MessageAlert />
</Form.Root>
