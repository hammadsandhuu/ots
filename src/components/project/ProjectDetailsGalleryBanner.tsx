import Image from "next/image";
import { ProjectDetailData } from "@/types/project-d-t";
import pdThumb from "../../../public/assets/img/portfolio/portfolio-details-2/portfolio-details-thumb-1.jpg";

interface ProjectDetailsGalleryBannerProps {
    project: ProjectDetailData;
}

const ProjectDetailsGalleryBanner = ({ project }: ProjectDetailsGalleryBannerProps) => {
    const bannerImage = project.bannerImage ?? project.image ?? pdThumb;
    return (
        <div className="tp-pd-2-area pb-140">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-pd-2-banner">
                            <Image
                                style={{ width: "100%", height: "auto" }}
                                data-speed=".8"
                                src={bannerImage}
                                alt={project.title}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsGalleryBanner;
