
import Image from "next/image";

export default function AboutHero() {
    return (
        <>
            <section className="w-full mx-auto flex justify-center h-[90vh] mb-40">
                <div className="w-full h-[80vh] flex">
                    <div className="absolute w-full h-[80vh] z-0 overflow-hidden">
                        <Image src='/images/about_page_bg.png' height={1000} width={10000} alt="about w-full" />
                    </div>
                    <div className="w-9/12 flex justify-around items-center mx-auto gap-20 z-10 my-10 ">
                        <div className="w-6/12 flex flex-col gap-4 justify-start">
                            {/* Title */}
                            <h1 className="text-6xl font-bold text-white">
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
                <div className="w-9/12 h-[90vh] flex justify-around absolute items-center mx-auto">
                    <div className="w-6/12 right-0 absolute bottom-0">
                        <Image src='/images/about_team.png' height={100} width={1000} alt="about" />
                    </div>
                </div>

            </section>
        </>
    );
}
