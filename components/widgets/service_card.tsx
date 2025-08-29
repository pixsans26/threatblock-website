import Image from "next/image";
import * as React from "react";


interface ServiceCardProps {

    title: string;
    description: string;
    className?: string;
    image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, className = '' }) => {
    return (

        <div
            className={`border-[1px]  border-gray-300 p-2 min-w-sm space-y-6 sticky top-[300px]  
        ${className}
      `}
        >
            <div className="p-4 flex h-[350px] flex-col gap-5 bg-gradient-to-b from-white to-[#fff6f6] overflow-hidden py-10">
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
            </div>

        </div>
    );
};

export default ServiceCard