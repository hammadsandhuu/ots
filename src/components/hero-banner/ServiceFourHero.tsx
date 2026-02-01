import { CareerShape } from '@/svg/HeroShape';

const ServiceFourHero = () => {
    return (
        <div className="tp-service-4-area tp-service-4-border p-relative">
            <div className="service-shape-style">
                <span><CareerShape /></span>
            </div>
            <div className="container container-1320">
                <div className="ar-about-us-4-hero-ptb">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="tp-service-hero-title-box tp_fade_anim z-index-1" data-delay=".3">
                                <h3 className="tp-service-4-title">We Provide Smart <br /> Solutions for your Business.</h3>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="tp-service-4-text pt-150 tp_fade_anim z-index-1" data-delay=".5">
                                <p>We provide smart solutions for your business. From door-to-door delivery to FOB shipping and ex-works delivery, we provide end-to-end solutions tailored to your needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFourHero;