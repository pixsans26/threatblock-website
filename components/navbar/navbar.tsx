'use client'
import React, { useState } from 'react';
import Link from "next/link";
import styles from './navbar.module.css'
import { HiPaintBrush } from 'react-icons/hi2';
import { RiAdvertisementLine } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';
import { MotionDiv } from '@/utils/motioDiv';
import Image from 'next/image';
import { MdArrowDropDown } from "react-icons/md";
import { FaCode } from 'react-icons/fa';
import { BiArrowToRight } from 'react-icons/bi';
import Button from '../widgets/button_dark';

// import { MotionDiv } from '@/utils/motioDiv';

// const Services = [
//     {
//         id: 1,
//         text: 'Branding',
//         link: '/services/branding',
//         desc: 'Identity and perception shaping',
//         icon: <RiAdvertisementLine size={32} color='#00C4F4' />,
//     },
//     {
//         id: 2,
//         text: 'Graphics Design',
//         link: '/services/graphics',
//         desc: 'Visual communication through imagery',
//         icon: <HiPaintBrush size={32} color='#00C4F4' />,
//     },
//     {
//         id: 3,
//         text: 'UI-UX Design',
//         link: '/services/ui-ux',
//         desc: 'User interface and experience design',
//         icon: <CgWebsite size={32} color='#00C4F4' />,
//     },
//     {
//         id: 4,
//         text: 'Development',
//         link: '/services/development',
//         desc: 'Custom, scalable, user-friendly',
//         icon: <FaCode size={32} color='#00C4F4' />,
//     },

// ]
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (

        <div className='w-full lg:flex justify-center relative hidden'>
            <nav className={`${styles.navbar} w-10/12 flex fixed flex-row justify-between items-center`}>
                <div className={`${styles.logo} w-3/12 px-5 flex justify-start items-center`}>
                    <Link href="/">
                        <Image height={100} width={100} src='/logo.svg' alt='NavLogo' className='w-full h-auto' />
                    </Link>
                </div>
                <div className={`w-6/12 flex justify-end`}>
                    <ul className='flex flex-row justify-center items-center h-16 relative '>
                        <li><Link className={styles.navLink} href="/">Home</Link></li>
                        <li><Link className={styles.navLink} href="/about">About</Link></li>
                        {/* <li className={`flex nav-link justify-start items-center cursor-pointer`} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <Link className={styles.navLink} href='#'>
                                Services <MdArrowDropDown className='text-slate-900' />
                            </Link>
                            {isOpen && (
                                <MotionDiv

                                    initial={{ y: -20, opacity: 0 }}

                                    animate={{
                                        y: isOpen ? 0 : -20,
                                        // scale: isOpen ? 1 : 0,
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                    transition={{ duration: .2 }}

                                    className={`${styles.dropdown}`}>
                                    <div className={`${styles.dropdownContent} w-[800px] grid grid-cols-2 gap-4 backdrop-blur-2xl`}>
                                        {Services.map((service) => (
                                            <span key={service.id} onClick={closeDropdown} >
                                                <Link href={service.link}>
                                                    <div className='flex w-full gap-1 justify-start'>
                                                        <div className='w-2/12 flex justify-center items-center'>
                                                            {service.icon}
                                                        </div>
                                                        <div className='w-10/12 flex flex-col justify-start items-start'>
                                                            <h5 className='w-full font-normal text-gray-800'>{service.text}</h5>
                                                            <div className='w-full text-sm text-pretty font-light text-gray-500'>{service.desc}</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </span>
                                        ))}
                                    </div>
                                </MotionDiv>

                            )}
                        </li> */}
                        <li><Link className={styles.navLink} href="/press_room">Press Room</Link></li>
                        <li><Link className={styles.navLink} href="/resources">Resources</Link></li>
                        <li><Link className={styles.navLink} href="/case_studies">Case Studies</Link></li>
                        <li><Link className={styles.navLink} href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className='w-3/12 flex justify-end pe-1'>
                    <Button href='/contact' text='Get in Touch' />
                </div>

            </nav >
        </div >
    )
}

export default Navbar;