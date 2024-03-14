import { z } from 'zod';

export const formSchema = z.object({
	email: z.string().email(),
	name: z.string().min(2, { message: 'Name must be atleast 2 characters long' }).max(100),
	message: z
		.string({
			required_error: 'Please enter a message'
		})
		.min(10, { message: 'Message must be atleast 10 characters long' })
		.max(1000)
});

export type FormSchema = typeof formSchema;
