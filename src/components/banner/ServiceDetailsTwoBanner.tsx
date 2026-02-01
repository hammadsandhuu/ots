import ServiceBanner from '../../../public/assets/img/service/service-details/service-details-banner.jpg';
import Image from 'next/image';
import { ServiceDetailData } from '@/types/service-d-t';

interface ServiceDetailsTwoBannerProps {
    service: ServiceDetailData;
}

const ServiceDetailsTwoBanner = ({ service }: ServiceDetailsTwoBannerProps) => {
    const bannerImage = service.bannerImage ?? ServiceBanner;
    return (
        <div className="tp-service-4-banner-area p-relative">
            <div className="ar-banner-wrap ar-about-us-4">
                <Image style={{ width: "100%", height: "auto" }} className="w-100" src={bannerImage} alt={`${service.title} banner`} data-speed=".8" />
            </div>
        </div>
    );
};

export default ServiceDetailsTwoBanner;