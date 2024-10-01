"use client"

import { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image' 
import { Button } from "@/components/ui/button"
import img1 from "../app/assets/profile-pic.png" 
import Link from 'next/link'
import img2 from "../app/assets/socials/gg.png"
import img3 from "../app/assets/socials/instagram.png"
import img4 from "../app/assets/socials/leetcode.png"
import img5 from "../app/assets/socials/linkedin.png"
import img6 from "../app/assets/socials/twitter.png"
import img7 from "../app/assets/socials/github.png"

const jobTitles = [
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer"
]


interface LinkProps {
    href: string,
    image: string | StaticImageData,
    alt: string
}

const links: LinkProps[] = [
    {
        href: "https://github.com/ujalasingh904",
        image: img7,
        alt: "Github"
    },
    {
        href: "https://www.linkedin.com/in/ujala-singh-24b2a3264/",
        image: img5,
        alt: "Linkedin"
    },
    {
        href: "https://www.instagram.com/singhujala2003/",
        image: img3,
        alt: "Instagram"
    },
    {
        href: "https://x.com/singhujala2003",
        image: img6,
        alt: "Twitter"
    },
    {
        href: "https://leetcode.com/u/ujalasingh904/",
        image: img4,
        alt: "Leetcode"
    },
    {
        href: "https://www.geeksforgeeks.org/user/ujalasingh904/",
        image: img2,
        alt: "GeeksforGeeks"
    }

]

export default function Home() {
    const [jobTitleIndex, setJobTitleIndex] = useState(0)
    const [displayText, setDisplayText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        let timer: NodeJS.Timeout

        const typeEffect = () => {
            const currentTitle = jobTitles[jobTitleIndex]

            if (!isDeleting) {
                setDisplayText(currentTitle.substring(0, displayText.length + 1))

                if (displayText === currentTitle) {
                    setIsDeleting(true)
                    timer = setTimeout(typeEffect, 1500) // Wait before starting to delete
                } else {
                    timer = setTimeout(typeEffect, 100) // Type speed
                }
            } else {
                setDisplayText(currentTitle.substring(0, displayText.length - 1))

                if (displayText === "") {
                    setIsDeleting(false)
                    setJobTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length)
                }
                timer = setTimeout(typeEffect, 50) // Delete speed
            }
        }

        timer = setTimeout(typeEffect, 100)

        return () => clearTimeout(timer)
    }, [displayText, isDeleting, jobTitleIndex])

    return (
        <div className="py-[16rem] flex items-center justify-center p-4">
            <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left space-y-14">
                    <h1 className="text-4xl md:text-5xl font-semibold text-white mb-2">
                        Hey, I'm <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-transparent bg-clip-text">Ujala Singh</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-6 h-8">
                        {displayText}
                        <span className="animate-blink">|</span>
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start mb-6">
                        <Button variant="default"
                            className="z-30 bg-white rounded-md text-black relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-black after:-left-1 overflow-hidden after:bottom-[50%]  after:rounded-xl after:hover:scale-[100] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 border-2 text-md font-medium hover:text-white"
                        >
                            Contact
                        </Button>

                        <Link
                            target='_blank'
                            href="https://drive.google.com/file/d/1wew5Lq5fhXhe8oDYlpDLL5FylO-sfF7A/view?usp=drive_link">
                            <Button variant="default"
                                className="z-30 bg-black rounded-md text-white relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-white after:-left-1 overflow-hidden after:bottom-[50%]  after:rounded-xl after:hover:scale-[100] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 border-2 font-medium hover:text-black"
                            >RESUME</Button>
                        </Link>
                    </div>
                    <div className="flex gap-4 items-center justify-center md:justify-start text-white">
                        {
                            links.map((link,index) => (
                                <Link href={link.href} target='_blank'
                                    key={index}
                                >
                                    <Image
                                        src={link.image}
                                        alt={link.alt}
                                        className={` ${link.alt === "Leetcode" ? "w-6 h-6" : "w-8 h-8"}  ${link.alt === "Github" ? "rounded-full bg-white" : ""} hover:scale-[1.8] transition-all duration-200`}
                                    />
                                </Link>
                            ))
                        }

                    </div>
                </div>
                <div className="w-48 h-48 md:w-[20rem] md:h-[20rem]  rounded-full overflow-hidden bg-[#2d3748] flex-shrink-0">
                    <Image
                        src={img1}
                        alt="Ujala Singh"
                        width={256}
                        height={256}
                        className=" w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}