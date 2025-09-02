import { MotionDiv, MotionH2, MotionP } from "@/utils/motioDiv"


export default function WorkProcess() {
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
                        <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-2xl text-xs">// HOW WE WORK</span>
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
                            Our experts dedicate over 10,000 hours every year to staying ahead
                            of emerging cyber threats—so your business never falls behind.
                        </MotionH2>
                        <MotionP
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: .8, delay: .9 }}
                            viewport={{
                                once: true
                            }}
                            className="text-gray-500 lg:text-2xl">
                            Through continuous research, advanced training, and real-world engagements, we ensure your
                            organization benefits from cutting-edge protection and proactive defense strategies.
                        </MotionP>

                    </div>
                </div>
                <div className="lg:w-6/12 w-full lg:flex justify-between lg:gap-10">


                </div>
            </section>
        </>
    )
}