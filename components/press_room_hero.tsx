
import Image from "next/image";
import ButtonWhite from "./widgets/button_white";
import ButtonDark from "./widgets/button_dark";
import { MotionDiv, MotionH1 } from "@/utils/motioDiv";

export default function PressHero() {
    return (
        <>
            <section className="w-full mx-auto flex justify-center lg:h-[90vh] lg:mb-24 mb-20">
                <div className="w-full lg:h-[90vh] flex">
                    <div className="absolute w-full h-[80vh] z-0 overflow-hidden">
                        <Image src='/images/press_room_bg.png' height={1000} width={10000} alt="about w-full" />
                    </div>
                    <div className="lg:w-9/12 w-11/12 lg:flex lg:h-[auto] h-[30vh] justify-around items-center mx-auto z-10 relative gap-10">
                        <div className="w-6/12 lg:flex hidden flex-col gap-10 justify-start ">
                            {/* Title */}
                            <MotionH1
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: .8, delay: .3 }}
                                viewport={{
                                    once: true
                                }}
                                className="w-10/12 lg:text-5xl text-3xl font-bold lg:text-white text-zinc-900">
                                Welcome to the ThreatBlock Press Room
                            </MotionH1>
                            <MotionDiv
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: .8, delay: .5 }}
                                viewport={{
                                    once: true
                                }}
                            >
                                {/* <ButtonWhite href='' text='Download Brand Assest' /> */}
                            </MotionDiv>
                        </div>
                        <div className="lg:w-6/12 w-full lg:h-[90vh] h-[35vh] lg:mx-0 relative">
                            <MotionDiv
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: .8, delay: .3 }}
                                viewport={{
                                    once: true
                                }}
                                className="lg:w-full w-8/12 absolute right-0 bottom-0">
                                <Image src='/images/pressroom.png' height={100} width={1000} alt="about" />
                            </MotionDiv>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-11/12 lg:hidden flex flex-col lg:gap-10 gap-5 justify-start mx-auto mb-20">
                {/* Title */}
                <h1 className="w-full lg:text-5xl text-3xl font-bold lg:text-white text-zinc-900">
                    Welcome to the ThreatBlock Press Room
                </h1>
                <div>
                    <ButtonDark href='/download' text='Download Brand Assest' target="_parent" />
                </div>
            </section>
        </>
    );
}
