import ServiceThreeFaq from '@/components/faq/ServiceThreeFaq';
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import SectorHero from '@/views/sector/components/SectorHero';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { SectorData } from '@/types/sector-d-t';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import DigitalMarketingFooter from '@/layouts/footers/DigitalMarketingFooter';
import SectorOverview from '@/views/sector/components/SectorOverview';
import SectorSolution from '@/views/sector/components/SectorSolution';
import SectorProcess from '@/views/sector/components/SectorProcess';
import SectorPricing from '@/views/sector/components/SectorPricing';

interface SectorDetailProps {
    sector: SectorData;
}

const SectorDetail = ({ sector }: SectorDetailProps) => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider customClass='tp-magic-cursor'>
                <AnimationWrapper>
                    <div id="magic-cursor" className='cursor-bg-red'>
                        <div id="ball"></div>
                    </div>
                    <BackToTop />
                    <InnerPageHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <SectorHero sector={sector} />
                                <SectorOverview data={sector} title="Sector Overview" />
                                <SectorSolution data={sector} title="Our Solutions" />
                                <SectorProcess data={sector} subtitle="Our Process" />
                                <SectorPricing data={sector} />
                                <ServiceThreeFaq faqs={sector.faqs} accordionId={`sector-${sector.slug}`} />
                            </main>
                            <DigitalMarketingFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default SectorDetail;