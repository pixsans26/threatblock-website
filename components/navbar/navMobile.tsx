'use client'
import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { FaBarsStaggered } from 'react-icons/fa6';
import ButtonDark from '../widgets/button_dark';

const Services = [
    {
        id: 1,
        text: 'Penetration Testing',
        link: '/services/penetration-testing',

    },
    {
        id: 2,
        text: 'Red Teaming',
        link: '/services/red-teaming',

    },
    {
        id: 3,
        text: 'Audits & Compliance',
        link: '/services/audits-compliance',
    },
    {
        id: 4,
        text: 'Threat Intelligence',
        link: '/services/threat-intelligence',
    },
    {
        id: 5,
        text: 'Web application PT',
        link: '/services/web-application-pt',
    },
    {
        id: 6,
        text: 'Mobile application PT',
        link: '/services/mobile-application-pt',
    },
    {
        id: 7,
        text: 'Network Pentesting',
        link: '/services/network-pentesting',
    },
    {
        id: 8,
        text: 'API Pentesting',
        link: '/services/api-pentesting',
    },
    {
        id: 9,
        text: 'Cloud Security',
        link: '/services/cloud-security',
    },
    {
        id: 10,
        text: 'DevSecOps',
        link: '/services/devsecops',
    },

]

const NavbarMobile = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const servicesRef = useRef<HTMLDivElement>(null);
    const [dropdownHeight, setDropdownHeight] = useState('0px');

    useEffect(() => {
        if (servicesDropdownOpen) {
            // Check if the ref exists before accessing its properties
            if (servicesRef.current) {
                setDropdownHeight(`${servicesRef.current.scrollHeight}px`);
            }
        } else {
            setDropdownHeight('0px');
        }
    }, [servicesDropdownOpen]);

    const toggleServicesDropdown = () => {
        setServicesDropdownOpen(!servicesDropdownOpen);
    };

    const closeSidebarAndDropdown = () => {
        setSidebarOpen(false);
        setServicesDropdownOpen(false);
    };

    return (
        <>
            <nav className='lg:hidden w-full mx-auto py-2 h-16 sticky top-0 z-40 flex bg-white bg-opacity-80 backdrop-blur-sm'>
                {/* Sidebar */}
                <div className={`fixed inset-y-0 left-0 z-50 h-full w-80 text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out lg:translate-x-0`}>
                    <div className="w-full flex justify-end p-4 bg-white backdrop-blur-lg">

                        <button
                            className="lg:hidden text-gray-400 hover:text-white"
                            onClick={closeSidebarAndDropdown}>
                            ✖
                        </button>
                    </div>
                    <nav className="space-y-4 bg-white backdrop-blur-sm h-screen text-zinc-800">
                        <div className='w-11/12 flex justify-center items-center h-24'>
                            <Link onClick={closeSidebarAndDropdown} href="/">
                                <img src='/logo.svg' />
                            </Link>
                        </div>
                        <Link
                            href="/"
                            onClick={closeSidebarAndDropdown}
                            className="block px-4 py-2 rounded hover:bg-red-100 transition"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            onClick={closeSidebarAndDropdown}
                            className="block px-4 py-2 rounded hover:bg-red-100 transition"
                        >
                            About
                        </Link>
                        <div>
                            <button
                                onClick={toggleServicesDropdown}
                                className="w-full flex justify-between items-center text-left px-4 py-2 rounded hover:bg-red-100 transition ease-in-out"
                            >
                                Services
                                <span><IoIosArrowForward /></span>
                            </button>
                            {servicesDropdownOpen && (
                                <div
                                    ref={servicesRef}
                                    style={{ height: dropdownHeight }}
                                    className={`
                                    overflow-hidden transition-all duration-300 ease-in-out pl-8 pt-2 text-gray-700 text-sm
                                `}
                                >

                                    {Services.map((curElm: any) => (
                                        <Link key={curElm.id} href={curElm.link} onClick={closeSidebarAndDropdown} className="block px-4 py-2 rounded hover:bg-red-100 transition">
                                            {curElm.text}
                                        </Link>
                                    ))}


                                </div>
                            )}
                        </div>
                        <Link
                            href="/press_room"
                            onClick={closeSidebarAndDropdown}
                            className="block px-4 py-2 rounded hover:bg-red-100 transition"
                        >
                            Press Room
                        </Link>
                        <Link
                            href="/resources"
                            onClick={closeSidebarAndDropdown}
                            className="block px-4 py-2 rounded hover:bg-red-100 transition"
                        >
                            Resources
                        </Link>
                        <Link
                            href="/case_studies"
                            onClick={closeSidebarAndDropdown}
                            className="block px-4 py-2 rounded hover:bg-red-100 transition"
                        >
                            Case Studies
                        </Link>
                        <Link
                            href="/contact"
                            onClick={closeSidebarAndDropdown}
                            className="block px-4 py-2 rounded hover:bg-red-100 transition"
                        >
                            Contact
                        </Link>
                        <div className='flex justify-center'>
                            <ButtonDark target='_parent' href='/contact' text='Get In Touch' />
                        </div>
                    </nav>
                </div>
                <div className='w-11/12 flex justify-between items-center mx-auto'>
                    {/* Logo */}
                    <div className='w-2/12 py-2'>
                        <Link href="/">
                            <img src='/logo-mob.svg' alt='NavLogo' className='h-full w-9/12' />
                        </Link>
                    </div>

                    <div className='w-3/12 flex justify-end items-center'>
                        <FaBarsStaggered onClick={() => setSidebarOpen(true)} className="text-3xl text-red-700" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarMobile;