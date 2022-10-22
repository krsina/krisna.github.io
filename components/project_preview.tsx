import Image from "next/image";
const ProjectPreview = () => {
    const title: string = "LycheeBot";
    const desc: string = "Discord bot which checks for manga updates";
    return (
    <div className="flex gap-2">
        <div className="relative w-20 h-20">
            <Image src={"/bitterlychee.png"} layout="fill" />
        </div>
        <div className="my-auto">
            <a href={"/"}className="font-bold underline hover:text-indigo-600">
            {title}
        </a>
        <div>{desc}</div>
        </div>
    </div>
    );
}

export default ProjectPreview;