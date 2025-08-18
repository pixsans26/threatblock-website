
import Image from "next/image";
import Button from "./widgets/button_white";

export default function CaseStudiesHero() {
    return (
        <>
            <section className="w-full mx-auto flex justify-center h-[90vh] mb-40">
                <div className="w-full h-[90vh] flex">
                    <div className="absolute w-full h-[80vh] z-0 overflow-hidden">
                        <Image src='/images/contact_bg.png' height={1000} width={10000} alt="about w-full" />
                    </div>
                    <div className="w-9/12 flex justify-around items-center mx-auto z-10 gap-10 relative">
                        <div className="w-6/12 flex flex-col gap-10 justify-start">
                            {/* Title */}
                            <h1 className="text-6xl font-bold text-white w-10/12">
                                Our Case Studies
                            </h1>

                        </div>
                        <div className="w-6/12 h-[90vh] relative">
                            <div className="absolute right-0 bottom-0">
                                <Image src='/images/casestudies.png' height={100} width={1000} alt="about" />
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}
