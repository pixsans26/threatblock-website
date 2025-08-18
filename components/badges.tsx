import Image from "next/image";


export default function TrustedBadges() {
    return (
        <>
            <section>
                <section className="w-9/12 mx-auto flex justify-between items-center h-auto py-10 gap-20 mb-20">
                    <div className="w-4/12 flex items-center">
                        <Image src="/images/cyber_badges.png" width={1000} height={1000} alt="hero_image_1" className="" />
                    </div>
                    <div className="w-6/12 flex-col flex gap-2">
                        <div className="mb-4">
                            <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto">//BADGES</span>
                        </div>
                        <div className="flex flex-col gap-8 w-9/12">
                            <h2 className="text-4xl font-bold w-full">
                                Trusted Badges
                            </h2>
                            <p className="text-gray-500 text-lg">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>

                        </div>
                    </div>

                </section>
            </section>

        </>
    );
}
