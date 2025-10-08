// components/Footer.jsx

import { FaLinkedin, FaX } from 'react-icons/fa6';
import Button from './widgets/button_white';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    // const quickLinks = ['Home', 'About', 'Services', 'Blogs'];
    // const resources = ['Contact Us', 'Privacy Policy', 'Terms & Condition', 'Careers', 'Teams', 'Blogs'];

    const socialLinks = [
        { icon: <FaX size={20} />, href: 'https://x.com/threatblock' },
        { icon: <FaLinkedin size={20} />, href: 'http://linkedin.com/company/threatblock/' }
    ];

    return (
        <section>
            <div className='w-full flex h-auto mb-[-1px]'>
                <Image src='/images/footer-bg.png' height={100} width={1000} alt='footer-bg' className='w-full lg:flex hidden' />
                <Image src='/images/footer-mob-bg.png' height={100} width={1000} alt='footer-bg' className='w-full lg:hidden flex' />
            </div>

            <footer className="w-full bg-gradient-to-b from-[#250000] to-[#120000] text-white ">

                <div className="lg:w-10/12 w-11/12 mx-auto pb-8 sm:px-6 lg:px-8">
                    {/* Main footer content */}
                    <div className="lg:flex justify-between">

                        {/* Column 1: Brand and Contact Button */}
                        <div className="lg:w-5/12 w-full flex flex-col lg:items-start items-center mb-14">
                            <div className='mb-2'>
                                <Image src='/logo-white.svg' width={300} height={100} alt='logo' />
                            </div>
                            <h3 className="text-xl lg:text-xl font-extrabold tracking-tight mb-6">
                                DEFENDING TOMORROW, TODAY
                            </h3>
                            <Button href='/contact' text='Contact Now' />
                        </div>

                        <div className='lg:w-7/12 w-full grid lg:grid-cols-3 grid-cols-2 gap-10'>
                            {/* Column 2: Quick Links */}
                            <div>
                                <h4 className="font-semibold tracking-wider text-gray-300 uppercase mb-4">Quick Links</h4>
                                <ul className="space-y-3">

                                    <li>
                                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                            About
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="https://threatblock.typeflo.io/" className="text-gray-400 hover:text-white transition-colors">
                                            Blogs
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                            {/* Column 3: Resources */}
                            <div>
                                <h4 className="font-semibold tracking-wider text-gray-300 uppercase mb-4">Resources</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy_policy" className="text-gray-400 hover:text-white transition-colors">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms_condition" className="text-gray-400 hover:text-white transition-colors">
                                            Terms & Condition
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                                            Careers
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/about#teams" className="text-gray-400 hover:text-white transition-colors">
                                            Teams
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 4: Contact Info */}
                            <div>
                                <h4 className="font-semibold tracking-wider text-gray-300 uppercase mb-4">Contact</h4>
                                <div className="text-gray-400 space-y-3">
                                    <div className="font-semibold text-white">Office- Delhi</div>
                                    <span>2nd Floor, 67, Satya Niketan, New Delhi, Delhi 110021</span>
                                    <span>+91 922 023 3681</span>
                                </div>
                                <div className="flex items-center space-x-4 mt-6">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className="text-gray-400 border border-gray-600 rounded-md p-2 hover:text-white hover:border-white transition-all"
                                            aria-label={`Follow us on ${social.href}`}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

                {/* Bottom copyright section */}
                <div className="w-full text-center bg-[#1A0D0D] lg:py-10 py-5">
                    <span className="text-gray-400 text-sm">
                        © 2025 ThreatBlock All right reserved.
                    </span>

                </div>
            </footer>
        </section>
    );
};

export default Footer;