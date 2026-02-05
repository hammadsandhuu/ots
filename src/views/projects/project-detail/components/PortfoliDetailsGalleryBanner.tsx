import { ProjectDetailData } from '@/types/project-d-t';
import Image from 'next/image';

interface PortfoliDetailsGalleryBannerProps {
    project: ProjectDetailData;
}

const PortfoliDetailsGalleryBanner = ({ project }: PortfoliDetailsGalleryBannerProps) => {
    const bannerImage = project.bannerImage || "";

    return (
        <div className="tp-pd-2-area pb-140">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-pd-2-banner">
                            <Image style={{ width: "100%", height: "auto" }} data-speed=".8" src={bannerImage} alt={project.title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfoliDetailsGalleryBanner;