import CaseStudiesHero from "@/components/case_studies_hero";
import Button from "@/components/widgets/button_dark";
import Image from "next/image";
import { caseStudiesData } from '@/data/case-studies'

export default function CaseStudies() {
    return (
        <>
            <CaseStudiesHero />

            <section className="w-9/12 mx-auto flex justify-between items-center gap-10 mb-20">
                <div className="w-7/12">
                    <div className="flex gap-8 w-9/12">
                        <div className="w-8/12 flex flex-col gap-2">
                            <div className="mb-4">
                                <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto">//case studeis</span>
                            </div>
                            <h2 className="text-4xl font-bold w-full">
                                Our Case Studeis
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-9/12 mx-auto grid lg:grid-cols-2 grid-1 justify-between items-center gap-10 mb-40">

                {/* Card */}
                {caseStudiesData.map((curElm: any) => (
                    <div className='border-[1px] border-gray-300 p-2 min-w-sm space-y-6  bg-white'>
                        <div className="p-4 flex flex-col gap-2 bg-gradient-to-b from-white to-[#fff6f6] overflow-hidden ">
                            {/* Icon */}
                            <div className="text-5xl text-zinc-600 mb-4 h-[20rem] bg-slate-50 overflow-hidden relative">
                                <div className="absolute top-4 right-4">
                                    <Image src='/icons/pdf.svg' height={100} width={40} alt='pdf' />
                                </div>
                                <div>
                                    <Image src={curElm.image} height={100} width={1000} alt={curElm.title} />
                                </div>

                            </div>
                            {/* Title */}
                            <h3 className="text-xl font-bold text-black">
                                {curElm.title}
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-gray-500">
                                {curElm.description}
                            </p>
                            <div>
                                <Button href={curElm.link} text="Download" />
                            </div>


                        </div>
                    </div>
                ))}

            </section>
        </>
    );
}