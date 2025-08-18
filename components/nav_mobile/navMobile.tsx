'use client'
import React, { useState } from 'react';
import Link from "next/link";
import styles from './navMobile.module.css'
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { MotionDiv, Motionli } from '@/utils/motioDiv';
import Image from 'next/image';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";


const NavbarMobile = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);

    // navbar dropdown
    const openToggle = () => {
        setIsOpen(!isOpen)
    }

    const closeToggle = () => {
        setIsOpen(false)
    }

    //  show hide drop down menu on click
    const openSubMenu = () => {
        setShowDropDown(!showDropDown)
    }

    const closeSubMenu = () => {
        setShowDropDown(false)
    }

    // call both function at time for  any event
    const sublinkClick = () => {
        closeToggle()
        closeSubMenu();
    }

    // useEffect(() => {
    //     const handleClick = () => {
    //         setIsOpen(false);
    //     };

    //     document.body.addEventListener('click', handleClick);

    //     return () => {
    //         document.body.removeEventListener('click', handleClick);
    //     };
    // }, []);




    return (
        <>

            <header className='w-full lg:hidden justify-center relative flex mx-auto'>
                <nav className={isOpen ? `${styles.navMobileClick} w-11/12` : `${styles.navMobile} w-11/12`}>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <div className={`${styles.logo} w-4/12 flex justify-start`}>
                            <Link href="/">
                                <Image height={100} width={100} src='/images/navLogo.svg' alt='NavLogo' className='w-full h-auto' />
                            </Link>
                        </div>
                        <div className={`${styles.icon} w-2/12 flex justify-end`}>
                            <div onClick={openToggle} >
                                {isOpen ? <FaXmark /> : <FaBarsStaggered />}
                            </div>
                        </div>
                    </div>
                    <MotionDiv
                        initial={{
                            height: 0,
                            overflow: 'hidden',
                        }}
                        animate={{
                            height: isOpen ? 'auto' : 0,
                            overflowX: isOpen ? 'visible' : 'hidden',
                        }}
                        transition={{ duration: 0.5 }}>
                        {/* Dropdown Menu */}
                        <ul className='w-full flex flex-col mt-5 justify-center items-end '>
                            <Motionli
                                onClick={closeToggle}
                                initial={{ y: 20, opacity: 0, scale: 0 }}
                                animate={{
                                    y: isOpen ? 0 : 20,
                                    scale: isOpen ? 1 : 0,
                                    opacity: isOpen ? 1 : 0
                                }}
                                transition={{ duration: .5, delay: .1 }}
                                className='nav-link p-3'>
                                <Link className='nav-link' href={'/'}>Home</Link>
                            </Motionli>
                            <Motionli
                                onClick={closeToggle}
                                initial={{ y: 20, opacity: 0, scale: 0 }}
                                animate={{
                                    y: isOpen ? 0 : 20,
                                    scale: isOpen ? 1 : 0,
                                    opacity: isOpen ? 1 : 0
                                }}
                                transition={{ duration: .5, delay: .2 }}
                                className='nav-link p-3'>
                                <Link className='nav-link' href={'/about'}>About</Link>
                            </Motionli>
                            <Motionli

                                initial={{ y: 20, opacity: 0, scale: 0 }}
                                animate={{
                                    y: isOpen ? 0 : 20,
                                    scale: isOpen ? 1 : 0,
                                    opacity: isOpen ? 1 : 0
                                }}
                                transition={{ duration: .5, delay: .3 }}
                                className='p-3 flex justify-between items-center'>
                                <Link
                                    onClick={openSubMenu}
                                    className='nav-link' href={'#'}>Services</Link>
                                <span> {showDropDown ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
                            </Motionli>
                            {showDropDown && (
                                <MotionDiv
                                    initial={{
                                        height: 0,
                                        overflow: 'hidden',
                                    }}
                                    animate={{
                                        height: showDropDown ? 'auto' : 0,
                                        overflowX: showDropDown ? 'visible' : 'hidden',
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className='flex flex-col me-10 h-auto text-sm gap-2 justify-center items-end'>
                                    <li onClick={sublinkClick}><Link href={'/services/graphics'}>Graphic Design</Link></li>
                                    <li onClick={sublinkClick}><Link href={'/services/branding'}>Branding</Link></li>
                                    <li onClick={sublinkClick}><Link href={'/services/ui-ux'}>UI-UX</Link></li>
                                    <li onClick={sublinkClick}><Link href={'/services/development'}>Development</Link></li>
                                </MotionDiv>
                            )}
                            <Motionli
                                onClick={closeToggle}
                                initial={{ y: 20, opacity: 0, scale: 0 }}
                                animate={{
                                    y: isOpen ? 0 : 20,
                                    scale: isOpen ? 1 : 0,
                                    opacity: isOpen ? 1 : 0
                                }}
                                transition={{ duration: .5, delay: .4 }}
                                className='nav-link p-3'>
                                <Link className='nav-link' href={'/portfolio'}>Portfolio</Link>
                            </Motionli>
                            <Motionli
                                onClick={closeToggle}
                                initial={{ y: 20, opacity: 0, scale: 0 }}
                                animate={{
                                    y: isOpen ? 0 : 20,
                                    scale: isOpen ? 1 : 0,
                                    opacity: isOpen ? 1 : 0
                                }}
                                transition={{ duration: .5, delay: .5 }}
                                className='nav-link p-3'>
                                <Link className='nav-link' href={'https://techndesign.blog'}>Blog</Link>
                            </Motionli>
                            <Motionli
                                onClick={closeToggle}
                                initial={{ y: 20, opacity: 0, scale: 0 }}
                                animate={{
                                    y: isOpen ? 0 : 20,
                                    scale: isOpen ? 1 : 0,
                                    opacity: isOpen ? 1 : 0
                                }}
                                transition={{ duration: .5, delay: .6 }}
                                className='nav-link p-3'>
                                <Link className='nav-link' href={'/contact'}>Contact</Link>
                            </Motionli>
                        </ul>
                    </MotionDiv>
                </nav >
            </header >
        </>
    )
}

export default NavbarMobile;
