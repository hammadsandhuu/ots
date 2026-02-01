import { MenuItem } from "@/types/menu-d-t";
import Services from "@/data/Services";

const headerMenuData: MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    active: false,
    megaMenu: false,
    children: false,
    title: "Home",
    pluseIncon: false,
    link: "/",
  },
  {
    id: 2,
    hasDropdown: false,
    active: false,
    megaMenu: false,
    children: false,
    title: "About Us",
    pluseIncon: false,
    link: "/about-us",
  },
  {
    id: 3,
    hasDropdown: true,
    active: false,
    megaMenu: false,
    children: false,
    title: "Services",
    pluseIncon: false,
    link: "/service",
    submenus: [
      {
        title: "All Services",
        link: "/service",
      },
      ...Services.filter((s) => s.slug).map((service) => ({
        title: service.title,
        link: service.link,
      })),
    ],
  },
  {
    id: 4,
    hasDropdown: true,
    active: false,
    megaMenu: false,
    children: false,
    title: "Sectors",
    pluseIncon: false,
    link: "/sectors",
    submenus: [
      {
        title: "Agriculture",
        link: "/agriculture",
      },
      {
        title: "Automotive",
        link: "/automotive",
      },
      {
        title: "Chemicals",
        link: "/chemicals",
      },
      {
        title: "Construction",
        link: "/construction",
      },
      {
        title: "Electronics",
        link: "/electronics",
      },
    ],
  },
  {
    id: 5,
    hasDropdown: false,
    active: false,
    megaMenu: false,
    children: false,
    title: "Projects",
    pluseIncon: false,
    link: "/projects",
  },
  {
    id: 6,
    hasDropdown: false,
    active: false,
    megaMenu: false,
    children: false,
    title: "How We Work",
    pluseIncon: false,
    link: "/how-we-work",
  },
  {
    id: 7,
    hasDropdown: false,
    active: false,
    megaMenu: false,
    children: false,
    title: "Contact Us",
    pluseIncon: false,
    link: "/contact-us",
  },
];
export default headerMenuData;

