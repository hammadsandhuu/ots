import { SectorData } from '@/types/sector-d-t';
import Link from 'next/link';
import Image from 'next/image';

interface PortfolioDetailsThreeNavigationProps {
    sector: SectorData;
    relatedSectors: SectorData[];
}

const PortfolioDetailsThreeNavigation = ({ sector, relatedSectors }: PortfolioDetailsThreeNavigationProps) => {
    return (
        <div className="tp-pd-3-navigation-area pt-100">
            <div className="container-fluid">
                <div className="row gx-15 justify-content-center">
                    <div className="col-xl-6">
                        <div className="tp-pd-3-navigation-top text-center pb-100">
                            <h2 className="tp-pd-3-navigation-title">Explore Other Sectors</h2>
                        </div>
                    </div>
                </div>
                <div className="row gx-20">
                    {relatedSectors.map((item) => (
                        <div key={item.id} className="col-lg-6">
                            <div
                                className="tp-pd-3-navigation-thumb-wrap tp-pd-3-navigation-thumb-overlay p-relative not-hide-cursor mb-20"
                                data-cursor="View<br>Details"
                            >
                                <Link className="cursor-hide" href={item.link}>
                                    <div className="tp-pd-3-navigation-thumb">
                                        <Image
                                            style={{ width: "100%", height: "auto" }}
                                            src={item.heroImage}
                                            alt={item.title}
                                            className="w-100"
                                        />
                                    </div>

                                    {/* category */}
                                    <div className="des-portfolio-category d-flex align-items-center">
                                        {item.categories.map((cat, i) => (
                                            <div key={i} className={`fix ${i === 0 ? 'mr-10' : ''}`}>
                                                <span>{cat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* year */}
                                    <div className="des-portfolio-category portfolio-meta">
                                        <div className="fix">
                                            <span>{item.year}</span>
                                        </div>
                                    </div>

                                    {/* title */}
                                    <div className="tp-pd-3-navigation-content fix">
                                        <h4 className="tp-pd-3-navigation-title-sm">{item.title}</h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsThreeNavigation;
