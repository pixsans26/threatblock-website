import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./widgets/button_dark";

export default function Hero() {
    return (
        <>
            <section className="w-full relative mx-auto h-auto bg-[#FAF2F2] lg:mb-32 mb-32">
                <div className="w-full lg:absolute mx-auto h-auto ">

                    {/* section bg */}
                    <div className="lg:w-9/12 w-11/12 mx-auto lg:flex justify-between items-center lg:h-[95vh] h-[54rem] lg:py-0 pt-10">
                        <div className="lg:w-7/12 lg:mx-0 mx-auto w-full relative flex flex-col lg:items-start items-center justify-center lg:gap-6 gap-2">
                            {/* Title */}
                            <h1 className="lg:text-6xl text-4xl font-bold lg:w-8/12 w-full lg:text-start text-center">
                                Tailored <span className="text-red-600">Consulting</span> for the Advanced Security
                            </h1>
                            <p className="lg:w-8/12 text-gray-500 lg:text-lg lg:text-start text-center">
                                Transform your business with expert consultancy services our team of seasoned consultants unparalleled.
                            </p>

                            {/* button */}
                            <button className="">
                                <Button href="/contact" text="Free Consultation" />
                            </button>

                            {/* Counter */}
                            <div className="lg:[clip-path:polygon(50px_0,_100%_0,_100%_calc(100%_-_50px),_calc(100%_-_50px)_100%,_0_100%,_0_50px)] 
                            [clip-path:polygon(20px_0,_100%_0,_100%_calc(100%_-_20px),_calc(100%_-_20px)_100%,_0_100%,_0_20px)] lg:h-[22vh] h-[16vh] lg:w-full w-11/12 absolute lg:right-0 lg:bottom-[-18rem] bottom-[-44rem] lg:z-0 z-10">
                                <div className="flex w-full h-full bg-black">
                                    <div className="opacity-20">
                                        <Image src="/images/counter_hero_bg.png" width={1000} height={1000} alt="hero_image_1" className="" />
                                    </div>
                                    <div className="w-full flex h-full justify-between absolute items-center lg:py-12 lg:px-16 px-4 py-8">
                                        <div className="">
                                            <h3 className="lg:text-6xl text-3xl text-white font-bold">50+</h3>
                                            <p className="lg:text-lg text-xs">Engagements</p>
                                        </div>
                                        <div className="border-l border-gray-300 h-20"></div>
                                        <div className="">
                                            <h3 className="lg:text-6xl text-3xl text-white font-bold">12M+</h3>
                                            <p className="lg:text-lg text-xs">Monitered</p>
                                        </div>
                                        <div className="border-l border-gray-300 h-20"></div>
                                        <div className="">
                                            <h3 className="lg:text-6xl text-3xl text-white font-bold">21K+</h3>
                                            <p className="lg:text-lg text-xs">Followers</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="lg:w-5/12 w-full h-full relative">
                            <div className="bottom-0 w-full h-[60vh] flex items-end lg:absolute justify-end">
                                <Image src="/images/hero_image_1.png" width={1000} height={1000} alt="hero_image_1" className="" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="lg:w-full h-[95vh] lg:flex hidden justify-between">
                    <div className="w-8/12 flex bg-red-tint h-full justify-start items-center">
                    </div>
                    <div className="w-4/12 bg-slate-300 h-full overflow-hidden">
                        <Image src="/images/hero_bg_1.png" width={1000} height={1000} alt="hero_image_1" className="object-center" />
                    </div>
                </div>
            </section>
        </>
    );
}