

import { MotionDiv, MotionH1, MotionH2, MotionP, fadeInLeft, fadeInUp } from "@/utils/motioDiv"
import Image from "next/image"
import { WhyImportance, GrowBusiness, OurServices, Faqs, WhatWeDo } from '@/data/auditCompliance'
import ButtonDark from "@/components/widgets/button_dark";
import Industries from "@/components/industries";
import MethodologyAuditCompliance from "@/components/methodology/auditCompliance";

import { Metadata } from 'next';
import Accordion from "@/components/accordian";

export const metadata: Metadata = {
    title: 'Cybersecurity Audit & Compliance Services | ThreatBlock',
    description: 'Achieve and maintain compliance with standards like PCI, HIPAA, and ISO 27001. Our audit services identify gaps and provide a clear roadmap to certification.',
    keywords: 'cybersecurity audit, compliance services, iso 27001, pci compliance, hipaa compliance, security risk assessment'
};


export default function SecurityAuditCompliance() {


    return (
        <>
            <section className="w-full mx-auto flex justify-center lg:h-[90vh] lg:mb-24 mb-20">
                <div className="w-full lg:h-[90vh] flex">
                    <div className="absolute w-full h-[80vh] z-0 overflow-hidden">
                        <Image src='/images/services/bg.png' height={1000} width={10000} alt="about w-full" />
                    </div>
                    <div className="lg:w-9/12 w-11/12 lg:flex lg:h-[auto] h-[30vh] justify-around items-center mx-auto z-10 relative gap-10">
                        <div className="w-6/12 lg:flex hidden flex-col gap-10 justify-start ">
                            {/* Title */}
                            <MotionH1
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: .8, delay: .3 }}
                                viewport={{
                                    once: true
                                }}
                                className="w-10/12 lg:text-5xl text-3xl font-bold lg:text-white text-zinc-900">
                                Audits and Compliance
                            </MotionH1>
                        </div>
                        <div className="lg:w-6/12 w-full lg:h-[90vh] h-[35vh] lg:mx-0 relative">
                            <MotionDiv
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .8, delay: .3 }}
                                viewport={{
                                    once: true
                                }}
                                className="lg:w-full w-8/12 absolute right-0 bottom-0">
                                <Image src='/images/services/audit-compliance.svg' height={100} width={1000} alt="about" />
                            </MotionDiv>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-11/12 lg:hidden flex flex-col lg:gap-10 gap-5 justify-start mx-auto mb-20">
                {/* Title */}
                <MotionH1
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: .8, delay: .3 }}
                    viewport={{
                        once: true
                    }}
                    className="w-full lg:text-5xl text-3xl font-bold lg:text-white text-zinc-900">
                    Audits and Compliance
                </MotionH1>
            </section>

            <section className="w-full relative mx-auto flex">
                <div className="w-full lg:flex hidden absolute top-[-8rem] justify-end">
                    <div className="w-4/12 flex justify-end item-start">
                        <Image src='/images/services/side-logo.svg' width={300} height={100} alt="sidelogo" />
                    </div>
                </div>
                <div className="lg:w-9/12 w-11/12 mx-auto flex justify-between items-center gap-10 mb-20">


                    <div className="lg:w-8/12 flex flex-col gap-2">

                        <MotionH2
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .3 }}
                            viewport={{
                                once: true
                            }}
                            className="lg:text-4xl text-xl font-bold w-full">
                            Achieve Audits and Compliance: Build Trust with Proven Security Standards
                        </MotionH2>
                        <MotionP
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .6 }}
                            viewport={{
                                once: true
                            }}
                            className="text-gray-700 lg:text-xl text-lg">Audits and Compliance services ensure your organization meets stringent regulatory and industry standards, safeguarding your reputation and operations. Our service validates your security posture against frameworks like GDPR, PCI-DSS, and ISO 27001, preventing costly penalties averaging $4.5 million per nonTAGS:non-compliance incident.

                        </MotionP>

                    </div>
                </div>


            </section>


            <section className="lg:w-9/12 w-11/12 mx-auto flex lg:flex-row flex-col justify-between items-center gap-10 lg:mb-24 mb-20">

                <MotionDiv
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: .8, delay: .6 }}
                    viewport={{
                        once: true
                    }}
                    className="lg:w-5/12 w-8/12 flex justify-start items-center">
                    <Image src='/images/services/why.png' height={100} width={400} alt="11" />
                </MotionDiv>

                <div className="lg:w-7/12 flex flex-col gap-2 items-start justify-start">
                    <MotionDiv
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, scale: 1, opacity: 1 }}
                        transition={{ duration: .8, delay: .6 }}
                        viewport={{
                            once: true
                        }}
                        className="lg:mb-4 mb-2">
                        <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-xl text-xs">//Importance</span>
                    </MotionDiv>
                    <MotionH2
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: .8, delay: .8 }}
                        viewport={{
                            once: true
                        }}
                        className="lg:text-4xl text-xl font-bold w-full">
                        Why Are Audits and Compliance Important?
                    </MotionH2>
                    <MotionP
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: .8, delay: 1 }}
                        viewport={{
                            once: true
                        }}
                        className="text-gray-700 lg:text-xl text-lg mb-2">Regulatory non-compliance can lead to fines, legal action, and reputational damage. With data breaches amplifying scrutiny, audits are critical to:</MotionP>

                    <div className="w-full gap-2">
                        {WhyImportance.map((curElm: any, index: number) => (
                            <MotionDiv
                                variants={fadeInLeft}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{
                                    once: true
                                }}
                                tabIndex={curElm.id}
                                custom={index}
                                key={curElm.id}
                                className="flex gap-4 justify-start mb-4">
                                <div className="flex justify-start items-start pt-2">
                                    <Image src='/icons/bullet-hexagon.svg' height={40} width={40} alt="bullet" />
                                </div>
                                <div className="w-11/12 flex flex-col justify-start items-start">
                                    <h4 className="lg:text-xl text-xl font-semibold">{curElm.title}</h4>
                                    <p className="text-gray-700 lg:text-xl text-[1.1rem] mb-2">{curElm.description}</p>
                                </div>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grow Business */}

            <section className="w-full relative lg:mb-0 mb-20">
                <div className="lg:w-9/12 w-11/12 mx-auto">
                    <div className="relative mx-auto lg:flex justify-between h-full lg:gap-20 mb-10">
                        <div className="lg:w-6/12 flex flex-col justify-center">
                            <div className="">
                                <MotionDiv
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: .8, delay: .3 }}
                                    viewport={{
                                        once: true
                                    }}
                                >
                                    <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-xl text-xs">// GROWTH</span>
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
                                        Benefits for Your Business:
                                    </MotionH2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARDS */}


                    <div className="w-full mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 mb-40">


                        {/* Card */}

                        {GrowBusiness.map((curElm: any, index: number) => (
                            <MotionDiv

                                variants={fadeInUp}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{
                                    once: true
                                }}
                                tabIndex={curElm.id}
                                custom={index}
                                key={curElm.id}
                                className="w-full flex flex-grow">
                                <div className='border-[1px] border-gray-300 p-2 min-w-sm space-y-6  bg-white flex flex-grow'>
                                    <div className="p-4 flex flex-col gap-2 bg-gradient-to-b from-white to-[#fff6f6] overflow-hidden flex-grow">
                                        {/* Title */}
                                        <h3 className="lg:text-xl text-xl font-semibold text-black">
                                            {curElm.title}
                                        </h3>
                                        {/* Description */}
                                        <p className="text-gray-700 lg:text-xl text-[1.1rem] mb-2">
                                            {curElm.description}
                                        </p>
                                    </div>
                                </div>
                            </MotionDiv>
                        ))}

                    </div>

                </div>

            </section >

            <MethodologyAuditCompliance />
            {/* What we do */}


            <section className="w-full lg:mb-24 mb-20">
                <div className="lg:w-9/12 w-11/12 mx-auto">
                    <div className="lg:w-6/12 flex flex-col justify-center items-center mx-auto space-y-4 lg:mb-16 mb-10">

                        <MotionDiv
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .3 }}
                            viewport={{
                                once: true
                            }}
                        >
                            <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-xl text-xs">// WHAT WE DO</span>
                        </MotionDiv>


                        <MotionH2
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .6 }}
                            viewport={{
                                once: true
                            }}
                            className="lg:text-4xl text-2xl font-bold w-full text-center">
                            API Security Testing – Coverage
                        </MotionH2>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">

                        {/* points coverage */}
                        {WhatWeDo.map((curElm: any, index: number) => (
                            <MotionDiv

                                variants={fadeInUp}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{
                                    once: true
                                }}
                                tabIndex={curElm.id}
                                custom={index}
                                key={curElm.id}

                                className="w-full flex justify-start gap-4">
                                <div className="flex justify-center items-start pt-2">
                                    <Image src='/icons/check-hexagon.svg' height={40} width={100} alt="check" />
                                </div>
                                <div className="lg:w-10/12 w-11/12 flex flex-col justify-start">
                                    <h4 className="lg:text-xl text-xl font-semibold">{curElm.title}</h4>
                                    <p className="text-gray-700 lg:text-xl text-[1.1rem] mb-2">{curElm.description}</p>
                                </div>
                            </MotionDiv>
                        ))}


                    </div>
                </div>
            </section>


            {/* Why Choose */}

            <section className="w-full lg:mb-24 mb-20">
                <div className="lg:w-9/12 w-11/12 mx-auto mb-10 lg:flex justify-center items-center gap-10">
                    <MotionDiv
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: .8, delay: .3 }}
                        viewport={{
                            once: true
                        }}
                        className="lg:w-6/12 w-full flex justify-end">
                        <Image src='/images/services/why2.png' width={500} height={100} alt="why2" />
                    </MotionDiv>
                    <div className="lg:w-6/12 w-full lg:order-first">
                        <MotionH2
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .8, delay: .3 }}
                            viewport={{
                                once: true
                            }}
                            className="lg:text-4xl text-xl font-bold w-full mb-2">
                            Why Choose ThreatBlock?
                        </MotionH2>
                        <MotionP
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .8, delay: .6 }}
                            viewport={{
                                once: true
                            }}
                            className="text-gray-700 lg:text-xl text-lg mb-5">Our certified auditors have helped global enterprises achieve 100% audit success rates, reducing compliance risks by 80% on average.
                        </MotionP>

                    </div>
                </div>
            </section>



            {/* FAQs */}
            <section className="w-full bg-red-50 lg:h-[120vh] lg:py-0 py-20 lg:mb-24 mb-20 flex flex-col justify-center items-center overflow-hidden">

                <div className="lg:w-7/12 w-11/12 lg:absolute mx-auto">
                    <div className="lg:w-6/12 flex flex-col justify-center items-center mx-auto space-y-4 mb-10">

                        <MotionDiv
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .3 }}
                            viewport={{
                                once: true
                            }}
                        >
                            <span className="bg-white text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-xl text-xs">// FAQs</span>
                        </MotionDiv>


                        <MotionH2
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .6 }}
                            viewport={{
                                once: true
                            }}
                            className="lg:text-4xl text-2xl font-bold w-full text-center">
                            Frequently Asked Questions
                        </MotionH2>
                    </div>
                    <div className="flex flex-col gap-5 justify-start items-center">
                        <Accordion items={Faqs} />
                    </div>
                </div>

                <div className="w-full top-0 mx-auto lg:flex hidden justify-center ">
                    <Image src='/images/services/faq-bg.svg' height={100} width={2000} alt='bg' className="object-cover" />
                </div>
            </section>




            {/* Services */}

            <section className="lg:w-9/12 w-11/12 mx-auto flex lg:flex-row flex-col justify-between items-center gap-10 lg:mb-24 mb-20">
                <div className="lg:w-6/12 flex flex-col gap-2 items-start justify-start">
                    <MotionDiv
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, scale: 1, opacity: 1 }}
                        transition={{ duration: .8, delay: .3 }}
                        viewport={{
                            once: true
                        }}
                        className="lg:mb-4 mb-2">
                        <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-xl text-xs">//Services</span>
                    </MotionDiv>
                    <MotionH2
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, scale: 1, opacity: 1 }}
                        transition={{ duration: .8, delay: .5 }}
                        viewport={{
                            once: true
                        }}
                        className="lg:text-4xl text-2xl font-bold w-full">
                        Integrate with Our Services
                    </MotionH2>
                    <MotionP
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, scale: 1, opacity: 1 }}
                        transition={{ duration: .8, delay: .7 }}
                        viewport={{
                            once: true
                        }}
                        className="text-gray-700 lg:text-xl text-lg mb-2">Combine with:</MotionP>

                    <div className="w-full gap-2">
                        {OurServices.map((curElm: any, index: any) => (
                            <MotionDiv

                                variants={fadeInLeft}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{
                                    once: true
                                }}
                                tabIndex={curElm.id}
                                custom={index}
                                key={curElm.id}
                                className="flex gap-2 justify-start mb-4">
                                <div className="flex justify-start items-start pt-2">
                                    <Image src='/icons/bullet-hexagon.svg' height={40} width={40} alt="bullet" />
                                </div>
                                <div className="w-11/12 flex flex-col justify-start items-start">
                                    <h4 className="lg:text-xl text-xl font-semibold">{curElm.title}</h4>
                                    <p className="text-gray-700 lg:text-xl text-[1.1rem] mb-2">{curElm.description}</p>
                                </div>
                            </MotionDiv>
                        ))}
                    </div>
                </div>

                <MotionDiv
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: .8, delay: .3 }}
                    viewport={{
                        once: true
                    }}
                    className="lg:w-6/12 w-full flex justify-start items-center lg:order-first">
                    <Image src='/images/services/services.svg' height={100} width={400} alt="11" />
                </MotionDiv>
            </section>


            {/* Contact Card */}
            <section className="lg:w-7/12 w-11/12 mx-auto flex lg:flex-row flex-col justify-between items-center gap-10 lg:mb-28 mb-20">

                <div className="w-full">
                    <MotionDiv
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, scale: 1, opacity: 1 }}
                        transition={{ duration: .8, delay: .3 }}
                        viewport={{
                            once: true
                        }}
                        className='border border-gray-300 p-2 min-w-sm bg-white'>
                        <div className="p-4 lg:flex gap-2 bg-gradient-to-b from-white to-[#fff6f6]">
                            <div className="lg:w-8/12 flex flex-col lg:justify-center lg:items-start items-center lg:mb-0 mb-10">
                                <h3 className="text-2xl font-bold text-black mb-5">
                                    Let’s Secure Your Web Apps Together
                                </h3>
                                <p className="text-gray-700 lg:text-xl text-lg mb-10">Download our “Web Security Checklist” or schedule a consultation.</p>
                                <ButtonDark href="/contact" text="Schedule a Free Consultation" target="_parent" />
                            </div>
                            <div className="lg:w-4/12 w-11/12 flex lg:justify-end justify-center lg:mb-0 mb-10 lg:mx-0 mx-auto">
                                <Image src='/images/services/contact-image.svg' width={300} height={100} alt="contact" />
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </section>

            {/* Industries */}
            <Industries />
        </>

    )
}