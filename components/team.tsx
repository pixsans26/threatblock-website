import { getTeams } from '@/api/getData'
import { env } from "@/utils/env";
const baseUrl = env.NEXT_PUBLIC_API_URL

export default async function Team() {

    const { data: teamsData } = await getTeams()
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

                    {/* --- MODIFICATION START --- */}
                    {/* Check if teamsData exists and has a length greater than 0 */}
                    {teamsData && teamsData.length > 0 ? (

                        // If TRUE: Render the team cards
                        teamsData.slice(0, 2).map((curElm: any) => (
                            <div
                                key={curElm.id}
                                className="border-[1px] border-gray-300 bg-white  overflow-hidden 
                       flex flex-col md:flex-row p-4"
                            >
                                {/* 1. Image Container */}
                                <div className="w-full md:w-2/5 flex-shrink-0">
                                    <img
                                        src={`${baseUrl}/assets/${curElm.image}`}
                                        alt={curElm.name || 'Team Member'}
                                        className="w-full h-64 md:h-full object-cover object-center"
                                        width={800}
                                        height={800}
                                    />
                                </div>

                                {/* 2. Text Content */}
                                <div className="w-full md:w-3/5 p-6 flex flex-col justify-center space-y-2">
                                    <h4 className="text-xl font-semibold text-gray-900">
                                        {curElm.name}
                                    </h4>
                                    <p className="text-md font-medium text-red-600">
                                        {curElm.designation}
                                    </p>
                                    <p className="text-sm text-gray-700 pt-2">
                                        {curElm.about}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (

                        // If FALSE: Render the "No data" message
                        // We use lg:col-span-2 to make this message span the full width of the grid
                        <div className="lg:col-span-2 w-full text-center py-10">
                            <p className="text-gray-500 italic">
                                No team members to display at this time.
                            </p>
                        </div>
                    )}
                    {/* --- MODIFICATION END --- */}
                </div>

            </section>
        </>
    );
}