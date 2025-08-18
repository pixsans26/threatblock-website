import * as React from "react";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';



interface ButtonProps {
    href: string;
    text: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, text, className = '' }) => {
    return (

        <Link
            href={href}
            className={`
        group 
        inline-flex 
        items-center 
        justify-between 
     bg-slate-100
        rounded-full 
        p-1 
       text-zinc-900
        transition-colors 
        hover:bg-white
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-red-500
        ${className}
      `}
        >
            {/* Red circle for the icon */}
            <span className='bg-red-600 p-4 rounded-full'>
                {/* The icon itself. It moves to the right on hover. */}
                <FaArrowRight className="transition-transform group-hover:translate-x-1 text-white  " />
            </span>

            {/* The text label */}
            <span className='px-4 text-lg font-medium'>
                {text}
            </span>
        </Link>
    );
};

export default Button