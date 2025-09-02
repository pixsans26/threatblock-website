import { MotionH2 } from "@/utils/motioDiv"
import Image from "next/image"


export default function Industries() {
    return (
        <>
            <section className='w-full lg:my-32 py-5 my-10'>

                <div className="lg:w-9/12 w-11/12 mx-auto">
                    <div className='lg:w-5/12 w-full flex mx-auto justify-center '>
                        <div className='w-full text-center mx-auto lg:mb-20 mb-10'>
                            <h4 className="text-gradient-purple lg:text-center"></h4>
                            <MotionH2
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: .5, delay: .2 }}
                                viewport={{
                                    once: true
                                }}
                                className='lg:text-4xl text-2xl font-bold w-full'>Industries We Serve</MotionH2>
                        </div>

                    </div>

                    <div className='w-full grid lg:grid-cols-5 grid-cols-2 lg:gap-10 justify-between items-center'>
                        <div className="h-20 w-[10rem] bg-slate-200"></div>
                        <div className="h-20 w-[10rem] bg-slate-200"></div>
                        <div className="h-20 w-[10rem] bg-slate-200"></div>
                        <div className="h-20 w-[10rem] bg-slate-200"></div>
                        <div className="h-20 w-[10rem] bg-slate-200"></div>
                        <div className="h-20 w-[10rem] bg-slate-200"></div>
                        <div className="h-20 w-[10rem] bg-slate-200"></div>
                        <div className="h-20 w-[10rem] bg-slate-200"></div>
                        <div className="h-20 w-[10rem] bg-slate-200"></div>
                        <div className="h-20 w-[10rem] bg-slate-200"></div>
                    </div>


                </div>

            </section>
        </>
    )
}