
import Image from "next/image";
import Button from "./widgets/button_dark";


export default function Blogs() {
    return (
        <>
            <section className="w-9/12 mx-auto h-auto mb-40">
                <div className="w-full flex justify-between items-end mb-10">
                    <div className="w-4/12">
                        <div className="mb-4">
                            <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto">//news & insights</span>
                        </div>
                        <h2 className="text-4xl font-bold w-6/12">
                            Our Blogs
                        </h2></div>
                    <div className="w-4/12 flex justify-end">
                        <Button
                            href="/blogs"
                            text='More Blogs' />
                    </div>
                </div>
                <div className=" w-full flex justify-between gap-10 items-center">
                    {/* Blog1 */}
                    <div className="w-4/12 justify-around h-auto bg-slate-200 relative ">
                        <div className="w-3/12 flex flex-col absolute top-4 left-4 bg-gray-950 bg-opacity-60 text-white py-5 gap-2">
                            <h4 className="text-4xl font-semibold text-center">16</h4>
                            <h5 className="text-lg text-center">APR</h5>
                        </div>
                        <div className=" w-full h-full bg-gradient-to-b from-black/0 to-black/80 absolute"></div>
                        <div className="absolute bottom-4 px-4">
                            <h3 className="text-white text-semibold text-3xl">
                                Lorem Ipsum is simply dummy text of the printing
                            </h3>
                        </div>
                        <div className="w-full flex justify-center items-center overflow-hidden">
                            <Image src='/images/about_2.png' width={1000} height={100} alt="blog" />
                        </div>
                    </div>

                    {/* Blog2 */}
                    <div className="w-4/12 justify-around h-auto bg-slate-200 relative ">
                        <div className="w-3/12 flex flex-col absolute top-4 left-4 bg-gray-950 bg-opacity-60 text-white py-5 gap-2">
                            <h4 className="text-4xl font-semibold text-center">16</h4>
                            <h5 className="text-lg text-center">APR</h5>
                        </div>
                        <div className=" w-full h-full bg-gradient-to-b from-black/0 to-black/80 absolute"></div>
                        <div className="absolute bottom-4 px-4">
                            <h3 className="text-white text-semibold text-3xl">
                                Lorem Ipsum is simply dummy text of the printing
                            </h3>
                        </div>
                        <div className="w-full flex justify-center items-center overflow-hidden">
                            <Image src='/images/about_2.png' width={1000} height={100} alt="blog" />
                        </div>

                    </div>

                    {/* Blog3 */}
                    <div className="w-4/12 justify-around h-auto bg-slate-200 relative ">
                        <div className="w-3/12 flex flex-col absolute top-4 left-4 bg-gray-950 bg-opacity-60 text-white py-5 gap-2">
                            <h4 className="text-4xl font-semibold text-center">16</h4>
                            <h5 className="text-lg text-center">APR</h5>
                        </div>
                        <div className=" w-full h-full bg-gradient-to-b from-black/0 to-black/80 absolute"></div>
                        <div className="absolute bottom-4 px-4">
                            <h3 className="text-white text-semibold text-3xl">
                                Lorem Ipsum is simply dummy text of the printing
                            </h3>
                        </div>
                        <div className="w-full flex justify-center items-center overflow-hidden">
                            <Image src='/images/about_2.png' width={1000} height={100} alt="blog" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
