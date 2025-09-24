
import Image from "next/image";
import Button from "./widgets/button_dark";


export default function Blogs() {
    return (
        <>
            <section className="lg:w-9/12 w-11/12 mx-auto h-auto lg:mb-24 mb-20">
                <div className="w-full flex justify-between items-end mb-10">
                    <div className="lg:w-4/12">
                        <div className="mb-4">
                            <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-2xl text-xs">//news & insights</span>
                        </div>
                        <h2 className="lg:text-4xl text-2xl font-bold lg:w-6/12">
                            Our Blogs
                        </h2>
                    </div>
                    <div className="w-4/12 lg:flex justify-end hidden">
                        <Button
                            target="_parent"
                            href="/blogs"
                            text='More Blogs' />
                    </div>
                </div>
                <div className="w-full lg:flex justify-between gap-10 items-center">
                    {/* Blog1 */}
                    <div className="lg:w-4/12 justify-around h-auto bg-slate-200 relative lg:mb-0 mb-10">
                        <div className="w-3/12 flex flex-col absolute top-4 left-4 bg-gray-950 bg-opacity-60 text-white py-5 gap-2">
                            <h4 className="lg:text-4xl text-2xl font-semibold text-center">16</h4>
                            <h5 className="lg:text-2xl text-sm text-center">APR</h5>
                        </div>
                        <div className=" w-full h-full bg-gradient-to-b from-black/0 to-black/80 absolute"></div>
                        <div className="absolute bottom-4 px-4">
                            <h3 className="text-white text-semibold lg:text-3xl text-xl">
                                Lorem Ipsum is simply dummy text of the printing
                            </h3>
                        </div>
                        <div className="w-full flex justify-center items-center overflow-hidden">
                            <Image src='/images/about_2.png' width={1000} height={100} alt="blog" />
                        </div>
                    </div>

                    {/* Blog1 */}
                    <div className="lg:w-4/12 justify-around h-auto bg-slate-200 relative lg:mb-0 mb-10">
                        <div className="w-3/12 flex flex-col absolute top-4 left-4 bg-gray-950 bg-opacity-60 text-white py-5 gap-2">
                            <h4 className="lg:text-4xl text-2xl font-semibold text-center">16</h4>
                            <h5 className="lg:text-2xl text-sm text-center">APR</h5>
                        </div>
                        <div className=" w-full h-full bg-gradient-to-b from-black/0 to-black/80 absolute"></div>
                        <div className="absolute bottom-4 px-4">
                            <h3 className="text-white text-semibold lg:text-3xl text-xl">
                                Lorem Ipsum is simply dummy text of the printing
                            </h3>
                        </div>
                        <div className="w-full flex justify-center items-center overflow-hidden">
                            <Image src='/images/about_2.png' width={1000} height={100} alt="blog" />
                        </div>
                    </div>


                    {/* Blog1 */}
                    <div className="lg:w-4/12 justify-around h-auto bg-slate-200 relative lg:mb-0 mb-10">
                        <div className="w-3/12 flex flex-col absolute top-4 left-4 bg-gray-950 bg-opacity-60 text-white py-5 gap-2">
                            <h4 className="lg:text-4xl text-2xl font-semibold text-center">16</h4>
                            <h5 className="lg:text-2xl text-sm text-center">APR</h5>
                        </div>
                        <div className=" w-full h-full bg-gradient-to-b from-black/0 to-black/80 absolute"></div>
                        <div className="absolute bottom-4 px-4">
                            <h3 className="text-white text-semibold lg:text-3xl text-xl">
                                Lorem Ipsum is simply dummy text of the printing
                            </h3>
                        </div>
                        <div className="w-full flex justify-center items-center overflow-hidden">
                            <Image src='/images/about_2.png' width={1000} height={100} alt="blog" />
                        </div>
                    </div>

                    <div className="w-6/12 lg:hidden justify-end flex">
                        <Button
                            href="/blogs"
                            target="_parent"
                            text='More Blogs' />
                    </div>





                </div>
            </section>
        </>
    );
}
