import { StaticImageData } from "next/image";

export interface projectsDT {
    id: number;
    title: string;
    slug?: string;
    image: StaticImageData | string;
    categories?: string[];
    description?: string
    year?: string;
    client?: string;
    services?: string;
    hasLineBreak?: boolean;
    layout?: string;
    contentClass?: string;
    number?: string
    altText?: string;
    subtitle?: string;
    category?: string;
    delay?: string;
    fadeDirection?: 'left' | 'right';
    link: string;
}

/** Extended project for detail page */
export interface ProjectDetailData extends projectsDT {
    info?: { label: string; value: string }[];
    bannerImage?: StaticImageData;
    brandOverview?: {
        paragraphs?: string[];
        features?: string[];
    };
    overviewSteps?: { title: string; description: string }[];
    /** Images for the slider section */
    sliderImages?: StaticImageData[];
    /** Images for the thumb section (3 images: full-width, half, half) */
    thumbImages?: StaticImageData[];
}