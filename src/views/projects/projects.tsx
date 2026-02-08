"use client"
import { projects } from '@/data/projects/Projects';
import { useHoverEffect } from '@/hooks/useHoverEffect';
import Link from 'next/link';

const PortfolioColTwo = () => {
    const { addToRefs } = useHoverEffect();
    const displayPortfolioItems = projects;

    return (
        <div className="tp-portfolio-inner-ptb pb-120">
            <div className="container container-1430">
                <div className="tp-portfolio-tab-content-wrap">
                    <div className="row">
                        {
                            displayPortfolioItems.map(item => (
                                <div key={item.id} className="col-md-6">
                                    <div className="tp-portfolio-inner-item mb-65">
                                        <div ref={addToRefs} className="tp-portfolio-inner-thumb tp--hover-item">
                                            <Link href={item.link}>
                                                <div className="tp--hover-img"
                                                    data-displacement="/assets/img/webgl/1.jpg"
                                                    data-intensity="0.6" data-speedin="1" data-speedout="1">
                                                    <img
                                                        src={typeof item.image === 'string' ? item.image : item.image.src}
                                                        alt="portfolio image"
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="tp-portfolio-inner-content">
                                            <h4 className="tp-portfolio-inner-title"><Link className="tp-line-white" href={item.link}>{item.title}</Link></h4>
                                            <span>{item.categories ? item.categories.join(', ') : item.description || ''}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioColTwo;