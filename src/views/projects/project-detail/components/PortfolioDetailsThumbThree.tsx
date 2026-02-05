import { ProjectDetailData } from '@/types/project-d-t';
import Image from "next/image";
interface PortfolioDetailsThumbThreeProps {
    project: ProjectDetailData;
}

const PortfolioDetailsThumbThree = ({ project }: PortfolioDetailsThumbThreeProps) => {
    const projectThumbs = project.thumbImages || [];

    const thumbs = [
        { id: 1, src: projectThumbs[0] || "", col: "col-lg-12" },
        { id: 2, src: projectThumbs[1] || "", col: "col-lg-6" },
        { id: 3, src: projectThumbs[2] || "", col: "col-lg-6" },
    ];

    return (
        <div className="tp-pd-2-thumb-ptb pb-120">
            <div className="container container-1230">
                <div className="row gx-20">
                    {thumbs.map((thumb) => (
                        <div className={thumb.col} key={thumb.id}>
                            <div className="tp-pd-2-thumb-item mb-20">
                                <Image
                                    style={{ width: "100%", height: "auto" }}
                                    src={thumb.src}
                                    alt={`${project.title} - gallery ${thumb.id}`}
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

export default PortfolioDetailsThumbThree;
