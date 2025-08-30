
import { MotionDiv, MotionH2, MotionP } from "@/utils/motioDiv";
import Image from "next/image";


export default function Values() {
    return (
        <>


            <section className="lg:w-9/12 w-11/12 mx-auto lg:flex justify-between h-auto  gap-20 mb-28 z-10">
                <div className="lg:w-6/12 w-full flex-col flex gap-2 lg:mb-0 mb-10">
                    <MotionDiv
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, scale: 1, opacity: 1 }}
                        transition={{ duration: .8, delay: .3 }}
                        viewport={{
                            once: true
                        }} className="lg:mb-4 mb-2">
                        <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-lg text-xs">//values</span>
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
                            Our Core Values
                        </MotionH2>
                        <MotionP
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .9 }}
                            viewport={{
                                once: true
                            }}
                            className="text-gray-500 lg:text-lg">
                            Founded in 2025, ThreatBlock is a dynamic cybersecurity startup built on over a decade of
                            combined industry expertise. Our mission is to protect businesses of all sizes—enterprises,
                            SMBs, and startups—against evolving cyber threats with precision and proactivity. In just a
                            short span, we have successfully delivered 10+ security engagements, safeguarding millions
                            of digital assets and critical infrastructures across diverse sectors
                        </MotionP>
                        <MotionP
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: 1.2 }}
                            viewport={{
                                once: true
                            }}
                            className="text-gray-500 lg:text-lg">
                            Our team comprises certified professionals specializing in penetration testing, red teaming,
                            web and mobile application security, and advanced threat intelligence. We follow a results-
                            driven approach—aligning cutting-edge methodologies with industry best practices like ISO
                            27001 and OWASP standards. Beyond technical excellence, we believe in transparency,
                            continuous collaboration, and empowering our clients with actionable insights to strengthen
                            their cyber resilience.
                        </MotionP>

                        <MotionP
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: 1.5 }}
                            viewport={{
                                once: true
                            }}
                            className="text-gray-500 lg:text-lg">
                            While ThreatBlock is a young company, our foundation is rooted in innovation and trust, with
                            partnerships and initiatives supported by programs like Startup India, Zoho Startups, AWS
                            Startups, and MSME India. We are committed to building a safer digital future—one
                            organization at a time."
                        </MotionP>


                    </div>
                </div>
                <div className="lg:w-6/12 w-full lg:flex justify-between lg:gap-10">
                    <div className="lg:w-6/12 lg:flex-col lg:flex lg:gap-10">
                        {/* card */}
                        <MotionDiv
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .3 }}
                            viewport={{
                                once: true
                            }}
                            className="w-full h-auto lg:p-8 p-4 bg-gradient-to-b from-white to-[#fff6f6] lg:mb-0 mb-5">
                            <div className="flex justify-center item center mb-4">
                                <Image src='/values/core-values.svg' height={100} width={100} alt="values" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h4 className="font-semibold text-lg mb-2">Integrity</h4>
                                <p className="text-sm text-gray-500 text-center">
                                    We operate with complete honesty and transparency, ensuring our clients always know exactly
                                    what we’re doing, why we’re doing it, and how it benefits them.
                                </p>
                            </div>
                        </MotionDiv>
                        {/* card */}
                        <MotionDiv
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .9 }}
                            viewport={{
                                once: true
                            }}
                            className="w-full h-auto p-8 bg-gradient-to-b from-white to-[#fff6f6] lg:mb-0 mb-5">
                            <div className="flex justify-center item center mb-4">
                                <Image src='/values/core-values.svg' height={100} width={100} alt="values" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h4 className="font-semibold text-lg mb-2">Expertise</h4>
                                <p className="text-sm text-gray-500 text-center">
                                    Our team continuously sharpens its skills through<span className="font-semibold text-black"> real-world engagements, research, and
                                        certifications</span>, allowing us to stay ahead of rapidly evolving threats
                                </p>
                            </div>
                        </MotionDiv>
                    </div>
                    <div className="lg:w-6/12 flex flex-col lg:mt-20 lg:gap-10">
                        {/* card */}
                        <MotionDiv
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .6 }}
                            viewport={{
                                once: true
                            }} className="w-full h-auto p-8 bg-gradient-to-b from-white to-[#fff6f6] lg:mb-0 mb-5">
                            <div className="flex justify-center item center mb-4">
                                <Image src='/values/core-values.svg' height={100} width={100} alt="values" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h4 className="font-semibold text-lg mb-2">Collaboration</h4>
                                <p className="text-sm text-gray-500 text-center">
                                    We believe the best defense is built together. Our engagements are <span className="font-semibold text-black"> partnerships, not transactions </span>—we work hand-in-hand with your teams to design and implement practical security.
                                </p>
                            </div>
                        </MotionDiv>

                        {/* card */}
                        <MotionDiv
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: 1.2 }}
                            viewport={{
                                once: true
                            }}
                            className="w-full h-auto p-8 bg-gradient-to-b from-white to-[#fff6f6] lg:mb-0 mb-5">
                            <div className="flex justify-center item center mb-4">
                                <Image src='/values/core-values.svg' height={100} width={100} alt="values" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h4 className="font-semibold text-lg mb-2">Innovation</h4>
                                <p className="text-sm text-gray-500 text-center">
                                    Cybersecurity is never static. We embrace <span className="font-semibold text-black">creative thinking and emerging technologies</span> to transform your defenses from reactive shields into proactive, predictive systems.
                                </p>
                            </div>
                        </MotionDiv>
                    </div>
                </div>
            </section>

        </>
    );
}
