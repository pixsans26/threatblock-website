
import Image from "next/image";
import Button from "./widgets/button_dark";
import { blogData } from "@/data/blog"
import Link from "next/link";

export default function Blogs() {
    return (
        <>
            <section className="lg:w-9/12 w-11/12 mx-auto h-auto lg:mb-24 mb-20">
                <div className="w-full flex justify-between items-end mb-10">
                    <div className="lg:w-4/12">
                        <div className="mb-4">
                            <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-xl text-xs">//news & insights</span>
                        </div>
                        <h2 className="lg:text-4xl text-2xl font-bold lg:w-6/12">
                            Our Blogs
                        </h2>
                    </div>
                    {/* <div className="w-4/12 lg:flex justify-end hidden">
                        <Button
                            target="_parent"
                            href="/blogs"
                            text='More Blogs' />
                    </div> */}
                </div>
                <div className="w-full lg:flex justify-start gap-10 items-center">


                    {/* Blogs */}

                    {blogData.map((curElm: any) => (

                        <div key={curElm.id} className="lg:w-4/12 justify-around h-auto bg-slate-200 relative lg:mb-0 mb-10">
                            <Link href={curElm.link} target="_blank">
                                <div className="w-3/12 flex flex-col absolute top-4 left-4 bg-gray-950 bg-opacity-80 text-white py-5 gap-2 flex-grow">
                                    <h4 className="lg:text-4xl text-2xl font-semibold text-center">{curElm.date}</h4>
                                    <h5 className="lg:text-xl text-sm text-center">{curElm.month}</h5>
                                </div>
                                <div className=" w-full h-full bg-gradient-to-b from-black/0 via via-black/20 to-black/80 absolute"></div>
                                <div className="absolute bottom-4 px-4">
                                    <h3 className="text-white text-semibold lg:text-3xl text-xl">
                                        {curElm.title}
                                    </h3>
                                </div>
                                <div className="w-full flex lg:h-[34rem] h-[24rem]  justify-center items-start overflow-hidden">
                                    <Image src={curElm.image} width={1000} height={100} alt="blog" className="object-cover flex" />
                                </div>
                            </Link>
                        </div>

                    ))}


                    {/* <div className="w-6/12 lg:hidden justify-end flex">
                        <Button
                            href="/blogs"
                            target="_parent"
                            text='More Blogs' />
                    </div> */}
                </div>
            </section >
        </>
    );
}
