
"use client"

import heroTextShape from "../../../public/assets/img/home-03/hero/hero-text-shape.png"
import AnimatedCounterTwo from "../counter/AnimatedCounterTwo"
import { InstagramFour } from "@/svg/social-icons/Instagram"
import { FacebookThree } from "@/svg/social-icons/Facebook"
import { TwitterThree } from "@/svg/social-icons/Twitter"
import { ArrowFour, ArrowNineteen } from "@/svg/ArrowIcons"
import { DribbleTwo, HeroTextBoxSvg } from "@/svg"
import Link from "next/link"

const HERO_VIDEO_SRC = "/assets/video/5.mp4"

const HERO_CONTENT = {
    title: "Global Freight Forwarding",
    description:
        "Your trusted partner for seamless global logistics and freight forwarding solutions. We deliver excellence across air, sea, and land transportation, ensuring your cargo reaches its destination safely and on time, every time.",
}

const FUN_FACTS = [
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
] as const

const SOCIAL_LINKS = [
    { id: "facebook", href: "#", Icon: FacebookThree },
    { id: "twitter", href: "#", Icon: TwitterThree },
    { id: "instagram", href: "#", Icon: InstagramFour },
    { id: "dribbble", href: "#", Icon: DribbleTwo },
] as const

const TEXT_BOX = {
    copy: "World-class Shipping Services and Solutions.",
    ctaHref: "/contact-us",
}

const DigitalMarketingHero = () => {
    return (
        <div className="dgm-hero-top pt-20">
            <div className="dgm-hero-ptb grey-bg-2 fix z-index-1 p-relative">
                <div className="dgm-hero-bg" />
                <div className="dgm-hero-video">
                    <video autoPlay muted loop playsInline>
                        <source src={HERO_VIDEO_SRC} type="video/mp4" />
                    </video>
                    <div className="dgm-hero-video-overlay" />
                </div>

                <div className="dgm-hero-social-box">
                    <div className="dgm-hero-social-text">
                        <span>Follow</span>
                    </div>
                    <div className="dgm-hero-social">
                        {SOCIAL_LINKS.map(({ id, href, Icon }) => (
                            <Link key={id} href={href}>
                                <span>
                                    <Icon />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="container container-1430 ">
                    <div className="row">
                        <div className="col-lg-12 dgm-hero-main">
                            <div className="dgm-hero-content mb-5">
                                <h1 className="dgm-hero-title tp_fade_anim" data-delay=".5">
                                    {HERO_CONTENT.title}
                                </h1>
                                <p className="dgm-hero-desc tp_fade_anim" data-delay=".6">
                                    {HERO_CONTENT.description}
                                </p>
                            </div>
                            <div className="dgm-hero-funfact-wrap">
                                <div className="row row-cols-auto g-5">
                                    {FUN_FACTS.map((item) => (
                                        <div key={item.id} className="col">
                                            <div
                                                className="dgm-hero-funfact tp_fade_anim mb-40"
                                                data-delay={item.delay}
                                                data-fade-from="top"
                                                data-ease="bounce"
                                            >
                                                <span>
                                                    <AnimatedCounterTwo min={0} max={item.end} />
                                                    {item.suffix}
                                                </span>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dgm-hero-thumb d-none d-lg-block">
                    <div
                        className="dgm-hero-text-box d-none d-md-block"
                        style={{ backgroundImage: `url(${heroTextShape.src})` }}
                    >
                        <HeroTextBoxSvg />
                        <Link href={TEXT_BOX.ctaHref} className="dgm-hero-text-box-link">
                            {TEXT_BOX.copy}
                        </Link>
                        <Link className="dgm-hero-arrow" href={TEXT_BOX.ctaHref} aria-label="Go to contact">
                            <span>
                                <ArrowNineteen />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalMarketingHero
