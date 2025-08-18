
import Image from "next/image";
import Button from "./widgets/button_dark";
import ServiceCard from "./widgets/service_card";
import { FaSdCard } from "react-icons/fa6";

export default function ServiceSlide() {
    return (
        <>
            <section className="w-full relative flex h-auto justify-center items-center mb-40 py-10" >

                <div className="w-9/12 mx-auto flex justify-between items-center h-auto py-10 gap-20 z-10">
                    <div className="w-6/12 flex-col flex gap-2">
                        <div className="mb-4">
                            <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto">//SERVICES</span>
                        </div>
                        <div className="flex flex-col gap-8 w-9/12">
                            <h2 className="text-4xl font-bold w-full">
                                Explore our core Services
                            </h2>
                            <p className="text-gray-500 text-lg">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>

                            <div>
                                <Button
                                    href="/services"
                                    text="Explore our Services" />
                            </div>

                        </div>
                    </div>
                    <div className="w-6/12 flex flex-col items-end justify-center">
                        {/* service card */}
                        <ServiceCard
                            icon={<FaSdCard />} // Pass the icon component here
                            title="Red Team Assessments"
                            image="/images/Icons/penetration-testing.svg"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    </div>
                </div>
                <div className="absolute right-0 bottom-0">
                    <Image src='/images/hexagon.svg' width={400} height={100} alt="" />
                </div>

            </section>
        </>
    );
}
