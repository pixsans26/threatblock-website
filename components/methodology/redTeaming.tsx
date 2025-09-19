import { MotionDiv, MotionH2 } from "@/utils/motioDiv"
import Image from "next/image"



export default function MethodologyRedTeaming() {
    return (
        <>
            <section className="w-full relative lg:mb-32 mb-20 bg-red-50 py-20">
                <div className="lg:w-10/12 w-11/12 mx-auto">
                    <div className="relative mx-auto lg:flex justify-between h-full lg:gap-20 lg:mb-32 mb-20">
                        <div className="lg:w-7/12 flex flex-col justify-center items-center mx-auto">
                            <div className="mx-auto flex flex-col items-center">
                                <MotionDiv
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: .8, delay: .3 }}
                                    viewport={{
                                        once: true
                                    }}
                                >
                                    <span className="bg-white text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-2xl text-xs">// END TO END DEFENSE STRATEGY</span>
                                </MotionDiv>

                                <div className="flex gap-5 mt-5 justify-center">
                                    <MotionH2
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, scale: 1, opacity: 1 }}
                                        transition={{ duration: .8, delay: .6 }}
                                        viewport={{
                                            once: true
                                        }}
                                        className="lg:text-4xl text-2xl font-bold w-full">
                                        METHODOLOGY
                                    </MotionH2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARDS */}


                    <div className="w-full mx-auto grid lg:grid-cols-4 grid-cols-1 lg:gap-16 gap-20 items-end">

                        {/* First Step */}
                        <div className="relative w-full ">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/1.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 lg:h-[20rem] pt-14 px-4 pb-4 bg-white flex flex-col items-center justify-center">
                                <h4 className="text-center  text-lg font-bold mb-4">Planning & Rules of Engagement</h4>
                                <p className="text-gray-500 text-center">
                                    Define scope, objectives, and boundaries with clear alignment on what systems and personnel are in-scope or off-limits.
                                </p>
                            </div>
                        </div>


                        {/* 2nd Step */}

                        <div className="relative w-full">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/2.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400  lg:h-[18rem] pt-14 px-4 pb-4 bg-white flex flex-col items-center justify-center">
                                <h4 className="text-center  text-lg font-bold mb-4">Reconnaissance</h4>
                                <p className="text-gray-500 text-center">
                                    Conduct passive and active intelligence gathering to identify targets, entry points, and valuable information (OSINT).
                                </p>
                            </div>
                        </div>

                        {/* 3rd Step */}

                        <div className="relative w-full h-[">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/3.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 lg:h-[20rem] pt-14 flex flex-col items-center justify-center px-4 pb-4 bg-white">
                                <h4 className="text-center  text-lg font-bold mb-4">Initial Access</h4>
                                <p className="text-gray-500 text-center">
                                    Attempt to gain a foothold through phishing, social engineering, web exploitation, or physical intrusion simulation.
                                </p>
                            </div>
                        </div>

                        {/* 4th Step */}

                        <div className="relative w-full">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/4.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400  lg:h-[18rem] pt-14 flex flex-col items-center justify-center px-4 pb-4 bg-white">
                                <h4 className="text-center  text-lg font-bold mb-4">Persistence & Privilege Escalation</h4>
                                <p className="text-gray-500 text-center">
                                    Establish backdoors, escalate privileges, and maintain covert access to simulate long-term threats.
                                </p>
                            </div>
                        </div>

                        {/* 5th Step */}

                        <div className="relative w-full h-[">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/5.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 lg:h-[20rem] pt-14 flex flex-col items-center justify-center px-4 pb-4 bg-white">
                                <h4 className="text-center  text-lg font-bold mb-4">Lateral Movement</h4>
                                <p className="text-gray-500 text-center">
                                    Explore the network to move between systems, escalate control, and reach critical assets or business functions.
                                </p>
                            </div>
                        </div>


                        {/* 6th Step */}

                        <div className="relative w-full">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/6.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400  lg:h-[18rem] pt-14 flex flex-col items-center justify-center px-4 pb-4 bg-white">
                                <h4 className="text-center  text-lg font-bold mb-4">Objective Execution</h4>
                                <p className="text-gray-500 text-center">
                                    Achieve agreed-upon goals (e.g., exfiltration of sensitive data, domain control) without alerting defenders.
                                </p>
                            </div>
                        </div>

                        {/* 7th Step */}

                        <div className="relative w-full">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/7.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400  lg:h-[20rem] pt-14 flex flex-col items-center justify-center px-4 pb-4 bg-white">
                                <h4 className="text-center  text-lg font-bold mb-4">Detection & Response Assessment </h4>
                                <p className="text-gray-500 text-center">
                                    Monitor how internal teams detect and respond to the simulated attack in real time.
                                </p>
                            </div>
                        </div>

                        {/* 8th Step */}

                        <div className="relative w-full">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/8.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400  lg:h-[18rem] pt-14 flex flex-col items-center justify-center px-4 pb-4 bg-white">
                                <h4 className="text-center  text-lg font-bold mb-4">Debrief & Analysis </h4>
                                <p className="text-gray-500 text-center">
                                    Review what was detected vs. missed and assess the effectiveness of the organization’s response.
                                </p>
                            </div>
                        </div>


                    </div>





                </div>

            </section >
        </>
    )
}