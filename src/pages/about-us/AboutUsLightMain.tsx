import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import AboutUsHero from '@/components/hero-banner/AboutUsHero';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import AboutUsBrand from '@/components/brand/AboutUsBrand';
import DigitalMarketingAbout from '@/components/about/DigitalMarketingAbout';
import DigitalMarketingStep from '@/components/step/DigitalMarketingStep';
import DigitalMarketingService from '@/components/service/DigitalMarketingService';
import DigitalMarketingTeam from '@/components/team/DigitalMarketingTeam';
import DigitalMarketingBrandTwo from '@/components/brand/DigitalMarketingBrandTwo';
import DigitalMarketingFooter from '@/layouts/footers/DigitalMarketingFooter';
import AboutUsBanner from '@/components/banner/AboutUsBanner';

const AboutUsLightMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider>
                <AnimationWrapper>
                    {/* -- Begin magic cursor -- */}
                    <div id="magic-cursor" className="cursor-bg-red-2">
                        <div id="ball"></div>
                    </div>
                    {/* Global Components */}
                    <BackToTop />
                    <InnerPageHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <AboutUsHero />
                                {/* <AboutUsBrand /> */}
                                <AboutUsBanner/>
                                <DigitalMarketingAbout />
                                <DigitalMarketingStep />
                                <DigitalMarketingService />
                                <DigitalMarketingTeam />
                                <DigitalMarketingBrandTwo />
                            </main>
                            <DigitalMarketingFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default AboutUsLightMain;