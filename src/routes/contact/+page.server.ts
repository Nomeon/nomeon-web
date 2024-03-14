import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import { formSchema } from '$lib/components/contact/schema';
import nodemailer from 'nodemailer';
import { MAIL_HOST, MAIL_USER, MAIL_PASS, MAIL_SENDER } from '$env/static/private';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(formSchema)
	};
};
export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, formSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const transporter = nodemailer.createTransport({
			host: MAIL_HOST,
			port: 465,
			secure: true,
			auth: {
				type: 'LOGIN',
				user: MAIL_SENDER,
				pass: MAIL_PASS
			}
		});
		const sendMail = await transporter.sendMail({
			from: `Contactform Nomeon <${MAIL_SENDER}>`,
			to: MAIL_USER,
			subject: `${form.data.name} via contactform`,
			text: `Naam: ${form.data.name}\nEmail: ${form.data.email}\nBericht: ${form.data.message}`
		});
		transporter.close();

		return message(form, 'Your message has been received!');
	}
};
