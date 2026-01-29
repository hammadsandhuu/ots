import { MenuItem } from "@/types/menu-d-t";

const headerMenuData:MenuItem[] = [
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
    link: "#",
    submenus: [
      {
        title: "Air Freight",
        link: "/air-freight",
      },
      {
        title: "Sea Freight",
        link: "/sea-freight",
      },
      {
        title: "Road Freight",
        link: "/road-freight",
      },
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
    title: "How We Work",
    pluseIncon: false,
    link: "/how-we-work",
  },
  {
    id: 6,
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

