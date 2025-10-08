import ButtonWhite from "@/components/widgets/button_white";
import Image from "next/image";

export default function NotFound() {
    return (
        <>
            <div className="w-full flex justify-center items-center">
                <div className="w-4/12 absolute justify-center mx-auto items-center flex flex-col">
                    <h2 className="text-white lg:text-5xl text-2xl mb-10">This link is broken!</h2>
                    <Image src='/images/404.png' height={100} width={1000} alt="404" className="mb-10" />
                    <ButtonWhite href="/" text="Return to home" />
                </div>
                <Image src='/images/error-bg.png' width={1000} height={100} alt="bg" className="w-full object-cover" />
            </div>
        </>
    )
}