import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./widgets/button_dark";

export default function Hero() {
    return (
        <>
            <section className="w-full relative mx-auto h-auto bg-[#FAF2F2] lg:mb-32">
                <div className="w-full absolute mx-auto h-auto ">

                    {/* section bg */}
                    <div className="w-9/12 mx-auto flex justify-between items-center h-[95vh] ">

                        <div className="w-7/12 relative flex flex-col items-start justify-center gap-6">
                            {/* Title */}
                            <h1 className="text-6xl font-bold w-8/12">
                                Tailored <span className="text-red-600">Consulting</span> for the Advanced Security
                            </h1>
                            <p className=" w-8/12 text-gray-500 text-lg">
                                Transform your business with expert consultancy services our team of seasoned consultants unparalleled.
                            </p>

                            {/* button */}
                            <button className="">
                                <Button href="/contact" text="Free Consultation" />
                            </button>

                            {/* Counter */}
                            <div className="[clip-path:polygon(50px_0,_100%_0,_100%_calc(100%_-_50px),_calc(100%_-_50px)_100%,_0_100%,_0_50px)] h-[22vh] w-full absolute right-0 bottom-[-20rem]">
                                <div className="flex w-full h-full bg-black">
                                    <div className="opacity-20">
                                        <Image src="/images/counter_hero_bg.png" width={1000} height={1000} alt="hero_image_1" className="" />
                                    </div>
                                    <div className="w-full flex h-full justify-between absolute items-center py-12 px-16">
                                        <div className="">
                                            <h3 className="text-6xl text-white font-bold">50+</h3>
                                            <p>Engagements</p>
                                        </div>
                                        <div className="border-l border-gray-300 h-20"></div>
                                        <div className="">
                                            <h3 className="text-6xl text-white font-bold">12M+</h3>
                                            <p>Monitered</p>
                                        </div>
                                        <div className="border-l border-gray-300 h-20"></div>
                                        <div className="">
                                            <h3 className="text-6xl text-white font-bold">21K+</h3>
                                            <p>Followers</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-5/12 h-full relative">
                            <div className="bottom-0 w-full h-[65vh] flex items-end absolute justify-end">
                                <Image src="/images/hero_image_1.png" width={1000} height={1000} alt="hero_image_1" className="" />
                            </div>
                        </div>


                    </div>

                </div>
                <div className="w-full h-[95vh] flex justify-between">
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