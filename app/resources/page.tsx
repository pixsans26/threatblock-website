import ResourcesHero from "@/components/resources_hero";
import Image from "next/image";
import Button from "@/components/widgets/button_dark";
import { getResources } from "@/api/getData";
import { env } from "@/utils/env";
const baseUrl = env.NEXT_PUBLIC_API_URL

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cybersecurity Resources & Insights | ThreatBlock',
    description: 'Download free cybersecurity whitepapers, watch on-demand webinars, and access expert guides to improve your security posture.',
    keywords: 'cybersecurity resources, whitepapers, webinars, security guides, security tools, research reports'
};


export default async function Resources() {
    const { data: resources } = await getResources()

    return (
        <>
            <ResourcesHero />
            <section className="lg:w-9/12 w-11/12 mx-auto flex justify-between items-center gap-10 lg:mb-20 mb-10">
                <div className="lg:w-7/12">
                    <div className="flex gap-8 lg:w-9/12">
                        <div className="lg:w-8/12 flex flex-col gap-2">
                            <div className="lg:mb-4 mb-2">
                                <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-xl text-xs">//resources</span>
                            </div>
                            <h2 className="lg:text-4xl text-2xl font-bold w-full">
                                Documents and Resources
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:w-9/12 w-11/12 mx-auto grid lg:grid-cols-2 grid-1 justify-between items-center gap-10 mb-40">

                {/* --- MODIFICATION START --- */}
                {/* Check if resources exist AND if the array has items */}
                {resources && resources.length > 0 ? (

                    // If TRUE: Render the map
                    resources.map((curElm: any) => (
                        <div key={curElm.id} className='border-[1px] border-gray-300 p-2 min-w-sm space-y-6  bg-white'>
                            <div className="p-4 flex flex-col gap-2 bg-gradient-to-b from-white to-[#fff6f6] overflow-hidden ">
                                {/* Icon */}
                                <div className="text-5xl text-zinc-600 mb-4 lg:2h-[20rem] bg-slate-50 overflow-hidden relative">
                                    <div className="absolute top-4 right-4">
                                        <Image src='/icons/pdf.svg' height={100} width={40} alt='pdf' />
                                    </div>
                                    <div>
                                        <Image src={`${baseUrl}/assets/${curElm.image}`} height={100} width={1000} alt={curElm.title} />
                                    </div>

                                </div>
                                {/* Title */}
                                <h3 className="lg:text-xl font-bold text-black">
                                    {curElm.title}
                                </h3>

                                {/* Description */}
                                <p className="lg:text-xl text-gray-700">
                                    {curElm.description}
                                </p>
                                <div>
                                    <Button href={`${baseUrl}/assets/${curElm.pdf_file}`} text="Download" target="_blank" />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (

                    // If FALSE: Render the "No data" message
                    // We use lg:col-span-2 to make this message span the full grid width
                    <div className="lg:col-span-2 text-center py-20">
                        <p className="text-gray-500 italic text-lg">
                            No resources data to display.
                        </p>
                    </div>
                )}
                {/* --- MODIFICATION END --- */}

            </section>
        </>
    );
}