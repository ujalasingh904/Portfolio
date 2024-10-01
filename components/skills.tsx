"use client";
import Image, { StaticImageData } from "next/image";
import img1 from "@/app/assets/skills/bootstrap.png";
import img2 from "@/app/assets/skills/c.png";
import img3 from "@/app/assets/skills/c++.png";
import img4 from "@/app/assets/skills/css.png";
import img5 from "@/app/assets/skills/expressjs.png";
import img6 from "@/app/assets/skills/git.png";
import img7 from "@/app/assets/skills/github.png";
import img8 from "@/app/assets/skills/html.png";
import img9 from "@/app/assets/skills/java.png";
import img10 from "@/app/assets/skills/js.png";
import img11 from "@/app/assets/skills/mongoDB.png";
import img12 from "@/app/assets/skills/netlify.png";
import img13 from "@/app/assets/skills/nextjs.png";
import img14 from "@/app/assets/skills/nodejs.png";
import img15 from "@/app/assets/skills/postman.png";
import img16 from "@/app/assets/skills/react.png";
import img17 from "@/app/assets/skills/shadcn.png";
import img18 from "@/app/assets/skills/tailwindcss.png";
import img19 from "@/app/assets/skills/thunder.png";
import img20 from "@/app/assets/skills/vercel.png";

interface SkillImageProps {
  src: string | StaticImageData;
  alt: string;
  white?: boolean;
}

const SkillImage = ({ src, alt, white = false }:SkillImageProps) :JSX.Element => (
  <div className={`w-[5rem] h-[5rem] flex items-center justify-center ${white ? 'bg-white' : ''}`}>
    <Image className="w-[5rem]" src={src} alt={alt} />
  </div>
);

export default function Skills() {
  const skillsRow1 = [
    { src: img13, alt: "NextJS", white: true },
    { src: img2, alt: "C" },
    { src: img3, alt: "C++" },
    { src: img4, alt: "CSS" },
    { src: img5, alt: "ExpressJS", white: true },
    { src: img6, alt: "Git" },
    { src: img7, alt: "GitHub", white: true },
    { src: img8, alt: "HTML" },
    { src: img9, alt: "Java" },
    { src: img10, alt: "JavaScript" },
  ];

  const skillsRow2 = [
    { src: img11, alt: "MongoDB" },
    { src: img12, alt: "Netlify" },
    { src: img15, alt: "Postman" },
    { src: img1, alt: "Bootstrap" },
    { src: img14, alt: "NodeJS" },
    { src: img16, alt: "React" },
    { src: img17, alt: "Shadcn", white: true },
    { src: img18, alt: "TailwindCSS" },
    { src: img20, alt: "Vercel", white: true },
    { src: img19, alt: "Thunder" },
  ];

  return (
    <div   className="flex items-center justify-center pb-[16rem]">
      <div className="w-[80rem] space-y-20 overflow-hidden">
        <h1 className="text-4xl font-bold">Skills</h1>
        <div data-aos="zoom-out" data-aos-delay="300" className="space-y-24">
          <div className="flex animate-marquee">
            <div className="flex shrink-0 gap-[6rem]">
              {[...skillsRow1, ...skillsRow1].map((skill, index) => (
                <SkillImage key={index} {...skill} />
              ))}
            </div>
          </div>
          <div className="flex animate-marquee-reverse">
            <div className="flex shrink-0 gap-[6rem]">
              {[...skillsRow2, ...skillsRow2].map((skill, index) => (
                <SkillImage key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

