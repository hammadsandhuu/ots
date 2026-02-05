import { SectorData } from '@/types/sector-d-t';
import Image from 'next/image';

interface PortfolioDetailsThreeGalleryTwoProps {
    sector: SectorData;
}

const PortfolioDetailsThreeGalleryTwo = ({ sector }: PortfolioDetailsThreeGalleryTwoProps) => {
    const galleryImages = sector.galleryImagesTwo;

    return (
        <div className="tp-pd-3-gallery-area">
            <div className="container-fluid">
                <div className="row gx-20">
                    {galleryImages[0] && (
                        <div className="col-lg-6">
                            <div className="tp-pd-3-gallery-img medium-img mb-20">
                                <Image data-speed=".8" style={{ width: "100%", height: "auto" }} src={galleryImages[0]} alt={`${sector.title} - gallery 1`} />
                            </div>
                        </div>
                    )}
                    {galleryImages[1] && (
                        <div className="col-lg-6">
                            <div className="tp-pd-3-gallery-img medium-img mb-20">
                                <Image data-speed="1.1" style={{ width: "100%", height: "auto" }} src={galleryImages[1]} alt={`${sector.title} - gallery 2`} />
                            </div>
                        </div>
                    )}
                    {galleryImages[2] && (
                        <div className="col-lg-12">
                            <div className="tp-pd-3-gallery-img height mb-20">
                                <Image data-speed=".8" style={{ width: "100%", height: "auto" }} src={galleryImages[2]} alt={`${sector.title} - gallery 3`} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsThreeGalleryTwo;