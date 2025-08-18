import ContactHero from "@/components/contact_hero"
import Image from "next/image"
import { FaEnvelope } from "react-icons/fa"
import { FaGlobe, FaLocationPin, FaMobile } from "react-icons/fa6"


export default function Contact() {

    return (
        <>
            <ContactHero />
            <section className="w-full h-[60vh] flex mx-auto justify-center items-center text-white">
                {/*  */}
                <div className="w-9/12 h-auto flex mx-auto absolute">
                    <div className="w-full relative flex items-center">
                        {/* Left Side */}
                        <div className="w-4/12">
                            {/* Address */}
                            <div className="w-10/12 ">
                                <h3 className="text-2xl font-bold text-white my-10">
                                    Contact Us
                                </h3>
                                {/* Address */}
                                <div className="flex flex-col gap-10 justify-center item-starts">

                                    <div className="flex justify-start items-start">
                                        <FaLocationPin />
                                        <div>
                                            Office no. 416, Global Business Hub, Kharadi, Pune, 411014
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex gap-1 justify-start items-center ">
                                        <div>
                                            <FaEnvelope />
                                        </div>
                                        <div>
                                            <span>user@email.com</span>
                                        </div>
                                    </div>

                                    {/* Website */}
                                    <div className="flex gap-1 justify-start items-center">
                                        <div>
                                            <FaGlobe />
                                        </div>
                                        <div>
                                            <span>www.threatblock.com</span>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex gap-1 justify-start items-center">
                                        <FaMobile />
                                        <div>
                                            +91 983023204
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side form */}
                        <div className="w-8/12 absolute h-[60vh] right-0">
                            <div className=' w-full border-[1px] h-[60vh]  border-gray-300  p-2  bg-white mb-10'>
                                <div className="p-4 flex justify-between bg-gradient-to-b from-white to-[#fff6f6] overflow-hidden text-black">
                                    form
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex">
                    <div className="w-5/12">
                        <Image src='/images/contact-details.png' width={1000} height={100} alt='contacr_bg' />
                    </div>
                </div>
            </section >
        </>
    )
}
