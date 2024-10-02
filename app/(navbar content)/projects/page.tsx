import ThreeDCardDemo from "../../../components/ui/3dcard";
import { project } from "../../../app/constants/project";

export default function Projects() {
    return (
        <div className="w-full flex items-center justify-center p-4 py-[10rem] md:py-[16rem]  min-h-screen bg-black ">
            <div className="w-full md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
                <h1 className="text-2xl md:text-4xl font-bold text-white">Projects</h1>
                <div className="flex  flex-wrap items-center justify-center md:justify-around">
                    {project.map((item, index) => (
                        <ThreeDCardDemo index={index} key={item.id} title={item.title} description={item.description} image={item.image} live={item.live} source={item.source} />
                    ))}

                </div>
            </div>
        </div>
    )
}