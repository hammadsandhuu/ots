import { SectorData } from '@/types/sector-d-t';
import Image from 'next/image';

interface PortfolioDetailsThreeGalleryProps {
    sector: SectorData;
}

const PortfolioDetailsThreeGallery = ({ sector }: PortfolioDetailsThreeGalleryProps) => {
    const galleryImages = sector.galleryImages;

    // Define layout for gallery images
    const galleryData = galleryImages.map((img, index) => ({
        id: index + 1,
        img,
        col: index < 3 ? 'col-lg-4' : 'col-lg-12',
        extraClass: index < 3 ? 'small-img mb-20' : 'height mb-20',
    }));

    return (
        <div className="tp-pd-3-gallery-area">
            <div className="container container-1800">
                <div className="row gx-20">
                    {galleryData.map((item) => (
                        <div key={item.id} className={item.col}>
                            <div className={`tp-pd-3-gallery-img ${item.extraClass}`}>
                                <Image
                                    style={{ width: "100%", height: "auto" }}
                                    src={item.img}
                                    alt={`${sector.title} - gallery ${item.id}`}
                                    data-speed=".8"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsThreeGallery;
