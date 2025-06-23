import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaWhatsapp, FaLinkedin, FaHeart } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';

function Footer() {
    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-16 px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -top-48 -left-48" />
                <div className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -bottom-40 -right-40" />
                
                {/* Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-black mb-4">
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Evans Wanga
                            </span>
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                            Full-Stack Developer crafting exceptional digital experiences with 
                            <span className="text-blue-400"> innovative frontend designs</span> and 
                            <span className="text-purple-400"> robust backend architectures</span>.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <Link 
                                href="https://github.com/wangaevans"
                                className="group p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            >
                                <FaGithub className="text-lg text-gray-400 group-hover:text-white transition-colors duration-300" />
                            </Link>
                            <Link 
                                href="https://twitter.com/wangaonly"
                                className="group p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            >
                                <FaTwitter className="text-lg text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                            </Link>
                            <Link 
                                href="https://wa.me/+254706344456"
                                className="group p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            >
                                <FaWhatsapp className="text-lg text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
                            </Link>
                            <Link 
                                href="#"
                                className="group p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            >
                                <FaLinkedin className="text-lg text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About', href: '/about' },
                                { name: 'Projects', href: '/projects' },
                                { name: 'Skills', href: '/skills' },
                                { name: 'Contact', href: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link 
                                        href={item.href}
                                        className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 transform inline-block relative group"
                                    >
                                        <span className="relative z-10">{item.name}</span>
                                        <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Get in Touch
                        </h4>
                        <div className="space-y-4 text-gray-400">
                            <div className="flex items-center space-x-3 group">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50">
                                    <HiLocationMarker className="text-blue-400 text-sm" />
                                </div>
                                <span className="group-hover:text-white transition-colors duration-300">Nairobi, Kenya</span>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50">
                                    <HiMail className="text-purple-400 text-sm" />
                                </div>
                                <span className="group-hover:text-white transition-colors duration-300">wangaevans84@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50">
                                    <HiPhone className="text-cyan-400 text-sm" />
                                </div>
                                <span className="group-hover:text-white transition-colors duration-300">+254 706 344 456</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                {/* <div className="border-t border-gray-800/50 pt-12 mb-12">
                    <div className="text-center max-w-lg mx-auto">
                        <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Let&apos;s Build Something Amazing Together
                        </h4>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-500"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/30">
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div> */}

                {/* Bottom Bar */}
                <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-gray-400 text-sm flex items-center">
                        <span>© {new Date().getFullYear()} Evans Wanga. Crafted with</span>
                        <FaHeart className="text-red-500 mx-2 text-xs animate-pulse" />
                        <span>in Nairobi, Kenya</span>
                    </div>
                    
                    <div className="flex space-x-6 text-sm text-gray-400">
                        <Link href="/privacy" className="hover:text-white transition-colors duration-300 relative group">
                            Privacy Policy
                            <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors duration-300 relative group">
                            Terms of Service
                            <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                        </Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors duration-300 relative group">
                            Sitemap
                            <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;