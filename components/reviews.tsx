

import { MotionDiv, MotionH2 } from "@/utils/motioDiv";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";


export default function Reviews() {
    return (
        <>
            <div className="lg:w-9/12 w-11/12 mx-auto lg:flex justify-between items-center gap-10 lg:h-[70vh] h-auto lg:mb-24 mb-20">
                <MotionDiv
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: .8, delay: .8 }}
                    viewport={{
                        once: true
                    }}
                    className="lg:w-5/12 w-full relative lg:mb-0 mb-10">
                    <div

                        className="lg:w-8/12 w-8/12 bg-white absolute top-0 left-0 py-4">
                        <div
                            className="mb-4">
                            <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-2xl text-xs">//clients feedback</span>
                        </div>
                        <h2
                            className="lg:text-4xl text-2xl font-bold">
                            Our Client Testimonial
                        </h2>
                    </div>
                    <div

                        className="overflow-hidden ms-8 mt-8 h-auto">
                        <Image src='/images/review_image.png' width={1000} height={1000} alt="rwview-bg" className="h-auto w-full" />
                    </div>
                </MotionDiv>
                <MotionDiv
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: .8, delay: .8 }}
                    viewport={{
                        once: true
                    }}
                    className="lg:w-7/12 flex flex-col gap-4 lg:h-[70vh] h-auto lg:overflow-y-scroll no-scrollbar">
                    {/* review Card */}

                    <div className="bg-[#FAF2F2] p-6 w-full">
                        <div className="mb-2 flex">
                            <span className="bg-white px-4 py-2 rounded-full flex gap-2 text-red-600">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                            </span>
                        </div>
                        <div className="mb-2">
                            <p className="text-gray-500 lg:text-2xl text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                        </div>
                        <div className="">

                            <div>
                                <div className="">
                                    <h5 className="font-semibold text-lg ">Pixsans</h5>
                                </div>
                                <div>
                                    <span className="text-gray-500">Design & Development Company</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* card2 */}

                    <div className="bg-[#FAF2F2] p-6 w-full">
                        <div className="mb-2 flex">
                            <span className="bg-white px-4 py-2 rounded-full flex gap-2 text-red-600">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                            </span>
                        </div>
                        <div className="mb-2">
                            <p className="text-gray-500 lg:text-2xl text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                        </div>
                        <div className="">

                            <div>
                                <div className="">
                                    <h5 className="font-semibold text-lg ">Name</h5>
                                </div>
                                <div>
                                    <span className="text-gray-500">Designation</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* card3 */}

                    <div className="bg-[#FAF2F2] p-6 w-full">
                        <div className="mb-2 flex">
                            <span className="bg-white px-4 py-2 rounded-full flex gap-2 text-red-600">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                            </span>
                        </div>
                        <div className="mb-2">
                            <p className="text-gray-500 lg:text-2xl text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                        </div>
                        <div className="">

                            <div>
                                <div className="">
                                    <h5 className="font-semibold text-lg ">Name</h5>
                                </div>
                                <div>
                                    <span className="text-gray-500">Designation</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </MotionDiv>
            </div>
        </>
    );
}
