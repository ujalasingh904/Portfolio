"use client";

import Link from 'next/link';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <div className="w-full flex justify-center fixed top-0 p-6 z-[1000] text-white">
                <div className="max-w-[30rem] mx-auto flex justify-center  border-4 rounded-full p-5 px-7 shadow-3xl backdrop-blur-xl">
                    <ul className="flex space-x-6">
                        <li className="relative group new">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="relative group new">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="relative group new">
                            <Link href="/skills">Skills</Link>
                        </li>
                        <li className="relative group new">
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className="relative group new">
                            <Link href="/education">Education</Link>
                        </li>
                        <li className="relative group new">
                            <Link href="/socials">Contact</Link>
                        </li>
                    </ul>

                </div>
            </div>
            {children}
        </main>
    );
}
