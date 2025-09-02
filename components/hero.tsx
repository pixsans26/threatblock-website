import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./widgets/button_dark";
import { MotionDiv, MotionH1, MotionH4, MotionP } from '@/utils/motioDiv';

export default function Hero() {
    return (
        <>
            <section className="w-full relative mx-auto bg-[#FAF2F2] lg:mb-48 mb-56 ">
                <div className="w-full lg:absolute mx-auto h-auto ">

                    {/* section bg */}
                    <div className="lg:w-9/12 w-11/12 mx-auto lg:flex justify-between items-center lg:h-screen h-[54rem] lg:py-0 pt-10">
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
                        <div className="lg:w-7/12 lg:mx-0 mx-auto w-full relative flex flex-col lg:items-start items-center justify-center lg:gap-10 gap-2">
                            {/* Title */}
                            <MotionH1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .8, delay: .3 }}
                                viewport={{
                                    once: true
                                }}
                                className="lg:text-6xl text-4xl font-bold lg:w-10/12 w-full lg:text-start text-center">
                                Protect Your Business With Tailored <span className="text-red-600">Cybersecurity </span>Consulting
                            </MotionH1>
                            <MotionP
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .8, delay: .6 }}
                                viewport={{
                                    once: true
                                }}
                                className="lg:w-11/12 text-gray-500 lg:text-2xl lg:text-start text-center">
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

                            {/* Counter */}
                            <MotionDiv

                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .8, delay: 1 }}
                                viewport={{
                                    once: true
                                }}
                                className="lg:[clip-path:polygon(50px_0,_100%_0,_100%_calc(100%_-_50px),_calc(100%_-_50px)_100%,_0_100%,_0_50px)] 
                            [clip-path:polygon(20px_0,_100%_0,_100%_calc(100%_-_20px),_calc(100%_-_20px)_100%,_0_100%,_0_20px)] lg:h-[22vh] h-[16vh] lg:w-full w-11/12 absolute lg:right-0 lg:bottom-[-18rem] bottom-[-44rem] lg:z-0 z-10">
                                <div className="flex w-full h-full bg-black">
                                    <div className="opacity-20">
                                        <Image src="/images/counter_hero_bg.png" width={1000} height={1000} alt="hero_image_1" className="" />
                                    </div>
                                    <div className="w-full flex h-full justify-between absolute items-center lg:py-12 gap-4 lg:px-8 px-4 py-8">
                                        <div className="">
                                            <h3 className="lg:text-6xl text-3xl text-white font-bold">50+</h3>
                                            <p className="lg:text-2xl text-xs">Security Engagements</p>
                                        </div>
                                        <div className="border-l border-gray-300 h-20"></div>
                                        <div className="">
                                            <h3 className="lg:text-6xl text-3xl text-white font-bold">1.3B+</h3>
                                            <p className="lg:text-2xl text-xs">Security Signals Processed Daily</p>
                                        </div>
                                        <div className="border-l border-gray-300 h-20"></div>
                                        <div className="">
                                            <h3 className="lg:text-6xl text-3xl text-white font-bold">100%</h3>
                                            <p className="lg:text-2xl text-xs">Clients Satisfaction</p>
                                        </div>
                                    </div>

                                </div>
                            </MotionDiv>
                        </div>
                        <MotionDiv
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .8, delay: .6 }}
                            viewport={{
                                once: true
                            }}
                            className="lg:w-5/12 w-full h-full relative">
                            <div className="bottom-0 w-full h-[60vh] flex items-end lg:absolute justify-end">
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

            </section>
        </>
    );
}