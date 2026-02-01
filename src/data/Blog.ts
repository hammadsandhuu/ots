import blog1 from "../../public/assets/img/home-03/blog/img-1.webp";
import blog2 from "../../public/assets/img/home-03/blog/img-2.webp";
import blog3 from "../../public/assets/img/home-03/blog/img-3.webp";
import { blogDT } from "@/types/blog-d-t";

export const blog: blogDT[] = [
    {
        id: 1,
        author: "Damien Cabral",
        date: "Dec 10, 2025",
        category: "Logistics",
        title: "How Door-to-Door Delivery Improves Supply Chain Efficiency",
        image: blog1,
        link: "/blog-details-light",
    },
    {
        id: 2,
        author: "Sophia Martinez",
        date: "Jan 05, 2026",
        category: "Shipping",
        title: "FOB vs Ex-Works: Choosing the Right Shipping Method",
        image: blog2,
        link: "/blog-details-light",
    },
    {
        id: 3,
        author: "Daniel Chen",
        date: "Jan 18, 2026",
        category: "Transportation",
        title: "Key Factors for Reliable International Freight Transport",
        image: blog3,
        link: "/blog-details-light",
    },
];
