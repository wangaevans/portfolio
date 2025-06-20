"use client"
import React from "react";
// import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Send, User, Mail, MessageSquare } from 'lucide-react';

interface UserSubmitForm {
    name: string;
    email: string;
    message: string;
}

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<UserSubmitForm>();
    
    // const router = useRouter();
    
    const onSubmitForm = async (values: UserSubmitForm) => {
        try {
            const response = await axios.post("/api/contact", values);
            console.log(response);
            if (response.status === 200) {
                reset();
                toast.success("Message sent successfully! 🎉", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                });
            }
        } catch (error:unknown) {
            console.log(error);
            
            toast.error("Error! Please try again! 😞", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
        // Remove automatic redirect - let user decide
        // router.push("/")
    };

    return (
        <div id="contact" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-16 px-4">
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind? Let&apos;s create something amazing together. 
                        Drop me a message and I&apos;ll get back to you as soon as possible.
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"></div>
                </div>

                {/* Contact Form */}
                <div className="relative">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-gray-800/50 rounded-3xl shadow-2xl transform rotate-1 backdrop-blur-sm"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                    
                    <form
                        className="relative bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-gray-700/50"
                        onSubmit={handleSubmit(onSubmitForm)}
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="flex items-center text-sm font-semibold text-gray-200 mb-3">
                                    <User className="w-4 h-4 mr-2 text-blue-400" />
                                    Your Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: "Please enter your name",
                                            },
                                            minLength: {
                                                value: 2,
                                                message: "Name must be at least 2 characters"
                                            }
                                        })}
                                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-900/50 text-white placeholder-gray-400 focus:bg-gray-900/70 focus:outline-none ${
                                            errors.name
                                                ? "border-red-500 focus:border-red-400 ring-4 ring-red-500/20"
                                                : "border-gray-600 focus:border-blue-400 hover:border-gray-500 focus:ring-4 focus:ring-blue-500/20"
                                        }`}
                                    />
                                </div>
                                {errors.name && (
                                    <p className="text-red-400 text-sm mt-1 flex items-center">
                                        <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label htmlFor="mail" className="flex items-center text-sm font-semibold text-gray-200 mb-3">
                                    <Mail className="w-4 h-4 mr-2 text-blue-400" />
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="your.email@example.com"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Please enter your email",
                                            },
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Please enter a valid email address"
                                            }
                                        })}
                                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-900/50 text-white placeholder-gray-400 focus:bg-gray-900/70 focus:outline-none ${
                                            errors.email
                                                ? "border-red-500 focus:border-red-400 ring-4 ring-red-500/20"
                                                : "border-gray-600 focus:border-blue-400 hover:border-gray-500 focus:ring-4 focus:ring-blue-500/20"
                                        }`}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-400 text-sm mt-1 flex items-center">
                                        <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div className="md:col-span-2 space-y-2">
                                <label htmlFor="message" className="flex items-center text-sm font-semibold text-gray-200 mb-3">
                                    <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
                                    Your Message
                                </label>
                                <div className="relative">
                                    <textarea
                                        rows={6}
                                        placeholder="Tell me about your project, ideas, or just say hello..."
                                        {...register("message", {
                                            required: {
                                                value: true,
                                                message: "Please enter your message",
                                            },
                                            minLength: {
                                                value: 10,
                                                message: "Message must be at least 10 characters"
                                            }
                                        })}
                                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-900/50 text-white placeholder-gray-400 focus:bg-gray-900/70 focus:outline-none resize-none ${
                                            errors.message
                                                ? "border-red-500 focus:border-red-400 ring-4 ring-red-500/20"
                                                : "border-gray-600 focus:border-blue-400 hover:border-gray-500 focus:ring-4 focus:ring-blue-500/20"
                                        }`}
                                    />
                                </div>
                                {errors.message && (
                                    <p className="text-red-400 text-sm mt-1 flex items-center">
                                        <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="md:col-span-2 flex justify-center mt-8">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 ${
                                        isSubmitting ? 'animate-pulse' : ''
                                    }`}
                                >
                                    <span className="flex items-center">
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                            </>
                                        )}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="text-center mt-12 text-gray-400">
                    <p className="text-sm">
                        Prefer email? Reach out directly at{' '}
                        <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200">
                            wangaevans84@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;