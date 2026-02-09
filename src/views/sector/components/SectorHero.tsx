"use client";

import { SectorData, SectorHeroFunFact } from '@/types/sector-d-t';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedCounterTwo from '@/components/counter/AnimatedCounterTwo';
import { InstagramFour } from "@/svg/social-icons/Instagram";
import { FacebookThree } from "@/svg/social-icons/Facebook";
import { TwitterThree } from "@/svg/social-icons/Twitter";
import { ArrowNineteen } from "@/svg/ArrowIcons";
import { DribbleTwo, HeroTextBoxSvg } from "@/svg";
import heroTextShape from "../../../../public/assets/img/home-03/hero/hero-text-shape.png";

interface SectorHeroProps {
    sector: SectorData;
}

const SOCIAL_LINKS = [
    { id: "facebook", href: "#", Icon: FacebookThree },
    { id: "twitter", href: "#", Icon: TwitterThree },
    { id: "instagram", href: "#", Icon: InstagramFour },
    { id: "dribbble", href: "#", Icon: DribbleTwo },
] as const;

const DEFAULT_FUN_FACTS: SectorHeroFunFact[] = [
    {
        id: 1,
        end: 98,
        suffix: "%",
        text: (
            <>
                Clients Satisfied and <br /> Repeating
            </>
        ),
        delay: ".7",
    },
    {
        id: 2,
        end: 125,
        suffix: "+",
        text: (
            <>
                Projects Completed <br /> in 24 Countries
            </>
        ),
        delay: ".9",
    },
];

const CONTACT_CTA = {
    defaultCopy: "Contact Us",
    href: "/contact-us",
};

const SectorHero = ({ sector }: SectorHeroProps) => {
    const funFacts = sector.heroFunFacts && sector.heroFunFacts.length > 0 
        ? sector.heroFunFacts 
        : DEFAULT_FUN_FACTS;
    
    const contactText = sector.heroContactText || CONTACT_CTA.defaultCopy;

    return (
        <div className="tp-pd-3-hero-area">
            <div className="tp-pd-3-hero-style">
                <div className="container-fluid">
                    <div className="des-portfolio-item p-relative mb-30">
                        <div className="des-portfolio-thumb sector-detail-hero-thumb anim-zoomin-wrap p-relative overflow-hidden">
                            <Image 
                                src={sector.heroImage} 
                                alt={sector.title}
                                fill
                                className="sector-hero-image anim-zoomin"
                                sizes="100vw"
                                priority
                            />
                            <div className="sector-detail-hero-overlay" aria-hidden />

                            {/* Social Links Box */}
                            <div className="sector-hero-social-box">
                                <div className="sector-hero-social-text">
                                    <span>Follow</span>
                                </div>
                                <div className="sector-hero-social">
                                    {SOCIAL_LINKS.map(({ id, href, Icon }) => (
                                        <Link key={id} href={href}>
                                            <span>
                                                <Icon />
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Us CTA Box */}
                            <div className="sector-hero-thumb d-none d-lg-block">
                                <div
                                    className="sector-hero-text-box d-none d-md-block"
                                    style={{ backgroundImage: `url(${heroTextShape.src})` }}
                                >
                                    <HeroTextBoxSvg />
                                    <Link href={CONTACT_CTA.href} className="sector-hero-text-box-link">
                                        {contactText}
                                    </Link>
                                    <Link className="sector-hero-arrow" href={CONTACT_CTA.href} aria-label="Go to contact">
                                        <span>
                                            <ArrowNineteen />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="des-portfolio-content sector-detail-hero-content">
                            <div className="container container-1430">
                                <div className="row">
                                    <div className="col-lg-12 sector-hero-main">
                                        <div className="sector-hero-main-content mb-5">
                                            <h1 className="sector-detail-hero-title tp_fade_anim" data-delay=".5">
                                                {sector.title}
                                            </h1>
                                            {sector.heroDescription && (
                                                <p className="sector-detail-hero-desc tp_fade_anim" data-delay=".6">
                                                    {sector.heroDescription}
                                                </p>
                                            )}
                                        </div>
                                        <div className="sector-hero-funfact-wrap">
                                            <div className="row row-cols-auto g-5">
                                                {funFacts.map((item) => (
                                                    <div key={item.id} className="col">
                                                        <div
                                                            className="sector-hero-funfact tp_fade_anim mb-40"
                                                            data-delay={item.delay || ".7"}
                                                            data-fade-from="top"
                                                            data-ease="bounce"
                                                        >
                                                            <span>
                                                                <AnimatedCounterTwo min={0} max={item.end} />
                                                                {item.suffix}
                                                            </span>
                                                            <p dangerouslySetInnerHTML={{ __html: typeof item.text === 'string' ? item.text : String(item.text) }} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectorHero;