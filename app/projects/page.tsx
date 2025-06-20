"use client"
import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    { 
        title: 'AFCH Church Website', 
        link: '#', 
        banner: "/images/church.png", 
        alt: "AFCH Church Website Screenshot",
        description: "A modern church website built with responsive design and interactive features for community engagement.",
        tech: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
        category: 'Web Development'
    },
    { 
        title: 'My Blog', 
        link: 'https://techhub-w4l2.vercel.app/', 
        banner: "/images/blog.png", 
        alt: "Tech Blog Screenshot",
        description: "A full-featured blog platform with content management, user authentication, and SEO optimization.",
        tech: ['React', 'MongoDB', 'Express', 'Vercel'],
        category: 'Full-Stack'
    },
    {
        title: 'E-Commerce Platform',
        link: '#',
        banner: "/images/ecommerce.png",
        alt: "E-Commerce Platform Screenshot",
        description: "A complete e-commerce solution with payment integration, inventory management, and analytics dashboard.",
        tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
        category: 'Full-Stack'
    },
    {
        title: 'Portfolio Dashboard',
        link: '#',
        banner: "/file.svg",
        alt: "Portfolio Dashboard Screenshot",
        description: "An admin dashboard for managing portfolio content, projects, and client communications.",
        tech: ['React', 'Chart.js', 'Firebase', 'Material-UI'],
        category: 'Frontend'
    },
    {
        title: 'Mobile Banking App',
        link: '#',
        banner: "/images/banking.png",
        alt: "Mobile Banking App Screenshot",
        description: "A secure mobile banking application with biometric authentication and real-time transactions.",
        tech: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
        category: 'Mobile'
    },
    {
        title: 'AI Chat Assistant',
        link: '#',
        banner: "/images/ai-chat.png",
        alt: "AI Chat Assistant Screenshot",
        description: "An intelligent chatbot powered by AI for customer support and automated responses.",
        tech: ['Python', 'OpenAI API', 'FastAPI', 'Docker'],
        category: 'AI/ML'
    }
];

const categories = ['All', 'Web Development', 'Full-Stack', 'Frontend', 'Mobile', 'AI/ML'];

function Projects() {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const filterProjects = (category: string) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === category));
        }
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-20 px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
                <div className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse delay-1000" />
                
                <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
                            <span className="text-2xl">🚀</span>
                            <span className="text-blue-400 font-medium text-sm tracking-wider">
                                Featured Work
                            </span>
                        </div>
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            What I&apos;ve Built
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        A collection of projects showcasing my expertise in 
                        <span className="text-blue-400 font-semibold"> modern web development</span>, 
                        <span className="text-purple-400 font-semibold"> full-stack solutions</span>, and 
                        <span className="text-cyan-400 font-semibold"> innovative technologies</span>.
                    </p>
                </div>

                {/* Filter Categories */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => filterProjects(category)}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/30 ${
                                activeCategory === category
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                                    : 'bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-blue-400 hover:text-white hover:bg-blue-500/10'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="opacity-0 animate-fadeInUp"
                            style={{ 
                                animationDelay: `${index * 150}ms`,
                                animationFillMode: 'forwards'
                            }}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-20">
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Have a Project in Mind?
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Let&apos;s collaborate and bring your ideas to life with cutting-edge technology and exceptional design.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/contact" 
                                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                            >
                                <span className="flex items-center justify-center">
                                    Get in Touch
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </span>
                            </a>
                            
                            <a 
                                href="/resume.pdf" 
                                className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-bold rounded-xl transition-all duration-300 hover:border-blue-400 hover:text-white hover:bg-blue-500/10 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                            >
                                View Resume
                            </a>
                        </div>
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
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
            `}</style>
        </div>
    );
}

export default Projects;