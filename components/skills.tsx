// "use client"
// import Image from "next/image"
// import img1 from "../app/assets/skills/bootstrap.png"
// import img2 from "../app/assets/skills/c.png"
// import img3 from "../app/assets/skills/c++.png"
// import img4 from "../app/assets/skills/css.png"
// import img5 from "../app/assets/skills/expressjs.png"
// import img6 from "../app/assets/skills/git.png"
// import img7 from "../app/assets/skills/github.png"
// import img8 from "../app/assets/skills/html.png"
// import img9 from "../app/assets/skills/java.png"
// import img10 from "../app/assets/skills/js.png"
// import img11 from "../app/assets/skills/mongoDB.png"
// import img12 from "../app/assets/skills/netlify.png"
// import img13 from "../app/assets/skills/nextjs.png"
// import img14 from "../app/assets/skills/nodejs.png"
// import img15 from "../app/assets/skills/postman.png"
// import img16 from "../app/assets/skills/react.png"
// import img17 from "../app/assets/skills/shadcn.png"
// import img18 from "../app/assets/skills/tailwindcss.png"
// import img19 from "../app/assets/skills/thunder.png"
// import img20 from "../app/assets/skills/vercel.png"

// export default function Skills() {
//     return (
//         <div className="flex items-center justify-center pb-[16rem]">
//             <div className="w-[80rem] space-y-12">
//                 <h1 className="text-4xl font-bold">Skills</h1>
//                 <div className="flex flex-col gap-y-12">
//                     <div className="flex justify-between">
//                         <div className="bg-white w-[5rem] h-[5rem] flex object-cover items-center justify-center">
//                             <Image className="w-[5rem]" src={img13} alt="NextJS" />
//                         </div>
//                         <Image className="w-[5rem]" src={img2} alt="C" />
//                         <Image className="w-[5rem]" src={img3} alt="C++" />
//                         <Image className="w-[5rem]" src={img4} alt="CSS" />
//                         <div className="bg-white w-[5rem] h-[5rem] flex object-cover items-center justify-center"><Image className="w-[5rem]" src={img5} alt="ExpressJS" /></div>
//                         <Image className="w-[5rem]" src={img6} alt="Git" />
//                         <div className="bg-white w-[5rem] h-[5rem] flex object-cover items-center justify-center">
//                             <Image className="w-[5rem]" src={img7} alt="GitHub" />
//                         </div>
//                         <Image className="w-[5rem]" src={img8} alt="HTML" />
//                         <Image className="w-[5rem]" src={img9} alt="Java" />
//                         <Image className="w-[5rem]" src={img10} alt="JavaScript" />
//                     </div>

//                     <div className="flex justify-between">

//                         <Image className="w-[5rem]" src={img11} alt="MongoDB" />
//                         <Image className="w-[5rem]" src={img12} alt="Netlify" />
//                         <Image className="w-[5rem]" src={img15} alt="Postman" />

//                         <Image className="w-[5rem]" src={img1} alt="Bootstrap" />
//                         <Image className="w-[5rem]" src={img14} alt="NodeJS" />
//                         <Image className="w-[5rem]" src={img16} alt="React" />
//                         <div className="bg-white w-[5rem] h-[5rem] flex object-cover items-center justify-center">
//                             <Image className="w-[5rem]" src={img17} alt="Shadcn" />
//                         </div>
//                         <Image className="w-[5rem]" src={img18} alt="TailwindCSS" />
//                         <div className="bg-white w-[5rem] h-[5rem] flex object-cover items-center justify-center"><Image className="w-[5rem]" src={img20} alt="Vercel" /></div>
//                         <Image className="w-[5rem]" src={img19} alt="Thunder" />

//                     </div>

//                 </div>

//             </div>
//         </div>
//     )
// }


"use client";
import Image from "next/image";
import img1 from "../app/assets/skills/bootstrap.png";
import img2 from "../app/assets/skills/c.png";
import img3 from "../app/assets/skills/c++.png";
import img4 from "../app/assets/skills/css.png";
import img5 from "../app/assets/skills/expressjs.png";
import img6 from "../app/assets/skills/git.png";
import img7 from "../app/assets/skills/github.png";
import img8 from "../app/assets/skills/html.png";
import img9 from "../app/assets/skills/java.png";
import img10 from "../app/assets/skills/js.png";
import img11 from "../app/assets/skills/mongoDB.png";
import img12 from "../app/assets/skills/netlify.png";
import img13 from "../app/assets/skills/nextjs.png";
import img14 from "../app/assets/skills/nodejs.png";
import img15 from "../app/assets/skills/postman.png";
import img16 from "../app/assets/skills/react.png";
import img17 from "../app/assets/skills/shadcn.png"
import img18 from "../app/assets/skills/tailwindcss.png";
import img19 from "../app/assets/skills/thunder.png";
import img20 from "../app/assets/skills/vercel.png";

export default function Skills() {
    return (
        <div className="flex items-center justify-center pb-[16rem]">
            <div className="w-[80rem] space-y-20 overflow-hidden">

                <h1 className="text-4xl font-bold">Skills</h1>

                <div className="space-y-24">
                    <div className="flex w-full justify-between gap-[6rem] marquee1">
                        <div className="bg-white w-[5rem] h-[5rem] flex object-cover items-center justify-center">
                            <Image className="w-[5rem]" src={img13} alt="NextJS" />
                        </div>
                        <Image className="w-[5rem]" src={img2} alt="C" />
                        <Image className="w-[5rem]" src={img3} alt="C++" />
                        <Image className="w-[5rem]" src={img4} alt="CSS" />
                        <div className="bg-white w-[5rem] h-[5rem] flex object-cover items-center justify-center">
                            <Image className="w-[5rem]" src={img5} alt="ExpressJS" />
                        </div>
                        <Image className="w-[5rem]" src={img6} alt="Git" />
                        <div className="bg-white w-[5rem] h-[5rem] flex object-cover items-center justify-center">
                            <Image className="w-[5rem]" src={img7} alt="GitHub" />
                        </div>
                        <Image className="w-[5rem]" src={img8} alt="HTML" />
                        <Image className="w-[5rem]" src={img9} alt="Java" />
                        <Image className="w-[5rem]" src={img10} alt="JavaScript" />
                    </div>

                    <div className="flex w-full justify-between gap-[6rem] marquee2">
                        <Image className="w-[5rem]" src={img11} alt="MongoDB" />
                        <Image className="w-[5rem]" src={img12} alt="Netlify" />
                        <Image className="w-[5rem]" src={img15} alt="Postman" />
                        <Image className="w-[5rem]" src={img1} alt="Bootstrap" />
                        <Image className="w-[5rem]" src={img14} alt="NodeJS" />
                        <Image className="w-[5rem]" src={img16} alt="React" />
                        <div className="bg-white w-[5rem] h-[5rem] flex object-cover items-center justify-center">
                            <Image className="w-[5rem]" src={img17} alt="Shadcn" />
                        </div>
                        <Image className="w-[5rem]" src={img18} alt="TailwindCSS" />
                        <div className="bg-white w-[5rem] h-[5rem] flex object-cover items-center justify-center">
                            <Image className="w-[5rem]" src={img20} alt="Vercel" />
                        </div>
                        <Image className="w-[5rem]" src={img19} alt="Thunder" />
                    </div>
                </div>




            </div>
        </div>
    );
}

// flex w-full justify-between gap-[6rem] 

