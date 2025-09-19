import { MotionDiv, MotionH2, MotionP } from "@/utils/motioDiv"
import Image from "next/image"



export default function MethodologyPenetrationTesting() {
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

                                <div className="flex flex-col mt-5 justify-center">
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
                                    <MotionP
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, scale: 1, opacity: 1 }}
                                        transition={{ duration: .8, delay: .9 }}
                                        viewport={{
                                            once: true
                                        }}
                                        className="text-gray-500 ">
                                        Our NIST-aligned approach ensures thorough testing
                                    </MotionP>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARDS */}


                    <div className="w-full mx-auto grid lg:grid-cols-6 grid-cols-1 lg:gap-2 gap-20 items-end">

                        {/* First Step */}
                        <div className="relative w-full">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/1.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 lg:h-[18rem] pt-14 justify-start px-4 pb-4 bg-white">
                                <h4 className="text-center  text-lg font-bold mb-4">Scoping & Planning</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Define scope (networks, apps, cloud) and rules.</li>
                                    <li className="text-gray-500">Identify critical assets and attack surfaces.</li>

                                </ul>
                            </div>
                        </div>


                        {/* 2nd Step */}

                        <div className="relative w-full">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/2.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400  lg:h-[16rem] pt-14 justify-start px-4 pb-4 bg-white">
                                <h4 className="text-center  text-lg font-bold mb-4">Reconnaissance</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Enumerate systems, services, and endpoints.</li>
                                    <li className="text-gray-500">Gather OSINT and map topologies.</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3rd Step */}

                        <div className="relative w-full h-[">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/3.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 lg:h-[18rem] pt-14 justify-start px-4 pb-4 bg-white">
                                <h4 className="text-center  text-lg font-bold mb-4">Vulnerability Assessment</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Scan for weaknesses using tools like Nessus or Burp Suite.</li>
                                    <li className="text-gray-500">Test for OWASP Top 10, misconfigurations, and exploits.</li>
                                </ul>
                            </div>
                        </div>

                        {/* 4th Step */}

                        <div className="relative w-full">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/4.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400  lg:h-[16rem] pt-14 justify-start px-4 pb-4 bg-white">
                                <h4 className="text-center  text-lg font-bold mb-4">Exploitation</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Simulate attacks like SQL injection or privilege escalation</li>
                                    <li className="text-gray-500">Validate findings with controlled exploits.</li>
                                </ul>
                            </div>
                        </div>

                        {/* 5th Step */}

                        <div className="relative w-full h-[">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/5.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 lg:h-[18rem] pt-14 justify-start px-4 pb-4 bg-white">
                                <h4 className="text-center  text-lg font-bold mb-4">Reporting</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Provide executive and technical reports with CVSS scores.</li>
                                    <li className="text-gray-500">Map to NIST and OWASP standards.</li>


                                </ul>
                            </div>
                        </div>


                        {/* 6th Step */}

                        <div className="relative w-full">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/6.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400  lg:h-[16rem] pt-14 justify-start px-4 pb-4 bg-white">
                                <h4 className="text-center  text-lg font-bold mb-4">Retesting & Training</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">erify fixes and train teams on secure practices.</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </section >
        </>
    )
}