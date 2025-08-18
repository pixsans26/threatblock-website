
import Image from "next/image";

export default function MissionVision() {
    return (
        <>
            <section className="w-full relative flex h-auto justify-center items-center mb-28 py-10 " >

                <div className="w-9/12 mx-auto flex flex-col justify-between items-center h-auto py-10 gap-10 z-10">
                    {/* Mission */}
                    <div className="w-full flex items-center justify-center gap-10">
                        <div className="w-6/12">
                            <Image src='/images/mission.png' width={1000} height={100} alt='mission' />
                        </div>
                        <div className="w-6/12">
                            <div className="mb-4">
                                <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto">//mission</span>
                            </div>
                            <div className="flex flex-col gap-8">
                                <h2 className="text-4xl font-bold w-full">
                                    Our Goal
                                </h2>
                                <p className="text-gray-500 text-lg">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="w-full flex items-center justify-center gap-10">
                        <div className="w-6/12">
                            <Image src='/images/vision.png' width={1000} height={100} alt='mission' />
                        </div>
                        <div className="w-6/12">
                            <div className="mb-4">
                                <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto">//mission</span>
                            </div>
                            <div className="flex flex-col gap-8">
                                <h2 className="text-4xl font-bold w-full">
                                    Our Vision
                                </h2>
                                <p className="text-gray-500 text-lg">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>

                            </div>
                        </div>
                    </div>


                </div>
                <div className="absolute right-0 ">
                    <Image src='/images/hexagon.svg' width={500} height={100} alt="" />
                </div>

            </section>
        </>
    );
}
