"use client";
import serviceThumb from '../../../../../public/assets/img/service/service-details/service-details-thumb-1.jpg';
import { CheckIconThree } from '@/svg';
import { useHoverEffect } from '@/hooks/useHoverEffect';
import { ServiceDetailData } from '@/types/service-d-t';

interface ServiceOverviewProps {
    service: ServiceDetailData;
}

const ServiceOverview = ({ service }: ServiceOverviewProps) => {
    const { addToRefs } = useHoverEffect();
    const overviewImage = service.overviewImage ?? serviceThumb;
    const overviewText = service.overviewText ?? service.description;
    const overviewSubtitle = service.overviewSubtitle ?? "Our Approach";
    const overviewFeatures = service.overviewFeatures ?? [];
    const imageSrc = typeof overviewImage === 'string' ? overviewImage : overviewImage.src;

    return (
        <div className="pp-service-details-overview-ptb pt-140 pb-110">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pp-service-details-overview-heading">
                            <h4 className="pp-service-details-overview-title tp_fade_anim" data-delay=".3">Service Overview</h4>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-stretch">
                        <div className="pp-service-details-overview-wrapper h-100">
                            {overviewText && <p>{overviewText}</p>}
                            {overviewSubtitle && <h4>{overviewSubtitle}</h4>}
                            {overviewFeatures.length > 0 && (
                                <div className="pp-service-details-overview-list">
                                    <ul>
                                        {overviewFeatures.map((feature, index) => (
                                            <li key={index}><span><CheckIconThree /></span>{feature}</li>
                                        ))}
                                    </ul>
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
                                    alt={`${service.title} overview`}
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

export default ServiceOverview;