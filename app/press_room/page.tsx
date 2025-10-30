import PressHero from "@/components/press_room_hero";
import Image from "next/image";
import { getNews } from "@/api/getData";
import { env } from "@/utils/env";
const baseUrl = env.NEXT_PUBLIC_API_URL

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pressroom & Media | ThreatBlock',
    description: 'View the latest press releases, media mentions, and company news from ThreatBlock, a leader in cybersecurity.',
    keywords: 'pressroom, media, press release, ThreatBlock news, in the media, media contact'
};

export default async function PressRoom() {
    const { data: news } = await getNews()
    return (
        <>
            <PressHero />
            <section className="lg:w-9/12 w-11/12 mx-auto flex justify-between items-center gap-10 lg:mb-10 mb-5">
                <div className="lg:w-7/12 w-full">
                    <div className="flex gap-8 lg:w-9/12">
                        <div className="lg:w-8/12 flex flex-col gap-2">
                            <div className="lg:mb-4 mb-2">
                                <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto">//NEWS</span>
                            </div>
                            <h2 className="lg:text-4xl text-2xl font-bold w-full">
                                In The News
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:w-9/12 w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 mb-40">

                {/* --- MODIFICATION START --- */}
                {/* Check if news data exists and has a length greater than 0 */}
                {news && news.length > 0 ? (

                    // If TRUE: Render the news articles
                    news.map((curElm: any) => (
                        <div key={curElm.id} className="w-full">
                            <div className='border-[1px] border-gray-300 p-2 min-w-sm space-y-6  bg-white'>
                                <div className="p-4 flex flex-col gap-2 bg-gradient-to-b from-white to-[#fff6f6] overflow-hidden ">
                                    <div className="text-5xl text-zinc-600 mb-4">
                                        <Image src={`${baseUrl}/assets/${curElm.image}`} height={100} width={1000} alt={curElm.title || 'News image'} />
                                    </div>
                                    <h3 className="text-xl font-bold text-black">
                                        {curElm.title}
                                    </h3>
                                    <p className="text-lg text-gray-700">
                                        {curElm.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (

                    // If FALSE: Render a fallback message
                    // lg:col-span-2 ensures the message spans the full grid width
                    <div className="lg:col-span-2 text-center py-20">
                        <p className="text-gray-500 italic text-lg">
                            News data is not available.
                        </p>
                    </div>
                )}
                {/* --- MODIFICATION END --- */}

            </section>
        </>
    );
}