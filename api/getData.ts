
import { env } from "@/utils/env";
const baseUrl = env.NEXT_PUBLIC_API_URL
const DIRECTUS_TOKEN = env.NEXT_PUBLIC_DIRECTUS_TOKEN

// get resources
export async function getResources() {

    try {
        const res = await fetch(`${baseUrl}/items/resources`, {
            headers: {
                Authorization: `Bearer ${DIRECTUS_TOKEN}`,
            },
            next: { revalidate: 30 }
        });
        const response = await res.json();

        return response
    } catch (error) {
        console.log(error)
    }
}

// get casestudies

export async function getCaseStudies() {

    try {
        const res = await fetch(`${baseUrl}/items/case_studies`, {
            headers: {
                Authorization: `Bearer ${DIRECTUS_TOKEN}`,
            },

            next: { revalidate: 30 }
        });
        const response = await res.json();

        return response
    } catch (error) {
        console.log(error)
    }
}


// get teams

export async function getTeams() {

    try {
        const res = await fetch(`${baseUrl}/items/team`, {
            headers: {
                Authorization: `Bearer ${DIRECTUS_TOKEN}`,
            },

            next: { revalidate: 30 }
        });
        const response = await res.json();

        return response
    } catch (error) {
        console.log(error)
    }
}


// get news

export async function getNews() {

    try {
        const res = await fetch(`${baseUrl}/items/news`, {
            headers: {
                Authorization: `Bearer ${DIRECTUS_TOKEN}`,
            },

            next: { revalidate: 30 }
        });
        const response = await res.json();

        return response
    } catch (error) {
        console.log(error)
    }
}
