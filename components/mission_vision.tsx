
import { MotionDiv, MotionH2, MotionImg, MotionP } from "@/utils/motioDiv";
import Image from "next/image";

export default function MissionVision() {
    return (
        <>
            <section className="w-full relative flex h-auto justify-center items-center lg:mb-16 mb-10 py-10 " >

                <div className="lg:w-9/12 w-11/12 mx-auto flex flex-col justify-between items-center h-auto py-10 gap-10 z-10">
                    {/* Mission */}
                    <div className="w-full lg:flex items-center justify-center gap-10 mb-5">
                        <div className="lg:w-6/12 w-full lg:mb-0 mb-10">
                            <MotionImg
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: .8, delay: .6 }}
                                viewport={{
                                    once: true
                                }}
                                src='/images/mission.png' width={1000} height={100} alt='mission' />
                        </div>
                        <div className="lg:w-6/12 w-full">
                            <MotionDiv
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: .8, delay: .3 }}
                                viewport={{
                                    once: true
                                }}
                                className="mb-4">
                                <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-xl text-xs">//mission</span>
                            </MotionDiv>
                            <div className="flex flex-col lg:gap-8 gap-2">
                                <MotionH2
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: .8, delay: .6 }}
                                    viewport={{
                                        once: true
                                    }}
                                    className="lg:text-4xl text-2xl font-bold w-full">
                                    Our Goal
                                </MotionH2>
                                <MotionP
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: .8, delay: .9 }}
                                    viewport={{
                                        once: true
                                    }}
                                    className="text-gray-700 lg:text-xl">
                                    Our goal is to provide<span className="text-black font-bold"> proactive, customized security strategies</span> designed around your unique
                                    infrastructure, challenges, and future ambitions. We believe every business deserves more than a
                                    one-size-fits-all approach. By understanding your risk posture and operational needs, we
                                    deliver <span className="text-black font-bold"> measurable impact that strengthens resilience and reduces exposure to cyber threats.</span>
                                </MotionP>

                            </div>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="w-full lg:flex items-center justify-center gap-5">
                        <div className="lg:w-6/12 w-full lg:mb-0 mb-10">
                            <MotionImg
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: .8, delay: 1.5 }}
                                viewport={{
                                    once: true
                                }}
                                src='/images/vision.png' width={1000} height={100} alt='mission' />
                        </div>
                        <div className="lg:w-6/12 w-full">
                            <MotionDiv
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: .8, delay: 1.2 }}
                                viewport={{
                                    once: true
                                }}
                                className="mb-4">
                                <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-xl text-xs">//vision</span>
                            </MotionDiv>
                            <div className="flex flex-col lg:gap-8 gap-2">
                                <MotionH2

                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: .8, delay: 1.5 }}
                                    viewport={{
                                        once: true
                                    }} className="lg:text-4xl text-2xl font-bold w-full">
                                    Our Vision
                                </MotionH2>
                                <MotionP
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: .8, delay: 1.8 }}
                                    viewport={{
                                        once: true
                                    }}
                                    className="text-gray-700 lg:text-xl">
                                    We envision a digital future where <span className="text-black font-bold">businesses innovate without fear </span> —protected by robust,
                                    adaptive, and intelligent cybersecurity. ThreatBlock strives to become the <span className="text-black font-bold">trusted security partner
                                        for enterprises and startups alike</span>, ensuring your critical assets remain protected while your
                                    organization continues to grow and transform.
                                </MotionP>

                            </div>
                        </div>
                    </div>


                </div>
                <div className="absolute right-0 lg:block hidden">
                    <Image src='/images/hexagon.svg' width={500} height={100} alt="" />
                </div>

            </section>
        </>
    );
}
