'use client'
import React, { useState } from 'react';

import Link from "next/link";
import { FaBarsStaggered } from 'react-icons/fa6';
import ButtonDark from '../widgets/button_dark';


const NavbarMobile = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <nav className='lg:hidden w-full mx-auto py-2 h-16 sticky top-0 z-40 flex bg-white bg-opacity-80 backdrop-blur-sm'>
                {/* Sidebar */}
                <div className={`fixed inset-y-0 left-0 z-50 h-full w-80 text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out lg:translate-x-0`}>
                    <div className="w-full flex justify-end p-4 bg-white backdrop-blur-lg">

                        <button
                            className="lg:hidden text-gray-400 hover:text-white"
                            onClick={() => setSidebarOpen(false)}>
                            ✖
                        </button>
                    </div>
                    <nav className="space-y-4 bg-white backdrop-blur-sm h-screen text-zinc-800">
                        <div className='w-11/12 flex justify-center items-center h-24'>
                            <Link onClick={() => setSidebarOpen(false)} href="/">
                                <img src='/logo.svg' />
                            </Link>
                        </div>
                        <Link
                            href="/"
                            onClick={() => setSidebarOpen(false)}
                            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setSidebarOpen(false)}
                            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
                        >
                            About
                        </Link>
                        <Link
                            href="/press_room"
                            onClick={() => setSidebarOpen(false)}
                            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
                        >
                            Press Room
                        </Link>
                        <Link
                            href="/resources"
                            onClick={() => setSidebarOpen(false)}
                            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
                        >
                            Resources
                        </Link>
                        <Link
                            href="/case_studies"
                            onClick={() => setSidebarOpen(false)}
                            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
                        >
                            Case Studies
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setSidebarOpen(false)}
                            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
                        >
                            Contact
                        </Link>
                        <div className='flex justify-center'>
                            <ButtonDark href='/contact' text='Get In Touch' />
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
