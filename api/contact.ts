'use server'
import { env } from "@/utils/env";

const baseUrl = env.NEXT_PUBLIC_API_URL
const DIRECTUS_TOKEN = env.NEXT_PUBLIC_DIRECTUS_TOKEN

export async function sendQuery(formData: FormData) {

    const name = formData.get('name');
    const email = formData.get('email');
    const mobile = formData.get('mobile');
    const query = formData.get('query');
    try {
        const response = await fetch(`${baseUrl}/items/queries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DIRECTUS_TOKEN}`,
            },
            body: JSON.stringify({ name, email, mobile, query }),
        });
        const result = await response.json();
        if (response.status == 200) {
            console.log('Message sent Succesfully', result)
            return {
                success: `Message Sent`,
                result
            }
        } else {
            console.log('Message Not Sent', result)
            return {
                failed: 'Message Not Sent',

            }
        }

    } catch (error) {
        return {
            Error: 'Something went wrong',
        };
        console.log(error)
    }
}


