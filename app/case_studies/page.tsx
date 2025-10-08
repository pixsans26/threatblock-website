import CaseStudiesHero from "@/components/case_studies_hero";
import ButtonDark from "@/components/widgets/button_dark";
import Image from "next/image";
import { getCaseStudies } from "@/api/getData";
import { env } from "@/utils/env";
const baseUrl = env.NEXT_PUBLIC_API_URL

export default async function CaseStudies() {
    const { data: caseStudies } = await getCaseStudies()
    return (
        <>
            <CaseStudiesHero />

            <section className="lg:w-9/12 w-11/12 mx-auto flex justify-between items-center gap-10 mb-20">
                <div className="lg:w-7/12 w-full">
                    <div className="flex gap-8 w-9/12">
                        <div className="lg:w-8/12 flex flex-col gap-2">
                            <div className="lg:mb-4 mb-2">
                                <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-xl text-xs">//case studeis</span>
                            </div>
                            <h2 className="lg:text-4xl text-2xl font-bold w-full">
                                Our Case Studeis
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <div className="lg:w-9/12 w-11/12 mx-auto grid lg:grid-cols-2 grid-1 justify-between items-center gap-10 mb-40">

                {/* Card */}
                {caseStudies.map((curElm: any) => (

                    <div key={curElm.id} className='border-[1px] border-gray-300 p-2 min-w-sm space-y-6  bg-white'>
                        <div className="p-4 flex flex-col gap-2 bg-gradient-to-b from-white to-[#fff6f6] overflow-hidden ">
                            {/* Icon */}
                            <div className="text-5xl text-zinc-600 mb-4 lg:h-[20rem] bg-slate-50 overflow-hidden relative">
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
                                <ButtonDark href={`${baseUrl}/assets/${curElm.pdf_file}`} target="_blank" text="Download" />
                            </div>


                        </div>
                    </div>
                ))}

            </div>
        </>
    );
}