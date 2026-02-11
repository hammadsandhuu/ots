"use client";
import serviceThumb from '../../../../public/assets/img/service/service-details/service-details-thumb-1.jpg';
import { CheckIconThree } from '@/svg';
import { useHoverEffect } from '@/hooks/useHoverEffect';
import { SectorData } from '@/types/sector-d-t';
import { ServiceDetailData } from '@/types/service-d-t';
import { StaticImageData } from 'next/image';

type OverviewData = SectorData | ServiceDetailData;

interface SectorOverviewProps {
    data: OverviewData;
    title?: string;
}

const SectorOverview = ({ data, title = "Overview" }: SectorOverviewProps) => {
    const { addToRefs } = useHoverEffect();
    
    const isSector = 'overview' in data;
    const sector = isSector ? (data as SectorData) : null;
    const service = !isSector ? (data as ServiceDetailData) : null;
    
    const overviewImage = isSector 
        ? sector?.challenge?.image || sector?.solution?.image || serviceThumb
        : service?.overviewImage ?? serviceThumb;
    
    const overviewText = isSector
        ? sector?.overview.description
        : service?.overviewText ?? service?.description;
    
    const overviewSubtitle = isSector
        ? sector?.overview.subtitle
        : service?.overviewSubtitle ?? "Our Approach";
    
    const overviewInfo = isSector ? sector?.overview.info || [] : [];
    const overviewFeatures = isSector
        ? []
        : service?.overviewFeatures ?? [];
    
    const displayTitle = isSector ? `${sector?.title} Overview` : title;
    const imageSrc = typeof overviewImage === 'string' ? overviewImage : overviewImage.src;

    const challengeDescription = isSector ? sector?.challenge?.description : null;
    const solutionDescription = isSector ? sector?.solution?.description : null;

    return (
        <div className="pp-service-details-overview-ptb pt-140 pb-110">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pp-service-details-overview-heading">
                            <h4 className="pp-service-details-overview-title tp_fade_anim" data-delay=".3">
                                {displayTitle}
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-stretch">
                        <div className="pp-service-details-overview-wrapper h-100">
                            {overviewSubtitle && (
                                <span className="tp-pd-3-subtitle mb-20 d-inline-block">{overviewSubtitle}</span>
                            )}
                            {overviewText && (
                                <p className="mb-30">{overviewText}</p>
                            )}
                            {isSector && challengeDescription && (
                                <div className="mb-30">
                                    <h5 className="mb-15" style={{ fontSize: '18px', fontWeight: '600' }}>
                                        {sector?.challenge?.title || "Key Challenges"}
                                    </h5>
                                    <p>{challengeDescription}</p>
                                </div>
                            )}
                            
                            {isSector && solutionDescription && (
                                <div className="mb-30">
                                    <h5 className="mb-15" style={{ fontSize: '18px', fontWeight: '600' }}>
                                        {sector?.solution?.title || "Our Solution"}
                                    </h5>
                                    <p>{solutionDescription}</p>
                                </div>
                            )}
                            
                            {/* Info boxes for sectors */}
                            {isSector && overviewInfo.length > 0 && (
                                <div className="row g-3 mb-30">
                                    {overviewInfo.map((item, index) => (
                                        <div key={index} className="col-6">
                                            <div className="tp-pd-3-overview-info">
                                                <span className="d-block mb-5" style={{ fontSize: '14px', color: '#666' }}>
                                                    {item.label}
                                                </span>
                                                <h6 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>
                                                    {item.value}
                                                </h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                            {/* Features list for services */}
                            {!isSector && overviewFeatures.length > 0 && (
                                <div className="pp-service-details-overview-list">
                                    <ul>
                                        {overviewFeatures.map((feature, index) => (
                                            <li key={index}><span><CheckIconThree /></span>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            
                            {/* Key benefits/highlights */}
                            {isSector && sector?.solutionItems && sector.solutionItems.length > 0 && (
                                <div className="mt-40">
                                    <h5 className="mb-20" style={{ fontSize: '18px', fontWeight: '600' }}>
                                        Key Capabilities
                                    </h5>
                                    <div className="pp-service-details-overview-list">
                                        <ul className="d-flex flex-column list-unstyled">
                                            {sector.solutionItems.slice(0, 4).map((item, index) => (
                                                <li key={index}>
                                                    <span><CheckIconThree /></span>
                                                    {item.titleBr ? `${item.titleBr[0]} ${item.titleBr[1]}` : item.title}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-stretch">
                        <div ref={addToRefs} className="pp-service-details-overview-thumb tp--hover-item text-lg-end h-100">
                            <div
                                className="tp--hover-img"
                                data-displacement="/assets/img/webgl/1.jpg"
                                data-intensity="0.6"
                                data-speedin="1"
                                data-speedout="1"
                            >
                                <img
                                    src={imageSrc}
                                    alt={`${(data as SectorData | ServiceDetailData).title} overview`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectorOverview;
