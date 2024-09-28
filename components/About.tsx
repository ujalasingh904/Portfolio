"use client"
import { FaLocationDot } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

export default function About() {
    return (
        <div className="flex items-center justify-center pb-[16rem]">
            <div className="w-[80rem] space-y-8">
                <h1 className="text-4xl font-[600]">About Me</h1>
                <ul className="space-y-3">
                    <li className="flex space-x-8 items-center">
                        <FaLocationDot className="text-2xl" />
                        <p className="text-xl tracking-wide">Lives in <span className="border-b-2 cursor-pointer"> Gurugram, haryana, India</span> </p>
                    </li>
                    <li className="flex space-x-8 items-center">
                        <FaGraduationCap className="text-2xl" />
                        <p className="text-xl tracking-wide">Pursuing a Bachelor’s degree in <span className="text-blue-600">Computer Science and Engineering</span> from GD Goenaka University, sohna.</p>

                    </li>
                    <li className="flex space-x-8 items-center">
                        <FaTools className="text-2xl" />
                        <p className="text-xl tracking-wide">Primarly work with <span className="text-blue-600">Reactjs, Nextjs, TailwindCss, Node.js, Expressjs, javascript, Mongodb and Typescript</span> </p>
                    </li>
                    <li className="flex space-x-8 items-center">
                        <HiShoppingBag className="text-2xl" />
                        <p className="text-xl tracking-wide">Open to new opportunities and freelancing. Any support is appreciated!</p>

                    </li>
                    <li className="flex space-x-8 items-center">
                        <FaPeopleGroup className="text-2xl" />
                        <p className="text-xl tracking-wide">Always open to collaborating on research or development.</p>

                    </li>
                    <li className="flex space-x-8 items-center">
                        <FaMedal className="text-2xl" />
                        <p className="text-xl tracking-wide">Archery player with a strong interest in badminton</p>

                    </li>
                    <li className="flex space-x-8 items-center">
                        <FaCode className="text-2xl" />
                        <p className="text-xl tracking-wide">Code with music is my therapy</p>

                    </li>

                </ul>
                <p className="text-xl tracking-wide">I am a full-stack developer with expertise in modern web technologies like Reactjs, Nextjs, TailwindCss, Node.js, Expressjs, javascript, Mongodb and Typescript. Currently in my 3rd year of pursuing a B.Tech in Computer Science and Engineering from GD Goenka University, Gurugram, I am passionate about full-stack web development. I describe myself as an enthusiastic, hardworking, and curious learner, always eager to explore new fields in life and technology. Aspiring to become a successful software engineer, I am dedicated to continuous learning and growth in the field of web development.</p>

            </div>
        </div>
    )
}