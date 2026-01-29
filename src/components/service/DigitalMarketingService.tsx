
import DigitalMarketingServiceItem from "./subComponents/DigitalMarketingServiceItem";
import { ServiceShapeIcon } from "@/svg/ServiesIcons";
import Services from "@/data/Services";

const DigitalMarketingService = () => {

    return (
        <div className="dgm-service-area dgm-service-radius pt-120 black-bg-5 z-index-1">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="dgm-service-title-box z-index-1 mb-60">
                            <span className="tp-section-subtitle subtitle-grey mb-15 text-white tp_fade_anim" data-delay=".3">Services</span>
                            <h4 className="tp-section-title-grotesk text-white tp_fade_anim" data-delay=".5">
                                What  {" "}
                                <span className="p-relative">
                                    We Help With?
                                    <span className="tp-section-title-shape">
                                        <ServiceShapeIcon />
                                    </span>
                                </span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="dgm-service-wrap">
                    <div className="row">
                        <div className="col-xl-12">
                            {Services.map((service) => (
                                <DigitalMarketingServiceItem key={service.id} service={service} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketingService;