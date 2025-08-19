import Image from "next/image";


export default function TrustedBadges() {
    return (
        <>
            <section>
                <section className="lg:w-9/12 w-11/12 mx-auto lg:flex justify-between items-center h-auto py-10 lg:gap-20 lg:mb-20 mb-10">
                    <div className="lg:w-6/12 w-full lg:flex-col flex-row lg:flex gap-2 lg:mb-0 mb-10">
                        <div className="mb-4">
                            <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-lg text-xs">//BADGES</span>
                        </div>
                        <div className="lg:flex lg:flex-col gap-8 lg:w-9/12">
                            <h2 className="lg:text-4xl text-2xl font-bold w-full">
                                Trusted Badges
                            </h2>
                            <p className="text-gray-500 lg:text-lg ">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-4/12 w-full flex items-center md:order-first order-last">
                        <Image src="/images/cyber_badges.png" width={1000} height={1000} alt="hero_image_1" className="" />
                    </div>
                </section>
            </section>

        </>
    );
}
