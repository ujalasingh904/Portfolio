import { GraduationCap, Calendar, MapPin, Award, BarChart2 } from "lucide-react"

interface EducationItemProps {
    degree: string
    institution: string
    location: string
    cgpa: string
    maxcgpa?: string
    year: string
    achievements: string[]
}

const EducationArray: EducationItemProps[] = [
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "GD Goenka University",
        location: "sohna, Haryana,India",
        year: "2022 - 2026",
        cgpa: "9.0",
        maxcgpa: "10",
        achievements: [
            "Ranked 3rd in internal SIH hackathon,2024",
            "Awarded with scholarship in 1st and 2nd year for academic excellence",
        ]
    },
    {
        degree: "Senior Secondary School",
        institution: "Global Public School",
        location: "gurugram, Haryana,India",
        year: "2020 - 2021",
        cgpa: "86.4%",
        maxcgpa: "100%",
        achievements: [
            "Ranked in top 10% of the class",
        ]
    },
    {
        degree: "High School",
        institution: "Global Public School",
        location: "gurugram, Haryana,India",
        year: "2018 - 2019",
        cgpa: "91.2%",
        maxcgpa: "100%",
        achievements: [
            "Ranked in top 5% of the class", 
            "Awarded 2 Trophies for scoring more than 90% in board exams"
        ]
    },
]

export default function Education() {
    return (
        <section className="pb-[10rem] md:pb-[16rem] p-4 flex items-center justify-center">
            <div className="w-full md:max-w-5xl lg:max-w-6xl xl:max-w-7xl flex flex-col space-y-12">
                <h2 className="text-2xl md:text-4xl font-bold  mb-12">Education</h2>
                <div className="space-y-12">

                    {
                        EducationArray.map((item, index) => (
                            <div data-aos={`${index%2==0?"fade-right":"fade-left"}`} data-aos-delay={`${index*200}`} key={index} 
                            className='p-3 sm:p-4 md:p-8 rounded-lg shadow-lg space-y-4 md:space-y-8  text-white border border-gray-800'>
                                <div className="flex flex-col md:flex-row justify-between md:items-center space-y-2 md:space-y-0">
                                    <h1 className="text-sm md:text-2xl flex items-center gap-x-2">
                                        <GraduationCap  className="w-[1.1rem] md:w-[2rem] "  />
                                        {item.degree}
                                    </h1>
                                    <p className="flex justify-start items-center gap-x-2">
                                        <Calendar  className="w-[1.1rem] md:w-[2rem]" />
                                        {item.year}
                                    </p>

                                </div>
                                <div className="text-sm md:text-lg space-y-2">
                                    <p className="flex items-center gap-x-2">
                                        <MapPin  className="w-[1.1rem] md:w-[2rem]" />
                                        {item.institution}, {item.location}
                                    </p>

                                    <p className="flex items-center gap-x-2"><BarChart2 />
                                        CGPA: {item.cgpa}/{item.maxcgpa}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h1 className="flex items-center gap-x-2">
                                        <Award className="w-[1.1rem] md:w-[2rem]"  />
                                        Achievements</h1>
                                    <ul className='list-disc list-inside space-y-2 text-sm md:text-lg'>
                                        {
                                            item.achievements.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }



                </div>

            </div>
        </section>
    )
}