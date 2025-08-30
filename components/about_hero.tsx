
import { MotionDiv, MotionH1, MotionP } from "@/utils/motioDiv";
import Image from "next/image";

export default function AboutHero() {
    return (
        <>
            <section className="w-full mx-auto lg:flex justify-center lg:h-[90vh] lg:mb-40 mb-80">
                <div className="w-full lg:h-[80vh] lg:flex">
                    <div className="absolute w-full lg:h-[80vh] z-0 overflow-hidden">
                        <Image src='/images/about_page_bg.png' height={1000} width={10000} alt="about w-full" />
                    </div>

                    <div className="w-9/12 lg:flex hidden justify-around items-center mx-auto gap-20 z-10 lg:my-10 mt-30">
                        <div className="w-6/12 flex flex-col gap-4 justify-start">

                            <MotionH1
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: .8, delay: .3 }}
                                viewport={{
                                    once: true
                                }}
                                className="lg:text-6xl text-3xl font-bold text-white mb-10">
                                Tailored <span className="text-red-600">Consulting</span> for Advanced Security
                            </MotionH1>
                            <MotionP
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: .8, delay: .6 }}
                                viewport={{
                                    once: true
                                }}
                                className="text-gray-400 lg:text-lg">
                                At ThreatBlock, we specialize in delivering cybersecurity solutions that are both <span className="font-bold text-white"> cutting-edge and
                                    deeply personalized</span>. Our mission is to empower organizations of every size to navigate today’s
                                evolving threat landscape with confidence. By combining <span className="font-bold text-white">strategic insight, advanced tools, and a
                                    client-first mindset</span>, we ensure security becomes a true enabler of business growth—not just a
                                compliance checkbox.
                            </MotionP>

                        </div>
                        <div className="w-6/12">
                        </div>
                    </div>

                </div>
                <div className="lg:w-9/12 w-11/12 lg:h-[90vh] h-[30vh] lg:flex justify-around absolute items-center mx-auto">
                    <MotionDiv
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, scale: 1, opacity: 1 }}
                        transition={{ duration: .8, delay: .3 }}
                        viewport={{
                            once: true
                        }}
                        className="lg:w-6/12 w-7/12 right-0 absolute bottom-0">
                        <Image src='/images/about_team.png' height={100} width={1000} alt="about" />
                    </MotionDiv>
                </div>

            </section>

            {/* Responsive */}
            <section className="w-11/12 lg:hidden mx-auto gap-20 z-10 mt-40">

                <MotionH1
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: .8, delay: .3 }}
                    viewport={{
                        once: true
                    }}
                    className="lg:text-6xl text-3xl font-bold text-zinc-900 mb-5">
                    Tailored <span className="text-red-600">Consulting</span> for Advanced Security
                </MotionH1>
                <MotionP
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: .8, delay: .6 }}
                    viewport={{
                        once: true
                    }}
                    className="text-gray-600 mb-2">
                    At ThreatBlock, we specialize in delivering cybersecurity solutions that are both <span className="font-bold text-black"> cutting-edge anddeeply personalized</span>. Our mission is to empower organizations of every size to navigate today’s
                    evolving threat landscape with confidence. By combining <span className="font-bold text-black">strategic insight, advanced tools, and aclient-first mindset</span>, we ensure security becomes a true enabler of business growth—not just acompliance checkbox.
                </MotionP>

            </section>
        </>
    );
}
