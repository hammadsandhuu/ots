import { SectorData } from '@/types/sector-d-t';
import Image from 'next/image';

interface PortfolioDetailsThreePortfolioProps {
    sector: SectorData;
}

const PortfolioDetailsThreePortfolio = ({ sector }: PortfolioDetailsThreePortfolioProps) => {
    const { challenge, solution } = sector;

    return (
        <div className="tp-pd-3-portfolio-area pt-200 pb-60">
            <div className="container container-1200">
                <div className="tp-pd-3-portfolio-item-wrap">
                    <div className="tp-pd-3-portfolio-item mb-120">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tp-pd-3-portfolio-thumb">
                                    <Image style={{ width: "100%", height: "auto" }} className="w-100" src={challenge.image} alt={challenge.title} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tp-pd-3-portfolio-content tp-pd-3-content-pin mt-20 ml-40">
                                    <span className="tp-pd-3-subtitle">{challenge.subtitle}</span>
                                    <h4 className="tp-pd-3-title">{challenge.title}</h4>
                                    <div className="tp-pd-3-overview-text">
                                        <p>{challenge.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-pd-3-portfolio-item-wrap pt-120">
                    <div className="tp-pd-3-portfolio-item mb-120">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tp-pd-3-portfolio-content tp-pd-3-content-pin mt-20 mr-40">
                                    <span className="tp-pd-3-subtitle">{solution.subtitle}</span>
                                    <h4 className="tp-pd-3-title">{solution.title}</h4>
                                    <div className="tp-pd-3-overview-text">
                                        <p>{solution.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tp-pd-3-portfolio-thumb">
                                    <Image style={{ width: "100%", height: "auto" }} className="w-100" src={solution.image} alt={solution.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsThreePortfolio;