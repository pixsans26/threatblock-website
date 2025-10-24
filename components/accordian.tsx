'use client';

import { useState } from 'react';
import { MotionDiv, fadeInUp } from '@/utils/motioDiv';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

// 1. Define the shape of the data this component expects
interface AccordionItemData {
    id: string | number;
    question: React.ReactNode;
    answers: React.ReactNode;
}

// 2. Define the component's props
interface AccordionProps {
    items: AccordionItemData[];
    className?: string;
}

export default function Accordion({ items, className = '' }: AccordionProps) {
    // 3. State and toggle logic are now encapsulated
    const [openId, setOpenId] = useState<string | number | null>(null);

    const toggleItem = (id: string | number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        // 4. The list is rendered using the 'items' prop
        <div className={`w-full flex flex-col gap-5 justify-start items-center ${className}`}>
            {items.map((item, index) => {
                const isOpen = item.id === openId;

                return (
                    <MotionDiv
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: true }}
                        tabIndex={0} // Makes it focusable
                        custom={index}
                        key={item.id}
                        className="w-full"
                    >
                        {/* 5. This is your exact styling from the original code */}
                        <div className="border border-gray-300 p-2 min-w-sm bg-white">
                            <div className="p-4 flex flex-col gap-2 bg-gradient-to-b from-white to-[#fff6f6]">
                                {/* Question section - clickable toggle */}
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleItem(item.id)}
                                    role="button"
                                    aria-expanded={isOpen}
                                    aria-controls={`answer-${item.id}`}
                                >
                                    <h3 id={`question-${item.id}`} className="lg:text-xl font-bold text-black">
                                        {item.question}
                                    </h3>
                                    <span>
                                        {isOpen ? <BiChevronUp size={28} /> : <BiChevronDown size={28} />}
                                    </span>
                                </div>

                                {/* Answer section with smooth transition */}
                                <div
                                    id={`answer-${item.id}`}
                                    role="region"
                                    aria-labelledby={`question-${item.id}`}
                                    className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="lg:text-lg text-gray-700 pt-4">
                                            {item.answers}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MotionDiv>
                );
            })}
        </div>
    );
}