import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ServiceDetailsTwoProcess from '@/views/services/service-details/components/ServiceDetailsTwoProcess';
import ServiceDetailsTwoPrice from '@/views/services/service-details/components/ServiceDetailsTwoPrice';
import ServiceThreeFaq from '@/components/faq/ServiceThreeFaq';
import ServiceDetailsTwoBanner from '@/views/services/service-details/components/ServiceDetailsTwoBanner';
import ServiceDetailsTwoAbout from '@/views/services/service-details/components/ServiceDetailsTwoAbout';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ServiceSolutionTwo from '@/views/services/service-details/components/ServiceSolutionTwo';
import ServiceOverview from '@/views/services/service-details/components/ServiceOverview';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { ServiceDetailData } from '@/types/service-d-t';
import serviceDetailsData from '@/data/serviceDetailsData';
import DigitalMarketingFooter from '@/layouts/footers/DigitalMarketingFooter';

interface ServiceDetailsTwoMainProps {
    service?: ServiceDetailData;
}

const ServiceDetailsTwoMain = ({ service }: ServiceDetailsTwoMainProps) => {
    const serviceData = service ?? serviceDetailsData[0];
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider>
                <AnimationWrapper>
                    <div id="magic-cursor" className="cursor-bg-red-2">
                        <div id="ball"></div>
                    </div>

                    {/* Global Components */}
                    <BackToTop />
                    <InnerPageHeader />

                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <ServiceDetailsTwoAbout service={serviceData} />
                                <ServiceOverview service={serviceData} />
                                <ServiceSolutionTwo service={serviceData} />
                                <ServiceDetailsTwoProcess service={serviceData} />
                                <ServiceDetailsTwoPrice service={serviceData} />
                                <ServiceThreeFaq faqs={serviceData.faqs} accordionId={`service-${serviceData.slug ?? serviceData.id}`} />
                                {/* <ServiceDetailsTwoBanner service={serviceData} /> */}
                            </main>
                            <DigitalMarketingFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default ServiceDetailsTwoMain;