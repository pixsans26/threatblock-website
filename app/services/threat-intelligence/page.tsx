'use client'

import { MotionDiv, MotionH1, MotionH2, MotionP, fadeInLeft, fadeInUp } from "@/utils/motioDiv"
import Image from "next/image"
import { WhyImportance, GrowBusiness, OurServices, Faqs } from '@/data/threatIntelligence'
import { useState } from 'react';
// Using more intuitive icons for open/close states
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import ButtonDark from "@/components/widgets/button_dark";
import Industries from "@/components/industries";
import MethodologyThreatIntelligence from "@/components/methodology/threatIntelligence";



export default function ThreatIntelligence() {

    // State to track the ID of the currently open FAQ item
    const [openId, setOpenId] = useState(null);

    // Function to toggle the open state
    const toggleFaq = (id: any) => {
        // If the clicked FAQ is already open, close it (set state to null).
        // Otherwise, open the clicked one.
        setOpenId(openId === id ? null : id);
    };

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
                                className="w-10/12 lg:text-6xl text-3xl font-bold lg:text-white text-zinc-900">
                                Threat Intelligence
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
                                <Image src='/images/services/threat-intelligence.svg' height={100} width={1000} alt="about" />
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
                    className="w-full lg:text-6xl text-3xl font-bold lg:text-white text-zinc-900">
                    Threat Intelligence
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
                            Leverage Threat Intelligence: Stay Ahead of Emerging Threats
                        </MotionH2>
                        <MotionP
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .6 }}
                            viewport={{
                                once: true
                            }}
                            className="text-gray-500 lg:text-2xl text-lg">Threat Intelligence provides actionable insights into adversaries, vulnerabilities, and attack trends, enabling proactive defense against cyber threats. Our service empowers organizations to anticipate and neutralize risks before they materialize.
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
                        <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-2xl text-xs">//Importance</span>
                    </MotionDiv>
                    <MotionH2
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: .8, delay: .8 }}
                        viewport={{
                            once: true
                        }}
                        className="lg:text-4xl text-xl font-bold w-full">
                        Why is Threat Intelligence Important?
                    </MotionH2>
                    <MotionP
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: .8, delay: 1 }}
                        viewport={{
                            once: true
                        }}
                        className="text-gray-500 lg:text-2xl text-lg mb-2">With cyber attacks costing businesses an average of $4.9 million per breach, staying ahead of threats like ransomware, APTs, and zero-days is critical. Threat Intelligence helps you:</MotionP>

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
                                    <h4 className="lg:text-2xl text-xl font-semibold">{curElm.title}</h4>
                                    <p className="text-gray-500 lg:text-xl text-[1.1rem] mb-2">{curElm.description}</p>
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
                                    <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-2xl text-xs">// GROWTH</span>
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
                                <div className='border-[1px] border-gray-300 p-2 min-w-sm space-y-6 bg-whiteflex flex-grow'>
                                    <div className="p-4 flex-col gap-2 bg-gradient-to-b from-white to-[#fff6f6] overflow-hidden flex flex-grow">
                                        {/* Title */}
                                        <h3 className="lg:text-2xl text-xl font-semibold text-black">
                                            {curElm.title}
                                        </h3>
                                        {/* Description */}
                                        <p className="text-gray-500 lg:text-xl text-[1.1rem] mb-2">
                                            {curElm.description}
                                        </p>
                                    </div>
                                </div>
                            </MotionDiv>
                        ))}

                    </div>

                </div>

            </section >

            <MethodologyThreatIntelligence />




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
                            className="text-gray-500 lg:text-2xl text-lg mb-5">Our analysts, leveraging MITRE ATT&CK expertise, have helped enterprises reduce threat exposure by 80% on average.
                        </MotionP>

                    </div>
                </div>
            </section>



            {/* FAQs */}
            <section className="w-full bg-red-50 lg:py-0 py-20 lg:mb-24 mb-20 flex flex-col justify-center items-center overflow-hidden">

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
                            <span className="bg-white text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-2xl text-xs">// FAQs</span>
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
                        {Faqs.map((curElm: any, index: number) => {
                            // Check if the current item is the one that's open
                            const isOpen = curElm.id === openId;

                            return (
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

                                    className="w-full">
                                    <div className='border border-gray-300 p-2 min-w-sm bg-white'>
                                        <div className="p-4 flex flex-col gap-2 bg-gradient-to-b from-white to-[#fff6f6]">
                                            {/* Question section - now clickable to toggle */}
                                            <div
                                                className="flex justify-between items-center cursor-pointer"
                                                onClick={() => toggleFaq(curElm.id)}
                                            >
                                                <h3 className="lg:text-xl  font-bold text-black">
                                                    {curElm.question}
                                                </h3>
                                                {/* Change icon based on the 'isOpen' state */}
                                                <span>
                                                    {isOpen ? <BiChevronUp size={28} /> : <BiChevronDown size={28} />}
                                                </span>
                                            </div>

                                            {/* Answer section with smooth transition */}
                                            <div
                                                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                                    }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <p className="lg:text-lg text-gray-500 pt-4">
                                                        {curElm.answers}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </MotionDiv>
                            );
                        })}
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
                        <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-2xl text-xs">//Services</span>
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
                        className="text-gray-500 lg:text-2xl text-lg mb-2">Pair with:</MotionP>

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
                                    <h4 className="lg:text-2xl text-xl font-semibold">{curElm.title}</h4>
                                    <p className="text-gray-500 lg:text-xl text-[1.1rem] mb-2">{curElm.description}</p>
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
                                    Let’s Red Team Your Defenses
                                </h3>
                                <p className="text-gray-500 lg:text-xl text-lg mb-10">Download “Red Teaming Guide” or consult.</p>
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