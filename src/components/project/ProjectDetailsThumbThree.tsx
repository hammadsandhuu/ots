import Image from "next/image";
import { ProjectDetailData } from "@/types/project-d-t";
import pdThumb5 from "../../../public/assets/img/portfolio/portfolio-details-2/portfolio-details-thumb-5.jpg";
import pdThumb6 from "../../../public/assets/img/portfolio/portfolio-details-2/portfolio-details-thumb-6.jpg";
import pdThumb7 from "../../../public/assets/img/portfolio/portfolio-details-2/portfolio-details-thumb-7.jpg";

interface ProjectDetailsThumbThreeProps {
    project: ProjectDetailData;
}

const ProjectDetailsThumbThree = ({ project }: ProjectDetailsThumbThreeProps) => {
    const thumbs = project.thumbImages ?? [pdThumb5, pdThumb6, pdThumb7];
    const layout = [
        { col: "col-lg-12" },
        { col: "col-lg-6" },
        { col: "col-lg-6" },
    ];

    return (
        <div className="tp-pd-2-thumb-ptb pb-120">
            <div className="container container-1230">
                <div className="row gx-20">
                    {thumbs.slice(0, 3).map((src, i) => (
                        <div className={layout[i]?.col ?? "col-lg-6"} key={i}>
                            <div className="tp-pd-2-thumb-item mb-20">
                                <Image
                                    style={{ width: "100%", height: "auto" }}
                                    src={src}
                                    alt={`${project.title} - ${i + 1}`}
                                    data-speed=".8"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsThumbThree;
