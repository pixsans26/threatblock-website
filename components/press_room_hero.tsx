
import Image from "next/image";
import Button from "./widgets/button_white";

export default function PressHero() {
    return (
        <>
            <section className="w-full mx-auto flex justify-center h-[90vh] mb-40">
                <div className="w-full h-[90vh] flex">
                    <div className="absolute w-full h-[80vh] z-0 overflow-hidden">
                        <Image src='/images/press_room_bg.png' height={1000} width={10000} alt="about w-full" />
                    </div>
                    <div className="w-9/12 flex justify-around items-center mx-auto z-10 relative gap-10">
                        <div className="w-6/12 flex flex-col gap-10 justify-start ">
                            {/* Title */}
                            <h1 className="w-10/12 text-6xl font-bold text-white">
                                Welcome to the ThreatBlock Press Room
                            </h1>
                            <div>
                                <Button href='/download' text='Download Brand Assest' />
                            </div>
                        </div>
                        <div className="w-6/12 h-[90vh] relative">
                            <div className="absolute right-0 bottom-0">
                                <Image src='/images/pressroom.png' height={100} width={1000} alt="about" />
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}
