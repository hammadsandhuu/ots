import Link from 'next/link';
import { ServiceDetailData } from '@/types/service-d-t';
import serviceDetailsData from '@/data/serviceDetailsData';

interface ServiceSolutionTwoProps {
    service: ServiceDetailData;
}

const ServiceSolutionTwo = ({ service }: ServiceSolutionTwoProps) => {
    const displayItems = service.solutionItems ?? serviceDetailsData[0].solutionItems ?? [];

    return (
        <div className="pp-service-details-solution-ptb pb-90">
            <div className="container container-1230">
                <div className="row">
                    {displayItems.map((item, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div
                                className="tp-service-4-solution-item service-details mb-30 tp_fade_anim"
                                data-delay={item.delay ?? `.${(index + 1) * 3}`}
                            >
                                <div className="tp-service-4-solution-item-icon">
                                    <span>{item.svgIcon && <item.svgIcon />}</span>
                                </div>
                                <div className="tp-service-4-solution-item-content">
                                    <h4 className="tp-service-4-solution-item-title">
                                        <Link href={item.link}>
                                            {item.titleBr ? (
                                                <>
                                                    {item.titleBr[0]} <br />
                                                    {item.titleBr[1]}
                                                </>
                                            ) : item.title}
                                        </Link>
                                    </h4>
                                    <ul>
                                        {item.categories?.map((cat, i) => (
                                            <li key={i}>{cat}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSolutionTwo;