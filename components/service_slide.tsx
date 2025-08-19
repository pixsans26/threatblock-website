"use client"; // This is essential for using hooks and browser APIs

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ServiceCard from '@/components/widgets/service_card'; // Import the card component
import Button from './widgets/button_dark';

// Dummy data for the service cards
const servicesData = [
    {
        image: "/images/Icons/penetration-testing.svg",
        title: "Red Team Assessments",
        description: "Simulating real-world attacks to test your organization's security posture."
    },
    {
        image: "/images/Icons/cloud-security.svg", // Example icon path
        title: "Cloud Security",
        description: "Securing your cloud infrastructure against threats and vulnerabilities."
    },
    {
        image: "/images/Icons/incident-response.svg", // Example icon path
        title: "Incident Response",
        description: "Rapidly responding to and mitigating the impact of security breaches."
    },
];

const ServicesSection = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update state when the component is 50% visible
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect(); // Animate only once
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the element is in view
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="w-full relative flex h-auto justify-center items-center mb-40 py-10 overflow-hidden">
            <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex flex-col lg:flex-row justify-between items-center h-auto py-10 gap-20 z-10">
                {/* Left Side: Text Content */}
                <div className="w-full lg:w-6/12 flex-col flex gap-2">
                    <div className="mb-4">
                        <span className="bg-red-100 text-red-600 px-6 py-2 uppercase tracking-[4px] w-auto">
              // SERVICES
                        </span>
                    </div>
                    <div className="flex flex-col lg:gap-8 gap-4 w-full lg:w-10/12">
                        <h2 className="lg:text-4xl text-2xl font-bold w-full">
                            Explore our core Services
                        </h2>
                        <p className="text-gray-500 text-lg">
                            We provide a comprehensive suite of cybersecurity services designed to protect your assets and ensure business continuity.
                        </p>
                        <div>
                            <Button href="/services" text="Explore our Services" />
                        </div>
                    </div>
                </div>

                {/* Right Side: Animated Service Cards */}
                <div ref={sectionRef} className="w-full lg:w-6/12 flex items-center justify-center min-h-[400px] relative">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`absolute transition-all duration-700 ease-in-out ${isInView
                                ? 'opacity-100 translate-y-0 rotate-0'
                                : 'opacity-0 translate-y-16 -rotate-12'
                                }`}
                            style={{
                                // Cascading delay for each card
                                transitionDelay: `${index * 200}ms`,
                                // Stacking context
                                zIndex: servicesData.length - index,
                                // Slight offset for a fanned-out final look
                                transform: isInView ? `translateY(${index * 16}px)` : 'translateY(64px) rotate(-12deg)',
                            }}
                        >
                            <ServiceCard
                                icon={null} // Icon is now handled by the image prop
                                title={service.title}
                                image={service.image}
                                description={service.description}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute right-0 bottom-0 z-0">
                <Image src="/images/hexagon.svg" width={400} height={100} alt="" />
            </div>
        </section>
    );
};

export default ServicesSection;