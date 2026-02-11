import aboutShape from '../../../../../public/assets/img/home-14/about/about-shape.png';
import aboutShape2 from '../../../../../public/assets/img/home-14/about/about-shape-2.png';
import ServiceDetailsTwoCounter from './ServiceDetailsTwoCounter';
import { ButtonShape, CareerShapeTwo } from '@/svg/HeroShape';
import Image from 'next/image';
import { ServiceDetailData } from '@/types/service-d-t';

interface ServiceDetailsTwoAboutProps {
    service: ServiceDetailData;
}

const ServiceDetailsTwoAbout = ({ service }: ServiceDetailsTwoAboutProps) => {
    return (
        <div className="pp-about-area pp-service-details-ptb p-relative">
            <div className="pp-service-details-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pp-service-details-heading tp_fade_anim" data-delay=".3">
                                <h3 className="pp-service-details-title">
                                    {service.title}
                                    <i><CareerShapeTwo /></i>
                                </h3>
                            </div>
                            <div className="pp-service-details-about-wrap ">
                                <div className="pp-about-content tp_text_anim">
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Counter section */}
            <ServiceDetailsTwoCounter service={service} />
        </div>
    );
};

export default ServiceDetailsTwoAbout;