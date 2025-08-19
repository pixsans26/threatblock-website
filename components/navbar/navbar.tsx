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


// ]
const Navbar = () => {

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