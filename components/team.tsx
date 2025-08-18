
import Image from "next/image";
import Link from "next/link";
import { TeamData } from '@/data/team'


export default function Team() {
    return (
        <>

            <section className="w-9/12 mx-auto flex flex-col justify-between items-center h-auto py-10">

                <div className="w-8/12 mx-auto flex flex-col justify-center items-center gap-2 mb-20">
                    <div className="mb-4">
                        <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto">//meet our team</span>
                    </div>
                    <div className="flex flex-col gap-8 w-full">
                        <h2 className="text-4xl font-bold w-full text-center">
                            Expert Team Members
                        </h2>
                    </div>
                </div>
                <div className="w-full mx-auto flex justify-between items-center h-auto gap-8   ">

                    {TeamData?.map((curElm: any) => (
                        <div className="w-3/12 flex h-full bg-slate-300 relative" key={curElm.id}>
                            <div className="w-full h-full absolute bg-gradient-to-b from-black/0 to-[#270303]/80">
                            </div>
                            <div className="w-auto flex flex-col gap-2 absolute right-4 bottom-20">
                                <div className="h-10 w-10 bg-black/40 backdrop-blur-lg p-2 rounded-full">
                                    <Link href={curElm.facebook}>
                                        <Image src="/icons/facebook.svg" width={100} height={100} alt="facebook" />
                                    </Link>
                                </div>
                                <div className="h-10 w-10 bg-black/40 backdrop-blur-lg p-2 rounded-full">
                                    <Link href={curElm.instagram}>
                                        <Image src="/icons/instagram.svg" width={100} height={100} alt="instagram" />
                                    </Link>
                                </div>
                                <div className="h-10 w-10 bg-black/40 backdrop-blur-lg p-2 rounded-full">
                                    <Link href={curElm.linkedin}>
                                        <Image src="/icons/linkedin.svg" width={100} height={100} alt="linkedin" />
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full absolute bottom-4 left-4  text-white">
                                <h4 className="text-white font-semibold text-2xl">{curElm.name}</h4>
                                <p>{curElm.designation}</p>
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
