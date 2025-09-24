import { MotionDiv, MotionH2, MotionP } from "@/utils/motioDiv"
import Image from "next/image"



export default function MethodologyDevSecOps() {
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

                                <div className="flex flex-col mt-5 justify-center items-center">
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
                                        className="text-gray-500 lg:text-xl">
                                        Our OWASP DSOMM-aligned approach ensures security at every SDLC stage:
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
                                <h4 className="text-center  text-lg font-bold mb-4">Scoping & Assessment</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Evaluate current SDLC and security maturity.</li>
                                    <li className="text-gray-500">Define integration points (CI/CD pipelines, repos).</li>

                                </ul>
                            </div>
                        </div>


                        {/* 2nd Step */}

                        <div className="relative w-full flex flex-col">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/2.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Tool Integration</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Deploy SAST, DAST, and dependency scanners.</li>
                                    <li className="text-gray-500">Integrate with tools like Jenkins, GitLab, or GitHub Actions.</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3rd Step */}

                        <div className="relative w-full flex flex-col">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/3.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Secure Coding Practices</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Train developers on OWASP Top 10 and secure coding.</li>
                                    <li className="text-gray-500">Implement code review and threat modeling.</li>
                                </ul>
                            </div>
                        </div>

                        {/* 4th Step */}

                        <div className="relative w-full flex flex-col">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/4.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Continuous Monitoring</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Automate vulnerability scans in CI/CD.</li>
                                    <li className="text-gray-500">Monitor runtime environments for anomalies.</li>
                                </ul>
                            </div>
                        </div>

                        {/* 5th Step */}

                        <div className="relative w-full flex flex-col">
                            <div className="w-full absolute flex justify-center top-[-3rem]">
                                <Image src='/icons/5.svg' height={100} width={100} alt='1' />
                            </div>
                            <div className="border-[1px] border-gray-400 pt-14 justify-start px-8 pb-4 bg-white flex-grow">
                                <h4 className="text-center  text-lg font-bold mb-4">Reporting & Improvement</h4>
                                <ul className="list-disc text-sm space-y-2">
                                    <li className="text-gray-500">Provide dashboards with actionable metrics.</li>
                                    <li className="text-gray-500">Recommend pipeline optimizations and retraining.</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </section >
        </>
    )
}