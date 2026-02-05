import PortfolioDetailsBrandOverview from '@/views/projects/project-detail/components/PortfolioDetailsBrandOverview';
import PortfolioDetailsThumbSlider from '@/views/projects/project-detail/components/PortfolioDetailsThumbSlider';
import PortfoliDetailsGalleryBanner from '@/views/projects/project-detail/components/PortfoliDetailsGalleryBanner';
import PortfolioDetailsThumbThree from '@/views/projects/project-detail/components/PortfolioDetailsThumbThree';
import PortfolioDetailsTwoArea from '@/views/projects/project-detail/components/PortfolioDetailsTwoArea';
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import PortfolioDetailsStep from '@/views/projects/project-detail/components/PortfolioDetailsStep';
import DigitalMarketingFooter from '@/layouts/footers/DigitalMarketingFooter';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import PrevNextArrow from '@/svg/PrevNextArrow';
import { ProjectDetailData } from '@/types/project-d-t';
import { projects } from '@/data/projects/Projects';
import Link from 'next/link';

interface ProjectDetailsProps {
    project: ProjectDetailData;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    // Find prev/next projects
    const currentIndex = projects.findIndex((p) => p.id === project.id);
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider customClass='tp-magic-cursor'>
                <AnimationWrapper>
                    <div id="magic-cursor" className='cursor-bg-red'>
                        <div id="ball"></div>
                    </div>

                    {/* Global Components */}
                    <BackToTop />
                    <InnerPageHeader />

                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {/* Main Content Sections */}
                            <main>
                                <PortfolioDetailsTwoArea project={project} />
                                <PortfoliDetailsGalleryBanner project={project} />
                                <PortfolioDetailsBrandOverview project={project} />
                                <PortfolioDetailsThumbSlider project={project} />
                                <PortfolioDetailsStep project={project} />
                                <PortfolioDetailsThumbThree project={project} />
                                {/* portfolio details np start */}
                                <div className="tp-pd-2-np-ptb pb-120">
                                    <div className="container container-1230">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="tp-pd-2-np-content d-flex justify-content-center align-items-center flex-wrap">
                                                    <div className="tp_fade_anim" data-delay=".3" data-fade-from="top" data-ease="bounce">
                                                        <Link href={prevProject.link}><span><PrevNextArrow direction='left' /></span> Prev Work
                                                        </Link>
                                                    </div>
                                                    <div className="tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                                        <Link href={nextProject.link}>Next Work <span><PrevNextArrow direction='right' /></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            <DigitalMarketingFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default ProjectDetails;