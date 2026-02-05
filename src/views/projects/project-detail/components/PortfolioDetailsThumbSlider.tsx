"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { ProjectDetailData } from '@/types/project-d-t';
import Image from 'next/image';

interface PortfolioDetailsThumbSliderProps {
    project: ProjectDetailData;
}

const PortfolioDetailsThumbSlider = ({ project }: PortfolioDetailsThumbSliderProps) => {
    // Use project slider images or default images
    const sliderData = project.sliderImages || [];

    return (
        <div className="tp-pd-2-slider-ptb pb-140">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-pd-2-slider-wrapper">
                            <div className="tp-pd-2-active swiper">
                                <Swiper
                                    modules={[Pagination]}
                                    loop={true}
                                    spaceBetween={20}
                                    speed={1000}
                                    pagination={{
                                        el: ".tp-pd-2-dot",
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        '1600': { slidesPerView: 3 },
                                        '1400': { slidesPerView: 3 },
                                        '1200': { slidesPerView: 3 },
                                        '992': { slidesPerView: 2 },
                                        '768': { slidesPerView: 2 },
                                        '576': { slidesPerView: 1 },
                                        '0': { slidesPerView: 1 }
                                    }}
                                >
                                    {sliderData.map((img, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="tp-pd-2-slider-thumb">
                                                <Image
                                                    style={{ width: "100%", height: "auto" }}
                                                    src={img}
                                                    alt={`${project.title} - image ${i + 1}`}
                                                    className="w-100"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="tp-pd-2-dot text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PortfolioDetailsThumbSlider;
