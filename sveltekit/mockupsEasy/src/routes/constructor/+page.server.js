/** @type {import('./$types').Actions} */


import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		await prisma.task.create({
			data: {
				title: title,
			}
		});
	},
    delete: async ({ url }) => {
		const id = url.searchParams.get('id');
		 
        try {
			await prisma.task.delete({
            where: {
                id: Number(id),
            }
        });
		}
		catch (error) {
			console.error(error);
		}
		return {	
			status: 200,
		}
		},
	};

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	// Retrieve tasks from db using prisma client
	const tasks = await prisma.task.findMany();

	return {
		props: {
			tasks
		}
	};
}
