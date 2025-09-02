import Image from "next/image";
import Link from "next/link";
import * as React from "react";


interface ServiceCardProps {

    title: string;
    description: string;
    className?: string;
    image: string;
    href: string;
    linktext: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, className = "", href, linktext }) => {
    return (

        <div
            className={`border-[1px]  border-gray-300 p-2 min-w-sm space-y-6 lg:sticky lg:top-[300px] lg:mb-0 mb-10 
        ${className}
      `}
        >
            <div className="p-4 flex lg:h-[400px] flex-col gap-5 bg-gradient-to-b from-white to-[#fff6f6] overflow-hidden pt-5">
                {/* Icon */}
                <div className="text-5xl text-zinc-600 mb-5">
                    <Image src={image} height={100} width={100} alt={image} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-500">
                    {description}
                </p>

                <Link href={href} >
                    <span className="tex-lg text-red-600">
                        {linktext}
                    </span>
                </Link>
            </div>

        </div>
    );
};

export default ServiceCard