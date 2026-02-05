import PortfolioDetailsThreeNavigation from '@/views/sector/components/PortfolioDetailsThreeNavigation';
import PortfolioDetailsThreePortfolio from '@/views/sector/components/PortfolioDetailsThreePortfolio';
import PortfolioDetailsThreeGalleryTwo from '@/views/sector/components/PortfolioDetailsThreeGalleryTwo';
import PortfolioDetailsThreeOverview from '@/views/sector/components/PortfolioDetailsThreeOverview';
import PortfolioDetailsThreeGallery from '@/views/sector/components/PortfolioDetailsThreeGallery';
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import PortfolioDetailsThree from '@/views/sector/components/PortfolioDetailsThree';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { SectorData } from '@/types/sector-d-t';
import { getRelatedSectors } from '@/data/sectors/Sectors';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import DigitalMarketingFooter from '@/layouts/footers/DigitalMarketingFooter';

interface SectorDetailProps {
    sector: SectorData;
}

const SectorDetail = ({ sector }: SectorDetailProps) => {
    const relatedSectors = getRelatedSectors(sector.slug, 2);

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
                            {/* Main Content Sections */}
                            <main>
                                <PortfolioDetailsThree sector={sector} />
                                <PortfolioDetailsThreeOverview sector={sector} />
                                <PortfolioDetailsThreePortfolio sector={sector} />
                                <PortfolioDetailsThreeGallery sector={sector} />
                                
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