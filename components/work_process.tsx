'use client'

import { MotionDiv, MotionH2, MotionP } from "@/utils/motioDiv"
import Image from "next/image"
import CountUp from 'react-countup';

export default function WorkProcess() {
    return (
        <>
            <section className="w-full relative">
                {/* Background Decoration */}
                <div className="absolute justify-end items-center right-0 lg:flex hidden w-full">
                    <Image src='/images/hexagon.svg' height={100} width={400} alt="bg-decoration" />
                </div>
                <div className="lg:w-9/12 w-11/12 mx-auto lg:flex justify-between h-auto  gap-20 mb-28 z-10 ">


                    <div className="lg:w-5/12 w-full flex-col flex gap-2 lg:mb-0 mb-20">
                        <MotionDiv
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .3 }}
                            viewport={{
                                once: true
                            }} className="lg:mb-4 mb-2">
                            <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-xl text-xs">// HOW WE WORK</span>
                        </MotionDiv>
                        <div className="flex flex-col lg:gap-8 gap-4 w-full">
                            <MotionH2
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: .8, delay: .6 }}
                                viewport={{
                                    once: true
                                }}
                                className="lg:text-4xl text-2xl font-bold w-full">
                                Our experts dedicate over 10,000 hours every year to staying ahead
                                of emerging cyber threats—so your business never falls behind.
                            </MotionH2>
                            <MotionP
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: .8, delay: .9 }}
                                viewport={{
                                    once: true
                                }}
                                className="text-gray-700 lg:text-xl">
                                Through continuous research, advanced training, and real-world engagements, we ensure your
                                organization benefits from cutting-edge protection and proactive defense strategies.
                            </MotionP>

                        </div>
                    </div>
                    <div className="lg:w-7/12 w-full flex lg:gap-10 relative">
                        <div className="w-full flex justify-center items-center">

                            {/* Counter */}
                            <div className=" w-full lg:[clip-path:polygon(50px_0,_100%_0,_100%_calc(100%_-_50px),_calc(100%_-_50px)_100%,_0_100%,_0_50px)] 
                            [clip-path:polygon(20px_0,_100%_0,_100%_calc(100%_-_20px),_calc(100%_-_20px)_100%,_0_100%,_0_20px)] lg:h-[18vh] h-[14vh] absolute lg:z-0 z-10">

                                <div className="flex w-full h-full bg-black">
                                    <div className="opacity-20">
                                        <Image src="/images/counter_hero_bg.png" width={1000} height={1000} alt="hero_image_1" className="" />
                                    </div>
                                    <div className="w-full flex h-full justify-between absolute items-center lg:py-12 gap-4 lg:px-8 px-4 py-8">
                                        <div className="lg:flex lg:gap-4">


                                            <CountUp
                                                suffix="+"
                                                start={1}
                                                end={50}
                                                duration={2}
                                                useEasing={true}
                                                enableScrollSpy={true}
                                                scrollSpyOnce={true}
                                                separator='' >
                                                {({ countUpRef }) => (
                                                    <h3 className="lg:text-4xl text-3xl text-white font-bold"> <span ref={countUpRef} /></h3>
                                                )}

                                            </CountUp>

                                            <p className="lg:text-sm text-xs text-gray-200">Security Engagements</p>
                                        </div>
                                        <div className="border-l border-gray-300 h-20"></div>
                                        <div className=" flex gap-4">
                                            <CountUp
                                                suffix="B+"
                                                start={0}
                                                end={1.3}
                                                duration={2}
                                                useEasing={true}
                                                enableScrollSpy={true}
                                                scrollSpyOnce={true}
                                                separator='' >
                                                {({ countUpRef }) => (
                                                    <h3 className="lg:text-4xl text-3xl text-white font-bold"> <span ref={countUpRef} /></h3>
                                                )}

                                            </CountUp>
                                            <p className="lg:text-sm text-xs text-gray-200">Security Signals Processed Daily</p>
                                        </div>
                                        <div className="border-l border-gray-300 h-20"></div>
                                        <div className="lg:flex gap-4 lg:items-center">
                                            <CountUp
                                                suffix="%"
                                                start={50}
                                                end={100}
                                                duration={2}
                                                useEasing={true}
                                                enableScrollSpy={true}
                                                scrollSpyOnce={true}
                                                separator='' >
                                                {({ countUpRef }) => (
                                                    <h3 className="lg:text-4xl text-3xl text-white font-bold"> <span ref={countUpRef} /></h3>
                                                )}

                                            </CountUp>
                                            <p className="lg:text-sm text-xs text-gray-200">Clients Satisfaction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}