"use client"

import Link from "next/link"

export default function Navbar() {
    return (
        <div className="w-full flex justify-center fixed top-0 p-6 ">
            <div className="max-w-[30rem] mx-auto flex justify-center  border-4 rounded-full p-5 px-7 shadow-3xl ">
                <ul className="flex space-x-6">
                    <li className="relative group">
                        <Link href="/">Home</Link>
                        <span className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full" />
                    </li>
                    <li className="relative group">
                        <Link href="/about">About</Link>
                        <span className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full" />
                    </li>
                    <li className="relative group">
                        <Link href="/skills">Skills</Link>
                        <span className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full" />
                    </li>
                    <li className="relative group">
                        <Link href="/projects">Projects</Link>
                        <span className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full" />
                    </li>
                    <li className="relative group">
                        <Link href="/experience">Experience</Link>
                        <span className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full" />
                    </li>
                    <li className="relative group">
                        <Link href="/socials">Socials</Link>
                        <span className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full" />
                    </li>
                </ul>

            </div>
        </div>
    )
}