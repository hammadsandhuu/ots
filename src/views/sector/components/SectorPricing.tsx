import ServiceDetailsPriceItem from '@/components/price-area/subComponents/ServiceDetailsPriceItem';
import { ArrowTwenty } from '@/svg/ArrowIcons';
import pricePlans from '@/data/priceData';
import { SectorData } from '@/types/sector-d-t';
import { ServiceDetailData } from '@/types/service-d-t';

type PricingData = SectorData | ServiceDetailData;

interface SectorPricingProps {
    data: PricingData;
    title?: string;
    subtitle?: string;
}

const SectorPricing = ({ data, title, subtitle = "pricing plans" }: SectorPricingProps) => {
    const isSector = 'overview' in data;
    
    // Extract pricing plans based on type
    const displayPricingData = isSector
        ? (data as SectorData).pricingPlans || []
        : (data as ServiceDetailData).pricingPlans ?? pricePlans.slice(12, 15);

    const displayTitle = title || "Flexible pricing plans";
    const titleWords = displayTitle.split(' ');
    const titleFirstPart = titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(' ');
    const titleSecondPart = titleWords.slice(Math.ceil(titleWords.length / 2)).join(' ');

    if (displayPricingData.length === 0) return null;

    return (
        <div className="tp-service-5-price-ptb pt-160 pb-140">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-service-5-price-heading service-details d-flex align-items-start pb-70 tp_fade_anim">
                            <div className="ar-about-us-4-title-box d-flex align-items-center mb-20">
                                <span className="tp-section-subtitle pre">{subtitle}</span>
                                <div className="ar-about-us-4-icon">
                                    <ArrowTwenty/>
                                </div>
                            </div>
                            <h3 className="tp-career-title fs-100">
                                {titleFirstPart} <br /> {titleSecondPart}
                            </h3>
                        </div>
                    </div>
                </div>
                
                {displayPricingData.map((item) => (
                    <ServiceDetailsPriceItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default SectorPricing;
