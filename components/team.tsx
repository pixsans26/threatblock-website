
import Image from "next/image";
import Link from "next/link";
import { TeamData } from '@/data/team'


export default function Team() {
    return (
        <>

            <section className="lg:w-9/12 w-11/12 mx-auto flex flex-col justify-center items-center h-auto lg:py-10 lg:mb-20 mb-10">

                <div className="w-8/12 mx-auto flex flex-col justify-center items-center gap-2 lg:mb-20 mb-10">
                    <div className="lg:mb-4 mb-2">
                        <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-2xl text-xs">//meet our team</span>
                    </div>
                    <div className="flex flex-col gap-8 w-full">
                        <h2 className="lg:text-4xl text-2xl font-bold w-full text-center">
                            Expert Team Members
                        </h2>
                    </div>
                </div>

                <div className="w-full mx-auto grid lg:grid-cols-4 grid-cols-2 justify-between items-center h-auto lg:gap-8 gap-4">

                    {TeamData?.map((curElm: any) => (
                        <div className="w-full lg:flex h-full bg-slate-300 relative overflow-hidden" key={curElm.id}>
                            <div className="w-full h-full absolute bg-gradient-to-b from-black/0 to-[#270303]/80">
                            </div>
                            {/* <div className="w-auto flex flex-col gap-2 absolute lg:right-4 right-2 bottom-20">
                                <div className="lg:h-10 h-7 lg:w-10 w-7 bg-black/40 backdrop-blur-lg lg:p-2 p-1 rounded-full">
                                    <Link href={curElm.facebook}>
                                        <Image src="/icons/facebook.svg" width={100} height={100} alt="facebook" />
                                    </Link>
                                </div>
                                <div className="lg:h-10 h-7 lg:w-10 w-7 bg-black/40 backdrop-blur-lg lg:p-2 p-1 rounded-full">
                                    <Link href={curElm.instagram}>
                                        <Image src="/icons/instagram.svg" width={100} height={100} alt="instagram" />
                                    </Link>
                                </div>
                                <div className="lg:h-10 h-7 lg:w-10 w-7 bg-black/40 backdrop-blur-lg lg:p-2 p-1 rounded-full">
                                    <Link href={curElm.linkedin}>
                                        <Image src="/icons/linkedin.svg" width={100} height={100} alt="linkedin" />
                                    </Link>
                                </div>
                            </div> */}
                            <div className="w-full absolute bottom-4 left-4  text-white">
                                <h4 className="text-white font-semibold lg:text-2xl">{curElm.name}</h4>
                                <p className="lg:text-xl text-xs">{curElm.designation}</p>
                            </div>
                            <div className="w-full">
                                <Image src="/images/team1.png" width={1000} height={100} alt="team1" />
                            </div>
                        </div>
                    ))}

                    {/* Teams card */}



                </div>

            </section>

        </>
    );
}
