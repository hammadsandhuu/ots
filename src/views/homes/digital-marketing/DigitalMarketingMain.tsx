import DigitalMarketingTestimonial from '@/components/testimonial/DigitalMarketingTestimonial';
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import DigitalMarketingService from '@/components/service/DigitalMarketingService';
import DigitalMarketingBrandTwo from '@/components/brand/DigitalMarketingBrandTwo';
import DigitalMarketingProject from '@/components/project/DigitalMarketingProject';
import DigitalMarketingHero from '@/components/hero-banner/DigitalMarketingHero';
import DigitalMarketingAbout from '@/components/about/DigitalMarketingAbout';
import DigitalMarketingFooter from '@/layouts/footers/DigitalMarketingFooter';
import DigitalMarketingBrand from '@/components/brand/DigitalMarketingBrand';
import DigitalMarketingHeader from '@/layouts/headers/DigitalMarketingHeader';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import DigitalMarketingStep from '@/components/step/DigitalMarketingStep';
import DigitalMarketingBlog from '@/components/blog/DigitalMarketingBlog';
import DigitalMarketingTeam from '@/components/team/DigitalMarketingTeam';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';

const DigitalMarketingMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider>
                <AnimationWrapper>
                    <div id="magic-cursor">
                        <div id="ball"></div>
                    </div>
                    <BackToTop />
                    {/* <DigitalMarketingHeader /> */}
<InnerPageHeader/>
                    <div id="smooth-wrapper">
                        <div id="smooth-content" className='body-padding'>
                            {/* Main Content Sections */}
                            <main>
                                <DigitalMarketingHero />
                                <DigitalMarketingBrandTwo />
                                {/* <DigitalMarketingAbout /> */}
                                <DigitalMarketingStep />
                                <DigitalMarketingService />
                                <DigitalMarketingBrand />
                                <DigitalMarketingProject />
                                <DigitalMarketingTeam />
                                <DigitalMarketingBlog />
                                <DigitalMarketingTestimonial />
                            </main>
                            <DigitalMarketingFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>

    );
};

export default DigitalMarketingMain;