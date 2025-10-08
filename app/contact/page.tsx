import ContactFrom from "@/components/contact-form"
import ContactHero from "@/components/contact_hero"
import Image from "next/image"
import { FaEnvelope } from "react-icons/fa"
import { FaGlobe, FaLocationPin, FaMobile } from "react-icons/fa6"


export default function Contact() {

    return (
        <>
            <ContactHero />
            <section className="w-full lg:h-[60vh] flex mx-auto justify-center items-center text-white lg:mb-24 mb-20 ">
                {/*  */}
                <div className="lg:w-9/12 w-10/12 h-auto lg:flex absolute">
                    <div className="w-full h-full relative lg:flex items-center ">
                        {/* Left Side */}
                        <div className="lg:w-4/12 w-11/12 lg:mx-0 mx-auto h-full">
                            {/* Address */}
                            <div className="lg:w-10/12 w-full h-auto">
                                <h3 className="lg:text-xl font-bold text-white lg:my-10 mb-10">
                                    Contact Details
                                </h3>
                                {/* Address */}
                                <div className="flex flex-col lg:gap-10 gap-4 justify-center lg:item-starts">

                                    <div className="flex justify-start items-start gap-1">
                                        <div className="h-10 w-10 flex justify-center items-center">
                                            <FaLocationPin />
                                        </div>

                                        <div>
                                            Office no. 416, Global Business Hub, Kharadi, Pune, 411014
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex gap-1 justify-start items-center ">
                                        <div className="h-10 w-10 flex justify-center items-center">
                                            <FaEnvelope />
                                        </div>
                                        <div>
                                            <span>user@email.com</span>
                                        </div>
                                    </div>

                                    {/* Website */}
                                    <div className="flex gap-1 justify-start items-center">
                                        <div className="h-10 w-10 flex justify-center items-center">
                                            <FaGlobe />
                                        </div>
                                        <div>
                                            <span>www.threatblock.com</span>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex gap-1 justify-start items-center">
                                        <div className="h-10 w-10 flex justify-center items-center">
                                            <FaMobile />
                                        </div>
                                        <div>
                                            +91 983023204
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side form */}
                        <div className="lg:w-8/12 w-11/12 lg:mx-0 mx-auto lg:absolute right-0 lg:flex hidden">
                            <ContactFrom />
                        </div>
                    </div>
                </div>
                <div className="w-full flex h-auto">
                    <div className="lg:w-5/12">
                        <Image src='/images/contact-details.png' width={1000} height={100} alt='contacr_bg' />
                    </div>
                </div>
            </section >

            {/* Right side form */}
            <div className="w-11/12 lg:mx-0 mx-auto lg:absolute lg:h-[60vh] right-0 lg:hidden flex">
                <ContactFrom />
            </div>
        </>
    )
}
