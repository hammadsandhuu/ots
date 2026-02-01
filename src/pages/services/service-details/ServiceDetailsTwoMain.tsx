import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ServiceDetailsTwoProcess from '@/components/process/ServiceDetailsTwoProcess';
import ServiceDetailsTwoPrice from '@/components/price-area/ServiceDetailsTwoPrice';
import ServiceDetailsTwoBanner from '@/components/banner/ServiceDetailsTwoBanner';
import ServiceDetailsTwoAbout from '@/components/about/ServiceDetailsTwoAbout';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ServiceSolutionTwo from '@/components/service/ServiceSolutionTwo';
import ServiceOverview from '@/components/service/ServiceOverview';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import ServiceThumb from '@/components/service/ServiceThumb';
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
                                <ServiceDetailsTwoBanner service={serviceData} />
                                <ServiceOverview service={serviceData} />
                                <ServiceSolutionTwo service={serviceData} />
                                <ServiceThumb service={serviceData} />
                                <ServiceDetailsTwoProcess service={serviceData} />
                                <ServiceDetailsTwoPrice service={serviceData} />
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