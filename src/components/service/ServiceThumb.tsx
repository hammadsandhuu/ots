import serviceThumb from '../../../public/assets/img/service/service-details/service-details-thumb-2.jpg';
import serviceDetailsThumb from '../../../public/assets/img/service/service-details/service-details-thumb-3.jpg';
import Image from 'next/image';
import { ServiceDetailData } from '@/types/service-d-t';

interface ServiceThumbProps {
    service: ServiceDetailData;
}

const ServiceThumb = ({ service }: ServiceThumbProps) => {
    const [img1, img2] = service.thumbImages ?? [serviceThumb, serviceDetailsThumb];
    return (
        <div className="pp-service-details-thumb-ptb pb-90">
            <div className="container container-1430">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="pp-service-details-thumb fix mb-30">
                            <div className="tp_img_reveal">
                                <Image style={{ width: "100%", height: "auto" }} src={img1} alt={`${service.title} - 1`} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="pp-service-details-thumb fix mb-30">
                            <div className="tp_img_reveal">
                                <Image style={{ width: "100%", height: "auto" }} src={img2} alt={`${service.title} - 2`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceThumb;