import { MotionDiv, MotionH2, MotionP } from "@/utils/motioDiv"
import Image from "next/image"



export default function MethodologyCloudSecurity() {
    return (
        <>
            <section className="w-full relative lg:mb-28 mb-20 bg-red-50 py-20">
                <div className="lg:w-10/12 w-11/12 mx-auto">
                    <div className="relative mx-auto lg:flex justify-between h-full lg:gap-20 lg:mb-28 mb-20">
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
                                        className="lg:text-4xl text-2xl font-bold w-full text-center">
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
                                        Our CSA CCM-aligned approach ensures comprehensive cloud security
                                    </MotionP>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARDS */}


                    <div className="w-full mx-auto flex lg:flex-row flex-col lg:gap-2 gap-20 items-stretch">

                        {/* First Step */}
                        <div className="relative w-full flex flex-col">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/1.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Scoping & Planning</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Define cloud assets (e.g., EC2, S3, Lambda) and boundaries.</li>
                                    <li className="text-gray-500">Review IAM policies and network configurations.</li>

                                </ul>
                            </div>
                        </div>


                        {/* 2nd Step */}

                        <div className="relative w-full flex flex-col">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/2.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Reconnaissance</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Map cloud resources and access points.</li>
                                    <li className="text-gray-500">Identify exposed services or misconfigurations.</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3rd Step */}

                        <div className="relative w-full h-[">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/3.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Vulnerability Assessment</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Test for weak IAM, unencrypted data, and open ports.</li>
                                    <li className="text-gray-500">Evaluate logging and monitoring gaps.</li>
                                </ul>
                            </div>
                        </div>

                        {/* 4th Step */}

                        <div className="relative w-full flex flex-col">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/4.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Exploitation & Validation</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Simulate attacks like privilege escalation or data exfiltration.</li>
                                    <li className="text-gray-500">Assess resilience against cloud-specific threats.</li>
                                </ul>
                            </div>
                        </div>

                        {/* 5th Step */}

                        <div className="relative w-full flex flex-col">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/5.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Reporting & Remediation:</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Deliver reports with CSA CCM mappings and CVSS scores.</li>
                                    <li className="text-gray-500">Provide hardening recommendations.</li>
                                </ul>
                            </div>
                        </div>


                        {/* 6th Step */}

                        <div className="relative w-full flex flex-col">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/6.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Retesting & Optimization:</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Assist with remediation and re-audits.</li>
                                    <li className="text-gray-500">Validate fixes and suggest monitoring improvements.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </section >
        </>
    )
}