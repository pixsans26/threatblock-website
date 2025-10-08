import { MotionDiv, MotionH2 } from "@/utils/motioDiv"
import Image from "next/image"



export default function MethodologyThreatIntelligence() {
    return (
        <>
            <section className="w-full relative lg:mb-28 mb-20 bg-red-50 py-20">
                <div className="lg:w-10/12 w-11/12 mx-auto">
                    <div className="relative mx-auto lg:flex justify-between h-full lg:gap-20 lg:mb-28 mb-20">
                        <div className="lg:w-7/12 flex flex-col justify-center items-center mx-auto">
                            <div className="mx-auto flex flex-col items-center">
                                <MotionDiv
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: .8, delay: .3 }}
                                    viewport={{
                                        once: true
                                    }}
                                >
                                    <span className="bg-white text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-xl text-xs">// END TO END DEFENSE STRATEGY</span>
                                </MotionDiv>

                                <div className="flex gap-5 mt-5 justify-center">
                                    <MotionH2
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, scale: 1, opacity: 1 }}
                                        transition={{ duration: .8, delay: .6 }}
                                        viewport={{
                                            once: true
                                        }}
                                        className="lg:text-4xl text-2xl font-bold w-full">
                                        METHODOLOGY
                                    </MotionH2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARDS */}


                    <div className="w-full mx-auto grid lg:grid-cols-5 grid-cols-1 lg:gap-5 lg:gap-y-20 gap-20 items-stretch">

                        {/* First Step */}
                        <div className="relative w-full flex flex-col">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/1.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Intelligence Collection</h4>
                                <p className="text-gray-700 text-center">
                                    Gather data from open sources (OSINT), dark web, deep web, commercial threat feeds, malware repositories, and internal telemetry.
                                </p>
                            </div>
                        </div>


                        {/* 2nd Step */}

                        <div className="relative w-full flex flex-col">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/2.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Threat Actor Profiling</h4>
                                <p className="text-gray-700 text-center">
                                    Identify and track tactics, techniques, and procedures (TTPs) used by known threat groups targeting your sector.
                                </p>
                            </div>
                        </div>

                        {/* 3rd Step */}

                        <div className="relative w-full flex flex-col">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/3.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Malware & IOC Analysis</h4>
                                <p className="text-gray-700 text-center">
                                    Analyze malware samples, hashes, indicators of compromise (IOCs), and command & control (C2) infrastructure.
                                </p>
                            </div>
                        </div>

                        {/* 4th Step */}

                        <div className="relative w-full flex flex-col">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/4.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Brand Monitoring</h4>
                                <p className="text-gray-700 text-center">
                                    Monitor impersonation, phishing domains, data leaks, and abuse of brand assets across public and underground platforms.
                                </p>
                            </div>
                        </div>

                        {/* 5th Step */}

                        <div className="relative w-full flex flex-col">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/5.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Threat Intelligence Integration (optional)</h4>
                                <p className="text-gray-700 text-center">
                                    Feed curated intelligence directly into your security stack for automation and detection.
                                </p>
                            </div>
                        </div>
                    </div>





                </div>

            </section >
        </>
    )
}