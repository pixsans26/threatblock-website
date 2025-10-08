import Image from "next/image";
import Button from "./widgets/button_dark";
import { MotionDiv, MotionH1, MotionP } from '@/utils/motioDiv';

export default function Hero() {
    return (
        <>
            <section className="h-screen mb-20">
                <div className="w-full h-screen relative mx-auto bg-[#FAF2F2]">
                    <div className="w-full lg:absolute mx-auto h-auto ">

                        {/* section bg */}
                        <div className="lg:w-9/12 w-11/12 mx-auto lg:flex justify-between items-center h-screen lg:py-0 pt-10">
                            <MotionDiv
                                initial={{ scale: 5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: .8, delay: .3 }}
                                viewport={{
                                    once: true
                                }}
                                className="absolute left-0">
                                <Image src="/images/bg-deco.svg" width={800} height={100} alt="bg-1" />
                            </MotionDiv>
                            <div className="lg:w-7/12 lg:mx-0 mx-auto w-full relative flex flex-col lg:items-start items-center justify-center lg:gap-10 gap-2 lg:mt-20 lg:mb-0 mb-10">
                                {/* Title */}
                                <MotionH1
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: .8, delay: .3 }}
                                    viewport={{
                                        once: true
                                    }}
                                    className="lg:text-5xl text-4xl font-bold lg:w-10/12 w-full lg:text-start text-center">
                                    Protect Your Business With Tailored <span className="text-red-600">Cybersecurity </span>Consulting
                                </MotionH1>
                                <MotionP
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: .8, delay: .6 }}
                                    viewport={{
                                        once: true
                                    }}
                                    className="lg:w-11/12 text-gray-700 lg:text-xl lg:text-start text-center">
                                    We safeguard organizations through proactive Red Team assessments, cloud security enhancement,
                                    and rapid-response incident handling—so you can stay focused on your core mission.
                                </MotionP>

                                {/* button */}
                                <MotionDiv
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: .8, delay: .8 }}
                                    viewport={{
                                        once: true
                                    }}
                                    className="">
                                    <Button href="/contact" text="Free Consultation" target="_parent" />
                                </MotionDiv>


                            </div>
                            <MotionDiv
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .8, delay: .6 }}
                                viewport={{
                                    once: true
                                }}
                                className="lg:w-5/12 w-full h-full relative lg:me-20">
                                <div className="bottom-0 w-full lg:h-[60vh] flex items-end lg:absolute justify-end">
                                    <Image src="/images/hero_image_1.png" width={1000} height={1000} alt="hero_image_1" className="" />
                                </div>
                            </MotionDiv>
                        </div>

                    </div>
                    <div className="lg:w-full lg:h-screen h-[95vh] lg:flex hidden justify-between">
                        <div className="w-8/12 flex bg-red-tint h-full justify-start items-center">
                        </div>
                        <MotionDiv
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .8, delay: .3 }}
                            viewport={{
                                once: true
                            }}
                            className="w-4/12 bg-slate-300 h-full overflow-hidden">
                            <Image src="/images/hero_bg_1.png" width={1000} height={1000} alt="hero_image_1" className="object-center" />
                        </MotionDiv>
                    </div>

                </div>
            </section>
        </>
    );
}