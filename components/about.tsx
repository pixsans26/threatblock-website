
import Image from "next/image";
import Button from "./widgets/button_dark";

export default function AboutHome() {
    return (
        <>
            <section className="w-full relative flex justify-center items-center bg-[#FAF2F2] ">
                <div className="w-5/12 bg-slate-50">
                    <Image src='/images/about_1.png' width={1000} height={1000} alt="" />
                </div>
                <div className="w-7/12 flex">
                </div>

                {/* Image and founder */}
                <div className="w-9/12 mx-auto h-full absolute flex justify-end ">
                    <div className="w-5/12 flex justify-end">
                        <div className="">
                            <Image src='/images/about_2.png' height={100} width={250} alt='about2' />
                        </div>
                    </div>

                </div>

                {/* text and about */}
                <div className="w-9/12 mx-auto flex absolute">
                    <div className="w-5/12">

                    </div>
                    <div className="w-7/12">
                        <div className="flex gap-8 w-9/12">
                            <div className="w-8/12 flex flex-col gap-2">
                                <div className="mb-4">
                                    <span className="bg-white text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto">//ABOUT US</span>
                                </div>
                                <h2 className="text-4xl font-bold w-full">
                                    Our dedicated team collectively invests 10,000 hours each year in cybersecurity efforts.
                                </h2>
                            </div>
                        </div>

                        <hr className="my-10" />
                        <div className="flex gap-8 w-9/12">
                            <div className="w-7/12 flex flex-col gap-10">
                                <p className="text-gray-500 text-lg">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                                <div>
                                    <Button
                                        href="/about"
                                        text="Read More" />
                                </div>
                            </div>
                            <div className="w-5/12">
                                <div className="w-3/12 bg-white absolute bottom-0 right-0 p-8">
                                    <div className="w-[4rem] bg-slate-50 h-[4rem] mb-4 rounded-full overflow-hidden">
                                        <Image src='/images/about_2.png' height={100} width={250} alt='about2' />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Samaksh</h4>
                                        <p className="text-gray-500">Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
