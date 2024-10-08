"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

interface ThreeDCardDemoProps {
    index: number;
    title: string;
    description: string;
    image: string | StaticImageData;
    live: string;
    source: string;
}

export default function ThreeDCardDemo({
    index,
    title,
    description,
    image,
    live,
    source,
}: ThreeDCardDemoProps) {
    return (
        <CardContainer  className="inter-var !w-full flex-shrink">
            <CardBody  className="bg-gray-50/10 text-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white dark:text-white"
                >
                    {title}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-8 dark:text-neutral-300 "
                >
                    {description}
                </CardItem>
                <div className="flex justify-between items-center mt-5">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={live}
                        target="__blank"
                        className=" py-2 text-xs font-normal dark:text-white relative group"
                    >
                        Try now →
                        <span className="absolute rounded-xl bg-white -bottom-1 h-[.1rem] left-0 w-0 group-hover:w-full transition-all duration-300"></span>
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={source}
                        target="__blank"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Source Code
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}


