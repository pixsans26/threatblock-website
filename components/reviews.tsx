

import Image from "next/image";
import { FaStar } from "react-icons/fa6";


export default function Reviews() {
    return (
        <>
            <div className="w-9/12 mx-auto flex justify-between items-center gap-10 h-[70vh] mb-40">
                <div className="w-5/12 relative">
                    <div className="w-8/12 bg-white absolute top-0 left-0 py-4">
                        <div className="mb-4">
                            <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto">//clients feedback</span>
                        </div>
                        <h2 className="text-4xl font-bold w-6/12">
                            Our Client Testimonial
                        </h2>
                    </div>
                    <div className="overflow-hidden ms-8 mt-8 h-auto">
                        <Image src='/images/review_image.png' width={1000} height={1000} alt="rwview-bg" className="h-auto w-full" />
                    </div>

                </div>
                <div className="w-7/12 flex flex-col gap-4 h-[70vh] overflow-y-scroll">
                    {/* review Card */}

                    <div className="bg-[#FAF2F2] p-6 w-full">
                        <div className="mb-2 flex">
                            <span className="bg-white px-4 py-2 rounded-full flex gap-2 text-red-600">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                            </span>
                        </div>
                        <div className="mb-2">
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                        </div>
                        <div className="">
                            <div className="rounded-full w-[6rem] h-[6rem] flex justify-center items-center overflow-hidden mb-2">
                                <Image src='/images/review_image.png' width={100} height={100} alt="rwview-bg" className="w-[6rem] h-[6rem] object-cover " />
                            </div>
                            <div>
                                <div className="">
                                    <h5 className="font-semibold text-lg ">NAme</h5>
                                </div>
                                <div>
                                    <span className="text-gray-500">Designation</span>
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
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                        </div>
                        <div className="">
                            <div className="rounded-full w-[6rem] h-[6rem] flex justify-center items-center overflow-hidden mb-2">
                                <Image src='/images/review_image.png' width={100} height={100} alt="rwview-bg" className="w-[6rem] h-[6rem] object-cover " />
                            </div>
                            <div>
                                <div className="">
                                    <h5 className="font-semibold text-lg ">NAme</h5>
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
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                        </div>
                        <div className="">
                            <div className="rounded-full w-[6rem] h-[6rem] flex justify-center items-center overflow-hidden mb-2">
                                <Image src='/images/review_image.png' width={100} height={100} alt="rwview-bg" className="w-[6rem] h-[6rem] object-cover " />
                            </div>
                            <div>
                                <div className="">
                                    <h5 className="font-semibold text-lg ">NAme</h5>
                                </div>
                                <div>
                                    <span className="text-gray-500">Designation</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
