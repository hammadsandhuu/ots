"use client"
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import DigitalMarketingTeamCard from './subComponents/DigitalMarketingTeamCard';
import { TeamTitleUnderline } from '@/svg/TeamTitleUnderline';
import { ArrowSvg } from '@/svg';
import Link from 'next/link';
import { teamMembers } from '@/data/Team';
import { useEffect, useState } from 'react';

const DigitalMarketingTeam = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="dgm-team-area pt-120 pb-80">
            <div className="container container-1330">
                <div className="dgm-team-top-wrap mb-60">
                    <div className="row align-items-end">
                        <div className="col-md-8">
                            <div className="dgm-team-title-box z-index-">
                                <span className="tp-section-subtitle subtitle-black mb-15 tp_fade_anim" data-delay=".3">Team member</span>
                                <h4 className="tp-section-title-grotesk mb-0 tp_fade_anim" data-delay=".5">
                                    Meet the <br /> talented {" "}
                                    <span className="p-relative">
                                        team
                                        <span className="tp-section-title-shape d-none d-md-block">
                                            <TeamTitleUnderline />
                                        </span>
                                    </span>
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="dgm-team-btn-box text-start text-md-end tp_fade_anim" data-delay=".3">
                                <Link className="tp-btn-secondary green-solid btn-60" href="/team-light">
                                    <span>
                                        <span className="text-1">All team member</span>
                                        <span className="text-2">All team member</span>
                                    </span>
                                    <i>
                                        <ArrowSvg width={12} height={12} />
                                        <ArrowSvg width={12} height={12} />
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Desktop Grid View */}
                {!isMobile && (
                    <div className="dgm-team-wrap">
                        <div className="row">
                            {teamMembers.map((member, index) => (
                                <div key={member.id} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                    <DigitalMarketingTeamCard member={member} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Mobile Slider View */}
                {isMobile && (
                    <div className="dgm-team-slider-wrap">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            speed={1500}
                            pagination={{
                                el: '.dgm-team-pagination',
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="dgm-team-active"
                        >
                            {teamMembers.map((member, index) => (
                                <SwiperSlide key={member.id}>
                                    <DigitalMarketingTeamCard member={member} index={index} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="dgm-team-pagination text-center mt-40"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DigitalMarketingTeam;