
// import { env } from "@/utils/env";
// const baseUrl = env.NEXT_PUBLIC_API_URL

// // // get Core Team
// // export async function getTeam() {

// //     try {
// //         const res = await fetch(`${baseUrl}/items/team?fields=id,name,email,photo,designation&filter[core_member][_eq]=true&sort=date_created`, { cache: 'no-store' });
// //         const response = await res.json();

// //         return response
// //     } catch (error) {
// //         console.log(error)
// //     }
// // }

// // get FAQs
// // export async function getFaqs() {

// //     try {
// //         const res = await fetch(`${baseUrl}/items/faq`, { cache: 'no-store' });
// //         const response = await res.json();

// //         return response
// //     } catch (error) {
// //         console.log(error)
// //     }
// // }

// // get Clients
// export async function getClients() {

//     try {
//         const res = await fetch(`${baseUrl}/items/clients`, {
//             next: { revalidate: 30 }
//         });
//         const response = await res.json();
//         return response

//     } catch (error) {
//         console.log(error)
//     }
// }

// // get Clients
// export async function getGoogleReview() {

//     try {
//         const res = await fetch(`${baseUrl}/items/greview`, {
//             next: { revalidate: 30 }
//         });
//         const response = await res.json();
//         return response

//     } catch (error) {
//         console.log(error)
//     }
// }


// // get Products

// export async function getProducts() {

//     try {
//         const res = await fetch(`${baseUrl}/items/products?filter[status]=published`, { next: { revalidate: 30 } });
//         const response = await res.json();
//         return response

//     } catch (error) {
//         console.log(error)
//     }
// }

// export async function getHeroProducts() {

//     try {
//         const res = await fetch(`${baseUrl}/items/products?filter[status]=published&filter[heroproduct]=true`, { next: { revalidate: 30 } });
//         const response = await res.json();
//         return response

//     } catch (error) {
//         console.log(error)
//     }
// }


// // get single product

// export async function getSingleProduct(id: any) {


//     try {
//         const res = await fetch(`${baseUrl}/items/products/${id}?&fields=*.*`, { next: { revalidate: 30 } });
//         const response = await res.json();
//         // console.log(response)
//         return response

//     } catch (error) {
//         console.log(error)
//     }
// }