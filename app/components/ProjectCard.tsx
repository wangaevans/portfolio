import Link from 'next/link';
import React, { useState } from 'react';
import { BiLinkExternal, BiCode, BiGitBranch } from 'react-icons/bi';
import { FaEye, FaGithub } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

type Props = {
    title: string;
    link: string;
    banner: string;
    alt?: string;
    description?: string;
    tech?: string[];
    category?: string;
}

function ProjectCard({ title, link, banner, alt, description, tech, category }: Props) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Fallback image if banner fails to load
    const fallbackImage = "/file.svg";

    return (
        <div 
            className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Category Badge */}
            {category && (
                <div className="absolute top-4 left-4 z-20">
                    <div className="px-3 py-1 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/20">
                        {category}
                    </div>
                </div>
            )}

            {/* Image Section */}
            <div className="relative h-48 overflow-hidden bg-gray-700">
                {/* Loading Skeleton */}
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse">
                        <div className="flex items-center justify-center h-full">
                            <HiSparkles className="text-gray-500 text-2xl animate-spin" />
                        </div>
                    </div>
                )}
                
                <img 
                    src={banner || fallbackImage}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    alt={alt || `${title} project screenshot`}
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                        setImageLoaded(true);
                    }}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-60'
                }`} />
                
                {/* Quick Actions */}
                <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                    isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}>
                    <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black/70 transition-all duration-200 group/btn">
                        <FaEye className="text-white text-sm group-hover/btn:scale-110 transition-transform duration-200" />
                    </button>
                    <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black/70 transition-all duration-200 group/btn">
                        <FaGithub className="text-white text-sm group-hover/btn:scale-110 transition-transform duration-200" />
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Title and Description */}
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {description || "An innovative project showcasing modern development practices and cutting-edge technology solutions."}
                    </p>
                </div>

                {/* Tech Stack */}
                {tech && tech.length > 0 && (
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {tech.slice(0, 4).map((technology, index) => (
                                <span 
                                    key={index}
                                    className="px-3 py-1 bg-gradient-to-r from-gray-700/80 to-gray-800/80 border border-gray-600/50 rounded-lg text-xs font-medium text-gray-300 hover:border-blue-400/50 hover:text-white transition-all duration-200"
                                >
                                    {technology}
                                </span>
                            ))}
                            {tech.length > 4 && (
                                <span className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg text-xs font-medium text-blue-400">
                                    +{tech.length - 4} more
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between">
                    <button className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 group/details">
                        <BiCode className="group-hover/details:rotate-12 transition-transform duration-200" />
                        View Details
                    </button>
                    
                    <div className="flex gap-3">
                        <Link 
                            href="/"
                            className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center gap-1 group/code"
                        >
                            <BiGitBranch className="group-hover/code:rotate-12 transition-transform duration-200" />
                            Code
                        </Link>
                        
                        <a 
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-semibold text-blue-400 hover:text-white transition-colors duration-200 group/preview"
                        >
                            <span>Preview</span>
                            <BiLinkExternal className="group-hover/preview:translate-x-1 group-hover/preview:-translate-y-1 transition-transform duration-200" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
            </div>
        </div>
    );
}

export default ProjectCard;