
import { TeamData } from '@/data/team'

export default function Team() {
    return (
        <>

            <section id='teams' className="lg:w-9/12 w-11/12 mx-auto flex flex-col justify-center items-center h-auto lg:py-10 lg:mb-20 mb-10">

                <div className="w-8/12 mx-auto flex flex-col justify-center items-center gap-2 lg:mb-20 mb-10">
                    <div className="lg:mb-4 mb-2">
                        <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto lg:text-xl text-xs">//meet our team</span>
                    </div>
                    <div className="flex flex-col gap-8 w-full">
                        <h2 className="lg:text-4xl text-2xl font-bold w-full text-center">
                            Expert Team Members
                        </h2>
                    </div>
                </div>

                <div className="w-full mx-auto grid lg:grid-cols-4 grid-cols-2 justify-between items-center h-auto lg:gap-8 gap-4">

                    {TeamData?.map((curElm: any) => (
                        // 1. Added `group` and `rounded-lg`
                        // 2. Changed h-full to fixed heights lg:h-96 h-64
                        <div key={curElm.id} className="border-[1px] border-gray-300 p-2 min-w-sm space-y-6  bg-white flex flex-grow">
                            <div className="w-full lg:flex lg:h-96 h-64 bg-slate-300 relative overflow-hidden group" >

                                {/* 3. Image is now first to be the base layer */}
                                {/* 4. Fixed Image props for better scaling and alt text */}
                                <div className="w-full h-full">
                                    <img
                                        src={curElm.image}
                                        alt={curElm.name || 'Team Member'}
                                        className="w-full h-full object-cover" // Ensures image covers the div
                                        width={1000}
                                        height={1000}
                                    />
                                </div>

                                {/* 2. Gradient overlay - visible on mobile, appears on hover on desktop */}
                                <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80
                                            opacity-100 lg:opacity-0 lg:group-hover:opacity-100
                                            transition-opacity duration-300 ease-in-out">
                                </div>

                                {/* 5. Text box - visible on mobile, animates on hover on desktop */}
                                <div className="w-full absolute bottom-4 left-4 text-white
                                            transform opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-10 lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                                            transition-all duration-300 ease-in-out">
                                    <h4 className="text-white font-semibold lg:text-xl">{curElm.name}</h4>
                                    <p className="lg:text-lg text-xs">{curElm.designation}</p>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </section>

        </>
    );
}
