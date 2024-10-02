import ThreeDCardDemo from "./ui/3dcard";
import { project } from "../app/constants/project";

export default function Projects() {
    return (
        <div className="w-full flex items-center justify-center p-4 pb-[10rem] md:pb-[16rem]">
            <div className="flex flex-col w-full md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
                <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
                <div className="flex  flex-wrap items-center justify-center md:justify-around w-full">
                    {project.map((item,index) => (
                        <ThreeDCardDemo index={index} key={item.id} title={item.title} description={item.description} image={item.image} live={item.live} source={item.source} />
                    ))}

                </div>
            </div>
        </div>
    )
}