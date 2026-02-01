import serviceThumb from '../../../public/assets/img/service/service-details/service-details-thumb-1.jpg';
import { CheckIconThree } from '@/svg';
import Image from 'next/image';
import { ServiceDetailData } from '@/types/service-d-t';

interface ServiceOverviewProps {
    service: ServiceDetailData;
}

const ServiceOverview = ({ service }: ServiceOverviewProps) => {
    const overviewImage = service.overviewImage ?? serviceThumb;
    const overviewText = service.overviewText ?? service.description;
    const overviewSubtitle = service.overviewSubtitle ?? "Our Approach";
    const overviewFeatures = service.overviewFeatures ?? [];

    return (
        <div className="pp-service-details-overview-ptb pt-140 pb-110">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pp-service-details-overview-heading">
                            <h4 className="pp-service-details-overview-title tp_fade_anim" data-delay=".3">Service Overview</h4>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="pp-service-details-overview-wrapper">
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
                    <div className="col-lg-6">
                        <div className="pp-service-details-overview-thumb text-lg-end">
                            <div className="tp_img_reveal">
                                <Image src={overviewImage} alt={`${service.title} overview`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceOverview;