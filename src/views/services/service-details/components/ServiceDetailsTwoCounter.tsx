import AnimatedCounterTwo from '../../../../components/counter/AnimatedCounterTwo';
import { ServiceDetailData } from '@/types/service-d-t';
import serviceDetailsData from '@/data/serviceDetailsData';

interface ServiceDetailsTwoCounterProps {
    service: ServiceDetailData;
}

const ServiceDetailsTwoCounter = ({ service }: ServiceDetailsTwoCounterProps) => {
    const defaultCounterData = [
        { value: 50, unit: '%', descriptionBr: ['Boost In', 'Web Traffic'] as [string, string], delay: '.3' },
        { value: 23, unit: '%', descriptionBr: ['Growth in User', 'Engagement'] as [string, string], delay: '.5' },
        { value: 50, unit: '%', descriptionBr: ['Boost In', 'Web Traffic'] as [string, string], delay: '.7' },
    ];
    const rawData = service.counterData ?? serviceDetailsData[0]?.counterData ?? defaultCounterData;
    const counterData = rawData
        .filter((item) => item && typeof item.value === 'number' && item.descriptionBr?.length)
        .map((item) => ({
            ...item,
            descriptionBr: Array.isArray(item.descriptionBr)
                ? [String(item.descriptionBr[0] ?? ''), String(item.descriptionBr[1] ?? '')]
                : ['', ''],
        }));

    if (counterData.length === 0) return null;

    return (
        <div className="pp-service-details-bottom">
            <div className="container container-1230">
                <div className="row g-3 g-md-4">
                    {counterData.map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                            <div 
                                className="pp-service-details-about-item tp_fade_anim h-100" 
                                data-delay={item.delay ?? '.3'}
                            >
                                <span>
                                    <AnimatedCounterTwo min={0} max={item.value} />
                                    {item.unit ? ` ${item.unit}` : ''}
                                </span>
                                <p>
                                    {item.descriptionBr[0]}
                                    {item.descriptionBr[1] ? (
                                        <>
                                            <br />
                                            {item.descriptionBr[1]}
                                        </>
                                    ) : null}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsTwoCounter;