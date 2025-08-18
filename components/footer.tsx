// components/Footer.jsx
import { ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
    const quickLinks = ['Home', 'About', 'Services', 'Blogs'];
    const resources = ['Contact Us', 'Privacy Policy', 'Terms & Condition', 'Careers', 'Teams', 'Blogs'];

    const socialLinks = [
        { icon: <Instagram size={20} />, href: '#' },
        { icon: <Facebook size={20} />, href: '#' },
        { icon: <Youtube size={20} />, href: '#' },
    ];

    return (
        <footer className="bg-[#1a0e0e] text-white pt-20 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: Brand and Contact Button */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <h2 className="text-2xl font-bold text-red-600 mb-2">
                            <span className="text-white">Threat</span>Block
                        </h2>
                        <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-6">
                            DEFENDING TOMORROW, TODAY
                        </h3>
                        <button className="bg-white text-black font-semibold py-3 px-5 rounded-full inline-flex items-center gap-3 transition-transform hover:scale-105">
                            <span className="bg-red-600 text-white rounded-full p-1">
                                <ArrowRight size={16} />
                            </span>
                            CONTACT US
                        </button>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-semibold tracking-wider text-gray-300 uppercase mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h4 className="font-semibold tracking-wider text-gray-300 uppercase mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {resources.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="font-semibold tracking-wider text-gray-300 uppercase mb-4">Contact</h4>
                        <div className="text-gray-400 space-y-3">
                            <p className="font-semibold text-white">Office- Delhi</p>
                            <p>2nd Floor, 67, Satya Niketan, New Delhi, Delhi 110021</p>
                            <p>+91 922 023 3681</p>
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

                {/* Bottom copyright section */}
                <div className="mt-16 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-500 text-sm">
                        © 2025 ThreatBlock All right reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;