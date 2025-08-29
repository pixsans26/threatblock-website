import * as React from "react";
import { FaArrowRight } from 'react-icons/fa';



interface ButtonProps {
    text: string;
}

const ButtonSubmit: React.FC<ButtonProps> = ({ text }) => {
    return (

        <button
            type='submit'
            className={`
        group 
        inline-flex 
        items-center 
        justify-between 
        bg-zinc-900 
        rounded-full 
        p-1 
        text-white 
        transition-colors 
        hover:bg-zinc-800 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-red-500
      `}
        >
            {/* Red circle for the icon */}
            <span className='bg-red-600 p-4 rounded-full'>
                {/* The icon itself. It moves to the right on hover. */}
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>

            {/* The text label */}
            <span className='px-4 text-lg font-medium'>
                {text}
            </span>
        </button>
    );
};

export default ButtonSubmit;