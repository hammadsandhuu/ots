import { SectorData } from '@/types/sector-d-t';
import { ArrowTwentyEight } from '@/svg/ArrowIcons';
import Link from 'next/link';

interface PortfolioDetailsThreeOverviewProps {
    sector: SectorData;
}

const PortfolioDetailsThreeOverview = ({ sector }: PortfolioDetailsThreeOverviewProps) => {
    const { overview } = sector;

    return (
        <div className="tp-pd-3-overview-area pt-120 pb-95">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-pd-3-overview-left tp_fade_anim" data-delay=".3">
                            <span className="tp-pd-3-subtitle">{overview.subtitle}</span>
                            <h4 className="tp-pd-3-title">Sector Overview</h4>
                            <Link className="tp-btn-border" href="/contact-us">
                                Contact Us{" "}
                                <span><ArrowTwentyEight /></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-pd-3-overview-right">
                            <div className="tp-pd-3-overview-text">
                                <p>{overview.description}</p>
                            </div>
                            <div className="row">
                                {overview.info.map((item, i) => (
                                    <div key={i} className="col-xl-6">
                                        <div className="tp-pd-3-overview-info mb-40">
                                            <span>{item.label}</span>
                                            <h4>{item.value}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsThreeOverview;