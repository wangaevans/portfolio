'use client';

import React, { useState, useEffect } from 'react';
import config from '@/app/config';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaGithub, FaWhatsapp, FaDownload, FaArrowRight } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    
    const avatar = "https://avatars.githubusercontent.com/u/85017101?v=4";
    const roles = ['Full-Stack Developer', 'Frontend Specialist', 'Backend Engineer', 'Problem Solver'];

    const getGreeting = (): string => {
        const time = new Date().getHours();
        
        if (time >= 5 && time < 12) return 'Good Morning';
        if (time >= 12 && time < 17) return 'Good Afternoon';
        if (time >= 17 && time < 21) return 'Good Evening';
        return 'Good Night';
    };

    useEffect(() => {
        setIsVisible(true);
        
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        const roleInterval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % roles.length);
        }, 3000);

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(roleInterval);
        };
    }, [roles.length]);

    const greeting = getGreeting();

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black pt-20">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0">
                {/* Dynamic Gradient Orbs */}
                <div 
                    className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
                    style={{
                        left: `${15 + mousePosition.x * 0.02}%`,
                        top: `${10 + mousePosition.y * 0.02}%`,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div 
                    className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"
                    style={{
                        right: `${10 + mousePosition.x * 0.015}%`,
                        bottom: `${15 + mousePosition.y * 0.015}%`,
                        transform: 'translate(50%, 50%)'
                    }}
                />
                
                {/* Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                
                {/* Floating Particles */}
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column - Main Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        
                        {/* Greeting Badge */}
                        <div className="inline-block mb-6">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
                                <span className="text-2xl">👋</span>
                                <span className="text-blue-400 font-medium text-sm tracking-wider">
                                    {greeting}, Welcome!
                                </span>
                            </div>
                        </div>
                        
                        {/* Name & Title */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            <span className="block text-white mb-2">
                                I&apos;m <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Evans</span>
                            </span>
                        </h1>
                        
                        {/* Animated Role */}
                        <div className="mb-6 h-12 flex items-center justify-center lg:justify-start">
                            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                                {roles[currentWordIndex]}
                            </span>
                        </div>
                        
                        {/* Location */}
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
                            <HiLocationMarker className="text-blue-400 text-lg" />
                            <span className="text-gray-300">Nairobi, Kenya</span>
                        </div>
                        
                        {/* Description */}
                        <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
                            I craft exceptional digital experiences by combining innovative 
                            <span className="text-blue-400 font-semibold"> frontend designs </span>
                            with robust 
                            <span className="text-purple-400 font-semibold"> backend architectures</span>. 
                            Let&apos;s build something amazing together.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                            <Link 
                                href="/projects" 
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/50 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    View My Work
                                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                            
                            <Link 
                                href="/resume.pdf" 
                                className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-bold rounded-xl transition-all duration-300 hover:border-blue-400 hover:text-white hover:bg-blue-500/10 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                            >
                                <span className="flex items-center justify-center">
                                    <FaDownload className="mr-2 group-hover:animate-bounce" />
                                    Download CV
                                </span>
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start space-x-6">
                            <Link 
                                href="https://github.com/wangaevans"
                                className="group p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            >
                                <FaGithub className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                            </Link>
                            <Link 
                                href="https://twitter.com/wangaonly"
                                className="group p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            >
                                <FaTwitter className="text-xl text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                            </Link>
                            <Link 
                                href="https://wa.me/+254706344456"
                                className="group p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            >
                                <FaWhatsapp className="text-xl text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Avatar & Skills */}
                    <div className="flex flex-col items-center order-1 lg:order-2">
                        
                        {/* Enhanced Avatar */}
                        <div className="relative group mb-8">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                            <div className="relative">
                                <Image 
                                    src={avatar} 
                                    width={200} 
                                    height={200} 
                                    alt="Evans Wanga" 
                                    className="object-cover rounded-full border-4 border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
                                
                                {/* Status Indicator */}
                                <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 animate-pulse">
                                    <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
                                </div>
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="w-full max-w-md">
                            <h3 className="text-center text-xl font-bold text-white mb-6">
                                Tech Stack
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                                {config.skills.slice(0, 9).map((skill, index) => (
                                    <div 
                                        key={index}
                                        className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 hover:from-blue-600/20 hover:to-purple-600/20 rounded-lg p-3 text-center transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-blue-500/50 backdrop-blur-sm"
                                        style={{ 
                                            animationDelay: `${index * 100}ms`,
                                            animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                                        }}
                                    >
                                        <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse" />
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

export default Hero;