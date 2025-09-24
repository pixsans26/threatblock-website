import { MotionDiv, MotionH2, MotionP } from "@/utils/motioDiv";
import Image from "next/image";


export default function TrustedBadges() {
    return (
        <>

            <section className="lg:w-9/12 w-11/12 mx-auto lg:flex justify-between items-center h-auto pt-10 lg:gap-20 mb-10">
                <div className="lg:w-6/12 w-full lg:flex-col flex-row lg:flex gap-2">
                    <MotionDiv
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, scale: 1, opacity: 1 }}
                        transition={{ duration: .8, delay: .3 }}
                        viewport={{
                            once: true
                        }}
                        className="mb-4">
                        <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-2xl text-xs">//BADGES</span>
                    </MotionDiv>
                    <div className="lg:flex lg:flex-col gap-8 lg:w-full">
                        <MotionH2
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .6 }}
                            viewport={{
                                once: true
                            }}
                            className="lg:text-4xl text-2xl font-bold w-full">
                            Globally Trusted, Industry-Driven Security Credentials
                        </MotionH2>
                        <MotionP
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .9 }}
                            viewport={{
                                once: true
                            }}
                            className="text-gray-500 lg:text-2xl ">
                            Backed by globally recognized certifications in web, wireless, infrastructure, and red team operations,
                            our team combines technical mastery with real-world experience. These credentials assure our clients
                            that every assessment, strategy, and remediation step we deliver meets the highest international
                            security standards.
                        </MotionP>
                    </div>
                </div>
                <MotionDiv
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: .8, delay: .8 }}
                    viewport={{
                        once: true
                    }}
                    className="lg:w-4/12 w-full flex items-center md:order-first order-last">
                    <Image src="/images/cyber_badges.png" width={1000} height={1000} alt="hero_image_1" className="" />
                </MotionDiv>
            </section>


        </>
    );
}
