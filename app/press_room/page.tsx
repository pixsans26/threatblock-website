import PressHero from "@/components/press_room_hero";
import Image from "next/image";
import Link from "next/link";

export default function PressRoom() {
    return (
        <>
            <PressHero />
            <section className="lg:w-9/12 w-11/12 mx-auto flex justify-between items-center gap-10 lg:mb-10 mb-5">
                <div className="lg:w-7/12 w-full">
                    <div className="flex gap-8 lg:w-9/12">
                        <div className="lg:w-8/12 flex flex-col gap-2">
                            <div className="lg:mb-4 mb-2">
                                <span className="bg-[#FAF2F2] text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto">//NEWS</span>
                            </div>
                            <h2 className="lg:text-4xl text-2xl font-bold w-full">
                                In The News
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:w-9/12 w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 mb-40">
                <div className="w-full">
                    {/* Card */}
                    <div className='border-[1px] border-gray-300 p-2 min-w-sm space-y-6  bg-white'>
                        <div className="p-4 flex flex-col gap-2 bg-gradient-to-b from-white to-[#fff6f6] overflow-hidden ">
                            {/* Icon */}
                            <div className="text-5xl text-zinc-600 mb-4">
                                <Image src='/images/News1.png' height={100} width={1000} alt='' />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-black">
                                Title
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-gray-500">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <Link href='/' className="text-red-600">Read more...</Link>
                        </div>

                    </div>
                </div>
                <div className="w-full">
                    {/* Card */}
                    <div className='border-[1px] border-gray-300 p-2 min-w-sm space-y-6  bg-white'>
                        <div className="p-4 flex flex-col gap-2 bg-gradient-to-b from-white to-[#fff6f6] overflow-hidden ">
                            {/* Icon */}
                            <div className="text-5xl text-zinc-600 mb-4">
                                <Image src='/images/News1.png' height={100} width={1000} alt='' />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-black">
                                Title
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-gray-500">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <Link href='/' className="text-red-600">Read more...</Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}