"use client"

import Link from 'next/link';
import config from '@/app/config';
import { usePathname } from 'next/navigation';
import { FaTwitter, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Header = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside or on a link
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (isMobileMenuOpen && !(event.target as HTMLElement).closest('.mobile-menu-container')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [isMobileMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
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

                        {/* Desktop Social Links */}
                        <div className="hidden md:flex items-center space-x-4">
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

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden text-white text-xl p-2 hover:text-blue-400 transition-colors duration-300"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden">
                    <div 
                        className="mobile-menu-container fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out"
                        style={{ transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
                            <span className="text-white font-bold text-xl">Menu</span>
                            <button
                                onClick={closeMobileMenu}
                                className="text-white text-xl p-2 hover:text-blue-400 transition-colors duration-300"
                                aria-label="Close mobile menu"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Mobile Menu Content */}
                        <div className="p-6 space-y-6">
                            {/* Navigation Links */}
                            <nav className="space-y-4">
                                {config.navigationLinks.map(({ link, name }, index) => {
                                    const isActive = pathname === link;
                                    return (
                                        <Link 
                                            key={index}
                                            href={link}
                                            onClick={closeMobileMenu}
                                            className={`
                                                block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300
                                                ${isActive 
                                                    ? 'text-blue-400 bg-blue-500/10' 
                                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                                }
                                            `}
                                        >
                                            {name}
                                        </Link>
                                    );
                                })}
                            </nav>

                            {/* Social Links */}
                            <div className="border-t border-gray-800/50 pt-6">
                                <h3 className="text-gray-400 text-sm font-medium mb-4">Connect</h3>
                                <div className="space-y-3">
                                    <Link 
                                        href="https://github.com/wangaevans"
                                        onClick={closeMobileMenu}
                                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                                    >
                                        <FaGithub className="text-lg" />
                                        <span>GitHub</span>
                                    </Link>
                                    <Link 
                                        href="https://twitter.com/wangaonly"
                                        onClick={closeMobileMenu}
                                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                                    >
                                        <FaTwitter className="text-lg" />
                                        <span>Twitter</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Button */}
                            <Link 
                                href="/contact"
                                onClick={closeMobileMenu}
                                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center font-medium rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;