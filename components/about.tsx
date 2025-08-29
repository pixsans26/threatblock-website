
import Image from "next/image";
import Button from "./widgets/button_dark";
import { MotionDiv, MotionH2, MotionP } from "@/utils/motioDiv";

export default function AboutHome() {
    return (
        <>
            <section className="w-full relative lg:flex justify-center items-center bg-[#FAF2F2] lg:mb-0 mb-20">
                <MotionDiv
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: .8, delay: .8 }}
                    viewport={{
                        once: true
                    }}
                    className="lg:w-5/12 w-full bg-slate-50">
                    <Image src='/images/about_1.png' width={1000} height={1000} alt="" />
                </MotionDiv>
                <div className="w-7/12  lg:flex">
                </div>

                {/* Image and founder */}
                <div className="lg:w-9/12 w-11/12 mx-auto h-full lg:absolute lg:flex none justify-end ">
                    <div className="lg:w-5/12 w-full lg:flex hidden justify-end ">
                        <MotionDiv
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: 1.2 }}
                            viewport={{
                                once: true
                            }}
                            className="">
                            <Image src='/images/about_2.png' height={100} width={250} alt='about2' />
                        </MotionDiv>
                    </div>
                </div>

                {/* text and about */}
                <div className="lg:w-9/12 w-11/12 mx-auto lg:flex lg:absolute ">
                    <div className="lg:w-5/12 w-full">

                    </div>
                    <div className="lg:w-7/12 w-full lg:mt-0 mt-10">
                        <div className="lg:flex gap-8 lg:w-9/12 w-full">
                            <div className="lg:w-8/12 w-full lg:flex flex-col gap-2">
                                <MotionDiv
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: .8, delay: .3 }}
                                    viewport={{
                                        once: true
                                    }}
                                    className="mb-4">
                                    <span className="bg-white text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-lg text-xs">//ABOUT US</span>
                                </MotionDiv>
                                <MotionH2
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: .8, delay: .6 }}
                                    viewport={{
                                        once: true
                                    }}
                                    className="lg:text-4xl text-2xl font-bold w-full">
                                    Our dedicated team collectively invests 10,000 hours each year in cybersecurity efforts.
                                </MotionH2>
                            </div>
                        </div>

                        <hr className="lg:my-10 my-4" />
                        <div className="lg:flex gap-8 lg:w-9/12 w-ful">
                            <div className="lg:w-7/12 w-6/12 flex flex-col gap-10">
                                <MotionP
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: .8, delay: .9 }}
                                    viewport={{
                                        once: true
                                    }}
                                    className="text-gray-500 lg:text-lg">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </MotionP>
                                <MotionDiv

                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: .8, delay: 1.2 }}
                                    viewport={{
                                        once: true
                                    }}
                                    className="lg:mb-10 mb-5">
                                    <Button
                                        target="_parent"
                                        href="/about"
                                        text="Read More" />
                                </MotionDiv>
                            </div>
                            <div

                                className="lg:w-5/12 w-6/12">
                                <MotionDiv
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: .8, delay: 1.5 }}
                                    viewport={{
                                        once: true
                                    }}
                                    className="lg:w-3/12 w-5/12 bg-white absolute lg:bottom-0 bottom-4 lg:right-0 right-4 lg:p-8 p-4">
                                    <div className="w-[4rem] bg-slate-50 h-[4rem] mb-4 rounded-full overflow-hidden">
                                        <Image src='/images/about_2.png' height={100} width={250} alt='about2' />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold lg:text-lg ">Samaksh</h4>
                                        <p className="text-gray-500 lg:text-lg text-sm">Founder</p>
                                    </div>
                                </MotionDiv>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
