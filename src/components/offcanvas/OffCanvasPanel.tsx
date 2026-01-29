import logoBlack from '../../../public/assets/img/logo/logo-1.png';
import logoWhite from '../../../public/assets/img/logo/logo-1.png';
import PhotoProviderWrapper from '../shared/PhotoProviderWrapper';
import { CrossIconTwo, DribbleTwo, InstagramSvg } from '@/svg';
import MainMobileMenu from "../../layouts/subComponents/MainMobileMenu";
import { BehanceTwoSvg } from "@/svg/social-icons/Behance";
import { YouTubeSvg } from "@/svg/social-icons/YouTube";
import { PhotoView } from 'react-photo-view';
import { ImageDT } from '@/types/custom-d-t';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


// prop type
type IProps = {
    openOffcanvas: boolean;
    setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};


const OffCanvasPanel: React.FC<IProps> = ({ openOffcanvas, setOpenOffcanvas }) => {
    return (
        <>
            <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
                <div className="tp-offcanvas-wrapper @@class offcanvas-white-bg">
                    <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
                        <div className="tp-offcanvas-logo">
                            <Link href="/">
                                <Image className="logo-1" width={120} src={logoBlack} alt="logo-black" />
                                <Image className="logo-2" width={120} src={logoWhite} alt="logo-white" />
                            </Link>
                        </div>
                        <div className="tp-offcanvas-close">
                            <button onClick={() => setOpenOffcanvas(false)} className="tp-offcanvas-close-btn">
                                <CrossIconTwo />
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-main">
                        <div className="tp-offcanvas-content d-none d-xl-block">
                            <h3 className="tp-offcanvas-title">Welcome to OTSKSA!</h3>
                            <p>We are a freight forwarding company that provides air, sea and road freight services to our clients.</p>
                        </div>
                        <div className="tp-offcanvas-menu d-xl-none">
                            <nav><MainMobileMenu /></nav>
                        </div>
                        <div className="tp-offcanvas-contact">
                            <h3 className="tp-offcanvas-title sm">Information</h3>
                            <ul>
                                <li><Link href="tel:+42077001007">+ 4 (20) 7700 1007</Link></li>
                                <li><Link href="mailto:Shahr.azim@otsksa.com">Shahr.azim@otsksa.com</Link></li>
                                <li><Link href="https://www.google.com/maps/place/Surooh+Business+Center+Floor+3,+Office+9+Hael+Street+22321+Jeddah+Saudi+Arabia/@21.5469241,39.1743406,17z/data=!3m1!4b1!4m6!3m5!1s0x1899181837d44745:0x1899181837d44745!8m2!3d21.5469241!4d39.1743406!16s%2Fg%2F11c402wt80?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D">Surooh Business Center Floor 3, Office 9 Hael Street 22321 Jeddah Saudi Arabia
                                </Link></li>
                            </ul>
                        </div>
                        <div className="tp-offcanvas-social">
                            <h3 className="tp-offcanvas-title sm">Follow Us</h3>
                            <ul>
                                <li>
                                    <Link href="#"><InstagramSvg /></Link>
                                </li>
                                <li>
                                    <Link href="#"> <DribbleTwo /></Link>
                                </li>
                                <li>
                                    <Link href="#"><BehanceTwoSvg /></Link>
                                </li>
                                <li>
                                    <Link href="#"><YouTubeSvg /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => setOpenOffcanvas(false)}
                className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
            ></div>
        </>
    );
};

export default OffCanvasPanel;