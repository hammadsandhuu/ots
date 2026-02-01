import ProjectDetailsBrandOverview from "@/components/project/ProjectDetailsBrandOverview";
import ProjectDetailsThumbSlider from "@/components/project/ProjectDetailsThumbSlider";
import ProjectDetailsThumbThree from "@/components/project/ProjectDetailsThumbThree";
import PortfolioDetailsStep from "@/components/step/PortfolioDetailsStep";
import CursorAndBackgroundProvider from "@/components/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/components/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/Animation/AnimationWrapper";
import CreativeAgencyFooter from "@/layouts/footers/CreativeAgencyFooter";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import InnerPageHeader from "@/layouts/headers/InnerPageHeader";
import PrevNextArrow from "@/svg/PrevNextArrow";
import Link from "next/link";
import ProjectDetailsTwoArea from "@/components/project/ProjectDetailsTwoArea";
import ProjectDetailsGalleryBanner from "@/components/project/ProjectDetailsGalleryBanner";
import { ProjectDetailData } from "@/types/project-d-t";
import { projects } from "@/data/Projects";

interface ProjectDetailsGalleryMainProps {
    project: ProjectDetailData;
}

const ProjectDetailsGalleryMain = ({ project }: ProjectDetailsGalleryMainProps) => {
    const currentIndex = projects.findIndex((p) => p.slug === project.slug);
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
    const nextProject = projects[(currentIndex + 1) % projects.length];

    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider customClass="tp-magic-cursor">
                <AnimationWrapper>
                    <div id="magic-cursor" className="cursor-bg-red">
                        <div id="ball"></div>
                    </div>

                    <BackToTop />
                    <InnerPageHeader />

                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <ProjectDetailsTwoArea project={project} />
                                <ProjectDetailsGalleryBanner project={project} />
                                <ProjectDetailsBrandOverview project={project} />
                                <ProjectDetailsThumbSlider project={project} />
                                <PortfolioDetailsStep />
                                <ProjectDetailsThumbThree project={project} />
                                <div className="tp-pd-2-np-ptb pb-120">
                                    <div className="container container-1230">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="tp-pd-2-np-content d-flex justify-content-center align-items-center flex-wrap">
                                                    <div className="tp_fade_anim" data-delay=".3" data-fade-from="top" data-ease="bounce">
                                                        <Link href={prevProject.link}>
                                                            <span><PrevNextArrow direction="left" /></span> Prev Work
                                                        </Link>
                                                    </div>
                                                    <div className="tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                                        <Link href={nextProject.link}>
                                                            Next Work <span><PrevNextArrow direction="right" /></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            <CreativeAgencyFooter bgColor="#1b1b1d" />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default ProjectDetailsGalleryMain;
