import aboutThumb from  "../../../public/assets/img/home-03/about/about-banner.png";
import Image from 'next/image';

const AboutUsBanner = ({ image = aboutThumb, spacingCls = "" }) => {
    return (
        <div className={`ar-banner-area ${spacingCls}`}>
            <div className="ar-banner-wrap about-us-4">
                <Image fill className="w-100" src={image} alt="about thumb" data-speed=".8" sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
                <div className="ar-banner-wrap-overlay" aria-hidden />
            </div>
        </div>
    );
};

export default AboutUsBanner;