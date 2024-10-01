import ThreeDCardDemo from "./ui/3dcard";
import { project } from "../app/constants/project";

export default function Projects() {
    return (
        <div className="w-full flex items-center justify-center pb-[16rem]">
            <div className="max-w-7xl ">
                <h1 className="text-4xl font-bold">Projects</h1>
                <div className="flex  flex-wrap items-center justify-around">
                    {project.map((item,index) => (
                        <ThreeDCardDemo index={index} key={item.id} title={item.title} description={item.description} image={item.image} live={item.live} source={item.source} />
                    ))}

                </div>
            </div>
        </div>
    )
}