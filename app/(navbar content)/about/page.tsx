"use client";
import { FaLocationDot } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

export default function About() {
    const infoItems = [
        { icon: FaLocationDot, text: 'Lives in', highlight: 'Gurugram, Haryana, India', highlightClass: 'border-b-2 cursor-pointer' },
        { icon: FaGraduationCap, text: 'Pursuing a Bachelor’s degree in', highlight: 'Computer Science and Engineering', highlightClass: 'text-blue-600', additionalText: 'from GD Goenka University, Sohna.' },
        { icon: FaTools, text: 'Primarily work with', highlight: 'React.js, Next.js, Tailwind CSS, Node.js, Express.js, JavaScript, MongoDB, and TypeScript', highlightClass: 'text-blue-600' },
        { icon: HiShoppingBag, text: 'Open to new opportunities and freelancing. Any support is appreciated!' },
        { icon: FaPeopleGroup, text: 'Always open to collaborating on research or development.' },
        { icon: FaMedal, text: 'Archery player with a strong interest in badminton' },
        { icon: FaCode, text: 'Code with music is my therapy' }
    ];

    return (
        <div className="flex items-center justify-center  min-h-screen bg-black text-white p-4">
            <div className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl space-y-8">
                <h1 className="text-2xl md:text-4xl font-semibold">About Me</h1>
                <div data-aos="fade-up"  data-aos-delay="300" className="space-y-8">
                    <ul  className="space-y-3">
                        {infoItems.map(({ icon: Icon, text, highlight, highlightClass, additionalText }, index) => (
                            <li key={index} className="flex space-x-4 md:space-x-8 items-center">
                                <div><Icon className="text-base md:text-2xl" /></div>
                                <p className="text-sm sm:text-md md:text-xl tracking-wide">
                                    {text} {highlight && <span className={highlightClass}>{highlight}</span>} {additionalText}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <p  className="text-sm sm:text-md md:text-xl tracking-wide">
                        I am a full-stack developer with expertise in modern web technologies like  React.js, Next.js, Tailwind CSS, Node.js, Express.js, JavaScript, MongoDB, and TypeScript.
                        Currently in my 3rd year of pursuing a B.Tech in Computer Science and Engineering from GD Goenka University, Gurugram, I am passionate about full-stack web development.
                        I describe myself as an enthusiastic, hardworking, and curious learner, always eager to explore new fields in life and technology. Aspiring to become a successful software engineer, I am dedicated to continuous learning and growth in the field of web development.
                    </p>
                </div>
            </div>
        </div>
    );
}
