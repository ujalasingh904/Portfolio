import { BriefcaseBusiness } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { BsBuildingsFill } from "react-icons/bs";

interface Experience {
    title: string
    company: string
    period: string
    description: string[]
}

const experiences: Experience[] = [
    {
        title: "Full stack developer intern",
        company: "Mnnlr Inc.",
        period: "August 2024 - September 2024",
        description: [
            "Worked on both frontend and backend of Mnnlr service now software",
            "Made the ui from scratch and also added authentication feature",
            "Used MERN tech stack during the internship"
        ]
    },

]

export default function ExperienceSection() {
    return (
        <section className="pb-[16rem] flex items-center justify-center">
            <div className="w-[80rem] flex flex-col space-y-12">
                <h2 className="text-4xl font-bold  mb-12">Experience</h2>
                <div className="space-y-12">
                    {experiences.map((exp,index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-lg shadow-lg space-y-8  text-white border border-gray-800 `}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className='space-y-2'>
                                    <span className='flex items-center space-x-4'>
                                        <BriefcaseBusiness size={24} />
                                        <h3 className="text-2xl font-semibold">{exp.title}</h3>
                                    </span>
                                    <span className='flex items-center space-x-4'>
                                        <BsBuildingsFill size={24} />
                                        <p className="text-lg">{exp.company}</p>
                                    </span>
                                </div>
                                <span className='flex items-center space-x-4'>
                                    <Calendar size={24} />
                                    <p className="text-lg">{exp.period}</p>
                                </span>
                            </div>
                            <ul className="list-disc list-inside space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}