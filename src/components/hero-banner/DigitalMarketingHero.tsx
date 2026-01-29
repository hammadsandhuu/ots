"use client"
import heroTextShape from "../../../public/assets/img/home-03/hero/hero-text-shape.png";
import heroMike from "../../../public/assets/img/home-03/hero/mike.png";
import hiShape from "../../../public/assets/img/home-03/hero/hi-shape.png";
import AnimatedCounterTwo from "../counter/AnimatedCounterTwo";
import { InstagramFour } from "@/svg/social-icons/Instagram";
import { FacebookThree } from "@/svg/social-icons/Facebook";
import { TwitterThree } from "@/svg/social-icons/Twitter";
import { ArrowNineteen } from "@/svg/ArrowIcons";
import { ArrowFour, DribbleTwo } from "@/svg";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const DigitalMarketingHero = () => {

    const funFacts = [
        {
            id: 1,
            end: 98,
            suffix: '%',
            text: (<> Clients Satisfied and <br /> Repeating</>),
            delay: '.7',
        },
        {
            id: 2,
            end: 125,
            suffix: '+',
            text: (<> Projects Completed <br /> in 24 Countries</>),
            delay: '.9',
        },
    ];

    return (
        <>
            <div className="dgm-hero-top pt-20">
                <div className="dgm-hero-ptb grey-bg-2 fix z-index-1 p-relative">
                    <div className="dgm-hero-bg"></div>
                    <div className="dgm-hero-rotate-text">
                        <span>Award winning agency</span>
                    </div>
                    <div className="dgm-hero-social-box">
                        <div className="dgm-hero-social-text">
                            <span>Follow</span>
                        </div>
                        <div className="dgm-hero-social">
                            <Link href="#">
                                <span><FacebookThree /></span>
                            </Link>
                            <Link href="#">
                                <span><TwitterThree /></span>
                            </Link>
                            <Link href="#">
                                <span><InstagramFour /></span>
                            </Link>
                            <Link href="#">
                                <span> <DribbleTwo /></span>
                            </Link>
                        </div>
                    </div>
                    <div className="container container-1430">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="dgm-hero-content mb-120">
                                    <span className="dgm-hero-subtitle tp_fade_anim" data-delay=".3">🔥OTS-KSA</span>
                                    <h4 className="dgm-hero-title tp_fade_anim" data-delay=".5">
                                        Global <Image className="dgm-hero-title-mike d-none d-md-inline-block" src={heroMike} alt="hero-image" />
                                        Freight Forwarding Services
                                    </h4>
                                    <div className="tp_fade_anim" data-delay=".7">
                                        <Link className="tp-btn-black-square" href="/contact">
                                            <span>
                                                <span className="text-1">Get in Touch</span>
                                                <span className="text-2">Get in Touch</span>
                                            </span>{" "}
                                            <i>
                                                <ArrowFour />
                                                <ArrowFour />
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="dgm-hero-funfact-wrap">
                                    <div className="row">
                                        {funFacts.map((item) => (
                                            <div key={item.id} className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div
                                                    className="dgm-hero-funfact tp_fade_anim mb-40"
                                                    data-delay={item.delay}
                                                    data-fade-from="top"
                                                    data-ease="bounce"
                                                >
                                                    <span>
                                                        <AnimatedCounterTwo min={0} max={item.end} />{item.suffix}
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
                    <div className="dgm-hero-thumb anim-zoomin-wrap">
                        <div className='anim-zoomin-wrap'>
                            <div className="anim-zoomin">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="dgm-hero-video"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
                                >
                                    <source src="/assets/video/2.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="dgm-hero-text-box" style={{ backgroundImage: `url(${heroTextShape.src})` }}>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="30.000000pt" viewBox="0 0 126.000000 37.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,37.000000) scale(0.100000,-0.100000)" fill="var(--tp-common-secondary)" stroke="none">
                                    <path d="M60 353 c-31 -12 -50 -37 -49 -67 0 -17 3 -24 6 -16 13 41 29 60 56 70 42 14 97 12 127 -5 l25 -15 -30 6 c-74 13 -112 8 -142 -22 -25 -25 -27 -48 -12 -114 2 -8 -1 -14 -8 -13 -20 4 -38 -37 -22 -51 6 -6 10 -6 7 -1 -3 6 -2 19 3 30 6 15 8 10 8 -22 1 -33 7 -46 27 -62 15 -12 22 -21 17 -21 -17 0 -64 41 -58 51 4 5 1 9 -4 9 -18 0 -13 -17 13 -47 22 -25 31 -28 88 -28 70 0 113 20 127 57 7 20 9 20 24 -11 13 -27 14 -31 2 -21 -11 9 -15 9 -15 1 0 -16 42 -30 61 -20 9 4 22 22 29 39 15 37 21 37 42 0 9 -17 29 -35 44 -42 38 -18 56 10 49 76 -3 27 -8 53 -11 58 -10 16 9 8 22 -9 7 -10 14 -34 14 -54 0 -24 8 -43 24 -58 20 -19 27 -20 50 -10 27 13 33 27 40 88 2 18 8 36 14 40 6 4 16 27 23 53 27 102 -53 153 -88 57 l-13 -34 1 35 c2 54 0 59 -21 70 -22 12 -65 -4 -55 -20 3 -5 1 -11 -5 -15 -5 -3 -10 -15 -10 -26 0 -25 -3 -24 -38 11 -34 34 -75 39 -110 14 -23 -16 -32 -4 -9 13 30 25 127 18 127 -8 0 -5 5 -9 12 -9 7 0 2 10 -10 23 -34 33 -107 30 -138 -7 -14 -16 -21 -33 -17 -43 5 -12 3 -14 -7 -8 -8 5 -11 4 -7 -2 4 -6 0 -28 -7 -49 -16 -42 -17 -38 -18 44 0 49 -3 55 -32 73 -30 18 -110 25 -146 12z m474 -22 c16 -18 15 -18 -19 -7 -27 8 -31 12 -17 18 9 3 17 7 18 7 0 1 8 -7 18 -18z m-326 -27 c12 -8 22 -24 22 -35 0 -23 -27 -36 -43 -20 -15 15 -47 14 -47 -2 0 -8 18 -19 40 -26 50 -15 69 -48 52 -86 -14 -31 -48 -45 -108 -45 -66 0 -107 48 -68 81 13 11 21 10 49 -5 32 -18 60 -15 53 6 -2 6 -26 17 -53 27 -49 16 -50 17 -50 56 0 32 5 42 25 52 35 18 101 16 128 -3z m194 -4 c37 -28 49 -68 46 -141 -3 -57 -5 -64 -25 -67 -15 -2 -25 5 -35 25 -19 39 -43 41 -56 4 -7 -21 -18 -31 -31 -31 -67 0 -40 191 32 220 33 13 42 12 69 -10z m138 -29 c6 -40 30 -55 30 -19 0 33 22 61 46 57 29 -6 30 -61 2 -107 -13 -20 -23 -52 -23 -71 0 -43 -23 -60 -60 -43 -24 11 -26 16 -20 50 5 32 2 41 -19 62 -19 17 -26 34 -26 60 0 44 6 52 40 48 20 -2 26 -10 30 -37z m-70 -191 c0 -10 -10 -25 -22 -31 -22 -12 -22 -11 -5 8 9 11 17 25 17 31 0 7 2 12 5 12 3 0 5 -9 5 -20z m-353 -36 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z" />
                                    <path d="M344 219 c-8 -14 11 -33 25 -25 6 4 11 14 11 22 0 16 -26 19 -36 3z" />
                                    <path d="M625 349 c-16 -6 -17 -8 -3 -8 30 -2 48 -30 48 -77 0 -25 -5 -54 -10 -65 -6 -10 -8 -19 -5 -19 11 0 35 69 35 100 0 57 -26 85 -65 69z" />
                                    <path d="M1195 350 c3 -5 12 -10 20 -10 8 0 19 -8 24 -17 6 -10 11 -13 11 -6 0 6 -10 19 -22 27 -25 18 -42 21 -33 6z" />
                                    <path d="M779 336 c-41 -20 -50 -52 -47 -162 2 -84 6 -106 22 -123 40 -44 96 -12 96 56 0 17 5 35 10 38 6 4 10 -7 10 -25 0 -70 47 -112 84 -74 24 23 19 28 -9 10 -14 -9 -25 -12 -25 -6 0 5 5 10 10 10 6 0 17 15 25 33 16 35 16 35 21 -8 2 -16 11 -35 20 -42 21 -15 103 -17 124 -3 10 7 -3 9 -45 5 -43 -3 -50 -2 -25 3 48 11 60 20 60 44 0 32 13 12 25 -35 9 -39 12 -42 48 -45 21 -2 45 2 53 9 17 14 19 80 3 96 -7 7 -8 17 -3 25 9 13 7 129 -2 161 -6 18 -62 52 -72 43 -3 -3 -2 -6 2 -6 5 0 -2 -8 -14 -18 -27 -22 -38 -104 -21 -153 14 -41 -1 -63 -23 -34 -15 21 -19 84 -6 100 12 17 20 59 12 72 -11 18 -57 32 -83 26 -19 -4 -21 -3 -9 6 8 6 10 11 5 11 -11 0 -36 -26 -53 -56 -6 -11 -12 -14 -12 -8 0 16 -33 50 -48 49 -22 0 -42 -36 -42 -73 0 -19 -4 -31 -10 -27 -5 3 -10 17 -10 30 0 30 -19 72 -35 79 -7 2 -23 -1 -36 -8z m-5 -25 c-10 -10 -21 -17 -23 -15 -6 6 20 34 32 34 6 0 2 -8 -9 -19z m326 -10 c8 -15 7 -22 -4 -28 -22 -12 -27 -95 -8 -133 13 -27 13 -33 1 -41 -21 -13 -73 -11 -93 4 -16 12 -16 14 -2 26 24 20 22 129 -1 147 -17 13 -17 15 1 29 29 22 93 20 106 -4z m121 -2 c13 -26 7 -103 -11 -124 -16 -19 -44 -19 -59 -1 -20 24 -24 94 -7 121 21 32 61 33 77 4z m-381 -34 c3 -27 10 -41 23 -43 13 -3 17 3 17 26 0 46 10 62 36 62 33 0 47 -39 42 -118 -3 -47 -9 -68 -25 -84 -28 -28 -51 -12 -55 40 -4 52 -31 50 -38 -2 -7 -53 -32 -68 -62 -38 -20 19 -23 33 -22 90 0 83 15 114 52 110 23 -3 28 -9 32 -43z m151 -35 c16 0 11 -87 -6 -94 -13 -4 -15 6 -14 67 1 40 4 62 6 50 2 -13 9 -23 14 -23z m240 -83 c-10 -9 -11 -8 -5 6 3 10 9 15 12 12 3 -3 0 -11 -7 -18z m-13 -39 c3 -22 -2 -29 -22 -34 -30 -7 -56 10 -56 36 0 21 15 30 50 27 19 -2 26 -8 28 -29z m-430 -50 c15 -10 21 -18 14 -18 -19 0 -62 46 -61 67 0 13 3 11 10 -7 5 -14 21 -33 37 -42z m442 -23 c-13 -16 -65 -20 -74 -6 -3 4 5 6 18 4 15 -3 31 2 43 14 20 21 32 11 13 -12z" />
                                    <path d="M1085 343 c11 -3 27 -10 35 -17 13 -10 13 -9 1 7 -7 9 -23 16 -35 16 -20 -1 -20 -2 -1 -6z" />
                                    <path d="M940 336 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z" />
                                    <path d="M10 227 c0 -14 5 -29 10 -32 7 -4 8 3 4 22 -9 38 -14 42 -14 10z" />
                                    <path d="M624 125 c3 -21 16 -31 16 -12 0 9 -4 18 -9 21 -5 4 -8 -1 -7 -9z" />
                                    <path d="M620 76 c0 -8 -12 -24 -27 -35 -16 -11 -22 -21 -15 -21 15 0 62 45 62 60 0 5 -4 10 -10 10 -5 0 -10 -6 -10 -14z" />
                                </g>
                            </svg>
                            <p>World-class Shipping Services.</p>
                            <Link className="dgm-hero-arrow" href="/contact">
                                <span><ArrowNineteen /></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DigitalMarketingHero;