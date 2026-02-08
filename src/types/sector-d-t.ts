import { StaticImageData } from "next/image";
import { FaqEntry } from "./custom-d-t";

export interface SectorData {
    id: number;
    title: string;
    slug: string;
    link: string;
    categories: string[];
    year: string;
    heroImage: StaticImageData;
    overview: {
        subtitle: string;
        description: string;
        info: { label: string; value: string }[];
    };
    galleryImages: StaticImageData[];
    challenge: {
        subtitle: string;
        title: string;
        description: string;
        image: StaticImageData;
    };
    solution: {
        subtitle: string;
        title: string;
        description: string;
        image: StaticImageData;
    };
    galleryImagesTwo: StaticImageData[];
    faqs?: FaqEntry[];
    relatedSectors?: {
        id: number;
        title: string;
        slug: string;
        image: StaticImageData;
        categories: string[];
        year: string;
    }[];
}
