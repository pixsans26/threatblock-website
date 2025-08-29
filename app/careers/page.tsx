import Image from "next/image";
import { careersData } from '@/data/careers'
import Button from "@/components/widgets/button_dark";
import CareersHero from "@/components/careers_hero";


export default function Careers() {
    return (
        <>
            <CareersHero />

            <section className="w-9/12 mx-auto flex justify-between items-center gap-10 mb-20">
                <div className="w-7/12">
                    <div className="flex gap-8 w-9/12">
                        <div className="w-8/12 flex flex-col gap-2">
                            <div className="mb-4">
                                <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto">//oportunities</span>
                            </div>
                            <h2 className="text-4xl font-bold w-full">
                                We are looking for
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-9/12 mx-auto justify-between items-center gap-10 mb-40">
                {/* Card */}
                {careersData.map((curElm: any) => (
                    <div id={curElm.id} className='border-[1px] border-gray-300 p-2 min-w-sm  bg-white mb-10'>
                        <div className="p-4 flex justify-between  bg-gradient-to-b from-white to-[#fff6f6] overflow-hidden ">
                            {/* Image */}
                            <div className="w-2/12 text-5xl text-zinc-600 bg-slate-50 overflow-hidden relative">
                                <Image src={curElm.image} height={100} width={1000} alt={curElm.title} />
                            </div>

                            <div className="w-8/12">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-black mb-4">
                                    {curElm.title}
                                </h3>

                                {/* Description */}
                                <p className="text-lg text-gray-500 mb-4">
                                    {curElm.description}
                                </p>
                                <div>
                                    <Button target="_parent" href='/apply' text="Apply Now" />
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

            </section>
        </>
    );
}