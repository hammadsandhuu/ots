"use client";
import Link from 'next/link';
import { SectorData } from '@/types/sector-d-t';
import { ServiceDetailData, ServiceSolutionItem } from '@/types/service-d-t';
import { BrandingIcon, UIUXDesignIcon, WebDevelopmentIcon } from '@/svg/ServiesIcons';

const SERVICE_ICON_MAP = {
    BrandingIcon,
    UIUXDesignIcon,
    WebDevelopmentIcon,
} as const;

type SolutionData = SectorData | ServiceDetailData;

interface SectorSolutionProps {
    data: SolutionData;
    title?: string;
}

const SectorSolution = ({ data, title }: SectorSolutionProps) => {
    const isSector = 'overview' in data;
    
    // Extract solution items based on type
    let displayItems: ServiceSolutionItem[] = [];
    
    if (isSector) {
        const sector = data as SectorData;
        displayItems = sector.solutionItems || [];
    } else {
        const service = data as ServiceDetailData;
        displayItems = service.solutionItems || [];
    }

    if (displayItems.length === 0) return null;

    return (
        <div className="pp-service-details-solution-ptb pb-90">
            <div className="container">
                {title && (
                    <div className="row mb-50">
                        <div className="col-lg-12">
                            <h4 className="pp-service-details-overview-title tp_fade_anim" data-delay=".3">
                                {title}
                            </h4>
                        </div>
                    </div>
                )}
                <div className="row">
                    {displayItems.map((item, index) => {
                        const IconComponent = item.svgIcon && item.svgIcon in SERVICE_ICON_MAP
                            ? SERVICE_ICON_MAP[item.svgIcon as keyof typeof SERVICE_ICON_MAP]
                            : null;
                        return (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div
                                    className="tp-service-4-solution-item service-details mb-30 tp_fade_anim"
                                    data-delay={item.delay ?? `.${(index + 1) * 3}`}
                                >
                                    <div className="tp-service-4-solution-item-icon">
                                        <span>{IconComponent && <IconComponent />}</span>
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
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SectorSolution;
