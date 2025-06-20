"use client"

import Link from 'next/link';
import config from '@/app/config';
import { usePathname } from 'next/navigation';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Header = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-800/50' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Name */}
                    <Link href="/" className="group">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                                <span className="text-white font-bold text-lg">E</span>
                            </div>
                            <span className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors duration-300">
                                Evans
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {config.navigationLinks.map(({ link, name }, index) => {
                            const isActive = pathname === link;
                            return (
                                <Link 
                                    key={index}
                                    href={link} 
                                    className={`
                                        relative px-4 py-2 text-sm font-medium transition-all duration-300
                                        ${isActive 
                                            ? 'text-blue-400' 
                                            : 'text-gray-300 hover:text-white'
                                        }
                                    `}
                                >
                                    {name}
                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center space-x-4">
                        <Link 
                            href="https://github.com/wangaevans"
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            <FaGithub className="text-lg" />
                        </Link>
                        <Link 
                            href="https://twitter.com/wangaonly"
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        >
                            <FaTwitter className="text-lg" />
                        </Link>
                        <Link 
                            href="/contact"
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;