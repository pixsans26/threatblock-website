
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

                <div className="w-full grid mx-auto gap-10 lg:grid-cols-2 grid-cols-1">

                    {TeamData?.slice(0, 2).map((curElm: any) => (
                        <div
                            key={curElm.id}
                            className="border-[1px] border-gray-300 bg-white  overflow-hidden 
                       flex flex-col md:flex-row p-4" // <-- CORE LOGIC: Column on mobile, Row on desktop
                        >
                            {/* 1. Image Container (Top on mobile, Left on desktop) */}
                            <div className="w-full md:w-2/5 flex-shrink-0">
                                <img
                                    src={curElm.image}
                                    alt={curElm.name || 'Team Member'}
                                    // h-64 on mobile, h-full on desktop (stretches to text height)
                                    className="w-full h-64 md:h-full object-cover object-center"
                                    width={800}
                                    height={800}
                                />
                            </div>

                            {/* 2. Text Content (Bottom on mobile, Right on desktop) */}
                            <div className="w-full md:w-3/5 p-6 flex flex-col justify-center space-y-2">
                                {/* Name */}
                                <h4 className="text-xl font-semibold text-gray-900">
                                    {curElm.name}
                                </h4>

                                {/* Designation */}
                                <p className="text-md font-medium text-red-600">
                                    {curElm.designation}
                                </p>

                                {/* About */}
                                <p className="text-sm text-gray-700 pt-2">
                                    {curElm.about}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

        </>
    );
}
