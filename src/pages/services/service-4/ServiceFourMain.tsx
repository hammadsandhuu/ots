// import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
// import DigitalMarketingBrandTwo from '@/components/brand/DigitalMarketingBrandTwo';
// import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
// import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
// import DigitalMarketingFooter from '@/layouts/footers/DigitalMarketingFooter';
// import ServiceProcessArea from '@/components/process/ServiceProcessArea';
// import ServiceFourHero from '@/components/hero-banner/ServiceFourHero';
// import ServiceFourBanner from '@/components/banner/ServiceFourBanner';
// import InnerServiceFour from '@/components/service/InnerServiceFour';
// import ServiceSolution from '@/components/service/ServiceSolution';
// import ServiceFourBrand from '@/components/brand/ServiceFourBrand';
// import ServicePricing from '@/components/price-area/ServicePricing';
// import BackToTop from '@/components/shared/BackToTop/BackToTop';
// import InnerPageHeader from '@/layouts/headers/InnerPageHeader';

// const ServiceFourMain = () => {
//     return (
//         <ScrollSmoothProvider>
//             <CursorAndBackgroundProvider bgColor='#F8F9FA'>
//                 <AnimationWrapper>
//                     <div id="magic-cursor" className="cursor-bg-red-2">
//                         <div id="ball"></div>
//                     </div>

//                     {/* Global Components */}
//                     <BackToTop />
//                     <InnerPageHeader />

//                     <div id="smooth-wrapper">
//                         <div id="smooth-content">
//                             <main>
//                                 <ServiceFourHero />
//                                 <ServiceFourBanner />
//                                 <ServiceSolution />
//                                 <div className="tp-service-4-padding-area" style={{ backgroundColor: "#F6F8EF" }}>
//                                     <InnerServiceFour />
//                                     <ServiceFourBrand />
//                                     <ServicePricing />
//                                 </div>
//                                 <ServiceProcessArea />
//                                 <DigitalMarketingBrandTwo />
//                             </main>
//                             <DigitalMarketingFooter spacingCls='tp-service-4-padding-area' />
//                         </div>
//                     </div>
//                 </AnimationWrapper>
//             </CursorAndBackgroundProvider>
//         </ScrollSmoothProvider>
//     );
// };

// export default ServiceFourMain;


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
import ServiceFourHero from '@/components/hero-banner/ServiceFourHero';

const DigitalMarketingMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider>
                <AnimationWrapper>
                    <div id="magic-cursor">
                        <div id="ball"></div>
                    </div>
                    <BackToTop />
                    <InnerPageHeader />

                    <div id="smooth-wrapper">
                        <div id="smooth-content" className='body-padding'>
                            {/* Main Content Sections */}
                            <main>
                                
                                <ServiceFourHero />
                                <DigitalMarketingService />
                                <DigitalMarketingBrand />
                                <DigitalMarketingProject />
                                <DigitalMarketingTeam />
                                <DigitalMarketingBrandTwo />
                                <DigitalMarketingTestimonial />
                                <DigitalMarketingBlog />
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