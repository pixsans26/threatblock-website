import Image from "next/image";
import ButtonDark from "./widgets/button_dark";
import ServiceCard from "./widgets/service_card";
import { servicesData } from "@/data/services"
import { MotionDiv, MotionH2, MotionP } from "@/utils/motioDiv";
export default function ServiceSlide() {
    return (
        <>



            <section className="w-full relative">
                {/* Background Decoration */}
                <div className="absolute inset-0 top-40 z-0">
                    <div className="w-full h-full bg-no-repeat bg-right " style={{ backgroundImage: `url('/images/hexagon.svg')`, backgroundAttachment: `fixed`, backgroundRepeat: 'fill' }}></div>
                </div>
                <div className="lg:w-9/12 w-11/12 mx-auto z-10">
                    <div className="relative mx-auto flex justify-between h-full py-[200px] lg:gap-20">
                        <div className="h-[300px] sticky top-[300px] w-6/12 flex flex-col justify-center">
                            <div className="">
                                <MotionDiv
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: .8, delay: .3 }}
                                    viewport={{
                                        once: true
                                    }}
                                >
                                    <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-lg text-xs">// SERVICES</span>
                                </MotionDiv>

                                <div className="flex flex-col gap-5 mt-5">
                                    <MotionH2
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                        transition={{ duration: .8, delay: .6 }}
                                        viewport={{
                                            once: true
                                        }}
                                        className="lg:text-4xl text-2xl font-bold w-full">
                                        Explore our core Services
                                    </MotionH2>
                                    <MotionP
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                        transition={{ duration: .8, delay: .9 }}
                                        viewport={{
                                            once: true
                                        }}
                                        className="text-gray-500 text-lg mb-10">
                                        We provide a comprehensive suite of cybersecurity services designed to protect your assets and ensure business continuity.
                                    </MotionP>
                                    <MotionDiv
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                        transition={{ duration: .8, delay: 1.2 }}
                                        viewport={{
                                            once: true
                                        }}
                                    >
                                        <ButtonDark href="/services" text="Explore our Services" target="_parent" />
                                    </MotionDiv>
                                </div>
                            </div>
                        </div>

                        <MotionDiv
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .9 }}
                            viewport={{
                                once: true
                            }}
                            className="w-6/12 flex flex-col gap-80 sticky">

                            {servicesData.map((curElm: any) => (
                                <ServiceCard
                                    key={curElm.id}
                                    image={curElm.image}
                                    title={curElm.title}
                                    description={curElm.description}
                                />
                            ))}
                        </MotionDiv>


                    </div>

                </div>

            </section>
        </>
    )
}