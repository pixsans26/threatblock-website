
import Image from "next/image";

export default function AboutHero() {
    return (
        <>
            <section className="w-full mx-auto lg:flex justify-center lg:h-[90vh] lg:mb-40 mb-80">
                <div className="w-full lg:h-[80vh] lg:flex">
                    <div className="absolute w-full lg:h-[80vh] z-0 overflow-hidden">
                        <Image src='/images/about_page_bg.png' height={1000} width={10000} alt="about w-full" />
                    </div>

                    <div className="w-9/12 lg:flex hidden justify-around items-center mx-auto gap-20 z-10 lg:my-10 mt-30">
                        <div className="w-6/12 flex flex-col gap-4 justify-start">

                            <h1 className="lg:text-6xl text-3xl font-bold text-white">
                                Tailored <span className="text-red-600">Consulting</span> for the Advanced Security
                            </h1>
                            <p className="text-gray-200 text-lg">
                                Our mission is to empowers businesses off all size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptional in the value through our strategic inset, innovative approaches. Our mission is to empower businesses of all sizes to thrive.
                            </p>
                            <p>
                                Committed to the delivering exceptional in the value through our strategic inset, innovative approaches empower.
                            </p>
                        </div>
                        <div className="w-6/12">
                        </div>
                    </div>

                </div>
                <div className="lg:w-9/12 w-11/12 lg:h-[90vh] h-[30vh] lg:flex justify-around absolute items-center mx-auto">
                    <div className="lg:w-6/12 w-7/12 right-0 absolute bottom-0">
                        <Image src='/images/about_team.png' height={100} width={1000} alt="about" />
                    </div>
                </div>

            </section>

            {/* Responsive */}
            <section className="w-11/12 lg:hidden mx-auto gap-20 z-10 mt-40">

                <h1 className="lg:text-6xl text-3xl font-bold text-zinc-900">
                    Tailored <span className="text-red-600">Consulting</span> for the Advanced Security
                </h1>
                <p className="text-gray-500 mb-2 text-justify">
                    Our mission is to empowers businesses off all size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptional in the value through our strategic inset, innovative approaches. Our mission is to empower businesses of all sizes to thrive.
                </p>
                <p className="text-gray-500 text-justify">
                    Committed to the delivering exceptional in the value through our strategic inset, innovative approaches empower.
                </p>

            </section>
        </>
    );
}
