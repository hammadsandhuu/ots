import { SectorData } from '@/types/sector-d-t';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioDetailsThreeProps {
    sector: SectorData;
}

const PortfolioDetailsThree = ({ sector }: PortfolioDetailsThreeProps) => {
    return (
        <div className="tp-pd-3-hero-area">
            <div className="tp-pd-3-hero-style">
                <div className="container-fluid">
                    <div className="des-portfolio-item p-relative mb-30">
                        <div className="des-portfolio-thumb anim-zoomin-wrap p-relative rounded-5 overflow-hidden">
                            <Image style={{ width: "100%", height: "auto" }} className="w-100 anim-zoomin" src={sector.heroImage} alt={sector.title} />
                        </div>
                        <div className="des-portfolio-content">
                            <h2 className="des-portfolio-title tp-text-revel-anim"><Link href={sector.link}>{sector.title}</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsThree;