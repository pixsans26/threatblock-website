
import Image from "next/image";


export default function Values() {
    return (
        <>


            <section className="lg:w-9/12 w-11/12 mx-auto lg:flex justify-between h-auto  gap-20 mb-28 z-10">
                <div className="lg:w-6/12 w-full flex-col flex gap-2">
                    <div className="lg:mb-4 mb-2">
                        <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-lg text-xs">//values</span>
                    </div>
                    <div className="flex flex-col lg:gap-8 gap-4 w-full">
                        <h2 className="lg:text-4xl text-2xl font-bold w-full">
                            Our Core Values
                        </h2>
                        <p className="text-gray-500 lg:text-lg">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p className="text-gray-500 lg:text-lg">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                    </div>
                </div>
                <div className="lg:w-6/12 w-full flex justify-between gap-10">
                    <div className="w-6/12 flex-col flex gap-10">
                        {/* card */}
                        <div className="w-full h-auto p-8 bg-gradient-to-b from-white to-[#fff6f6]">
                            <div className="flex justify-center item center mb-4">
                                <Image src='/values/core-values.svg' height={100} width={100} alt="values" />
                            </div>
                            <div className="flex justify-center items-center">
                                <h4 className="font-semibold text-lg">Value1</h4>
                            </div>
                        </div>
                        {/* card */}
                        <div className="w-full h-auto p-8 bg-gradient-to-b from-white to-[#fff6f6]">
                            <div className="flex justify-center item center mb-4">
                                <Image src='/values/core-values.svg' height={100} width={100} alt="values" />
                            </div>
                            <div className="flex justify-center items-center">
                                <h4 className="font-semibold text-lg">Value2</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 flex flex-col mt-20 gap-10">
                        {/* card */}
                        <div className="w-full h-auto p-8 bg-gradient-to-b from-white to-[#fff6f6]">
                            <div className="flex justify-center item center mb-4">
                                <Image src='/values/core-values.svg' height={100} width={100} alt="values" />
                            </div>
                            <div className="flex justify-center items-center">
                                <h4 className="font-semibold text-lg">Value3</h4>
                            </div>
                        </div>

                        {/* card */}
                        <div className="w-full h-auto p-8 bg-gradient-to-b from-white to-[#fff6f6]">
                            <div className="flex justify-center item center mb-4">
                                <Image src='/values/core-values.svg' height={100} width={100} alt="values" />
                            </div>
                            <div className="flex justify-center items-center">
                                <h4 className="font-semibold text-lg">Value4</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
