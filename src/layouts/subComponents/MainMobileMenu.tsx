"use client";
import headerMenuData from '@/data/header-menu/menuData';
import { Submenu } from '@/types/menu-d-t';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MainMobileMenu = () => {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

    const toggleMenu = (id: number) => {
        if (activeMenu === id) {
            setActiveMenu(null);
        } else {
            setActiveMenu(id);
            setActiveSubmenu(null);
        }
    };

    const toggleSubmenu = (index: number) => {
        if (activeSubmenu === index) {
            setActiveSubmenu(null);
        } else {
            setActiveSubmenu(index);
        }
    };

    // Returns CSS class based on tag like 'Popular', 'Trending', or 'Hot'
    const getTagClass = (tag: string) => {
        switch (tag) {
            case 'Popular': return 'pop';
            case 'Trending': return 'new';
            case 'Hot': return 'hot';
            default: return '';
        }
    };

    // Check if menu item has dropdown content
    const hasDropdownContent = (menuItem: typeof headerMenuData[0]) => {
        return menuItem.hasDropdown || menuItem.megaMenu || menuItem.smallMenu || menuItem.mediumMenu || (menuItem.submenus && menuItem.submenus.length > 0);
    };

    return (
        <>
            <ul>
                {headerMenuData.map((menuItem) => {
                    const hasDropdown = hasDropdownContent(menuItem);
                    
                    return (
                        <li key={menuItem.id} className={`${hasDropdown ? 'has-dropdown' : ''} ${activeMenu === menuItem.id ? 'active' : ''}`}>
                            {hasDropdown ? (
                                <Link href={menuItem.link} onClick={(e) => {
                                    e.preventDefault();
                                    toggleMenu(menuItem.id);
                                }}>
                                    {menuItem.title}
                                </Link>
                            ) : (
                                <Link href={menuItem.link}>
                                    {menuItem.title}
                                </Link>
                            )}

                            {/* Mega Menu */}
                            {(menuItem.megaMenu || menuItem.smallMenu || menuItem.mediumMenu) && menuItem.submenus && (
                                <div className="tp-megamenu-wrapper mega-menu megamenu-white-bg" style={{ display: `${activeMenu === menuItem.id ? 'block' : 'none'}` }}>
                                    <div className="row gx-0">
                                        {menuItem.submenus.map((submenu: Submenu, colIndex: number) => (
                                            <div key={colIndex} className={menuItem.menuThumb?.isThumb ? "col-xl-2" : "col-xl-3"}>
                                                <div className="tp-megamenu-list">
                                                    {submenu.title && (
                                                        <h4 className="tp-megamenu-title">{submenu.title}</h4>
                                                    )}
                                                    {submenu.megaMenu && (
                                                        <ul>
                                                            {submenu.megaMenu.map((link, linkIndex) => (
                                                                <li key={linkIndex}>
                                                                    <Link href={link.link}>
                                                                        {link.title}
                                                                        {link.tag && (
                                                                            <span className={getTagClass(link.tag)}>
                                                                                {link.tag}
                                                                            </span>
                                                                        )}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        ))}

                                        {menuItem.menuThumb?.isThumb && (
                                            <div className="col-xl-2">
                                                <div className="tp-megamenu-list">
                                                    <div className="tp-megamenu-thumb">
                                                        <Image src={menuItem.menuThumb.thumbSrc} alt={menuItem.menuThumb.thumbAlt || ""} width={300} height={300} />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Regular Dropdown */}
                            {!menuItem.megaMenu && !menuItem.smallMenu && !menuItem.mediumMenu && menuItem.submenus && menuItem.submenus.length > 0 && (
                                <ul className="tp-submenu submenu" style={{ display: `${activeMenu === menuItem.id ? 'block' : 'none'}` }}>
                                    {menuItem.submenus.map((subItem: Submenu, subIndex: number) => (
                                        <li key={subIndex} className={subItem.submenus ? `menu-item-has-children ${activeSubmenu === subIndex ? 'active' : ''}` : ""}>
                                            <Link href={subItem.link || "#"} onClick={(e) => {
                                                if (subItem.submenus) {
                                                    e.preventDefault();
                                                    toggleSubmenu(subIndex);
                                                }
                                            }}>
                                                {subItem.title}
                                            </Link>

                                            {subItem.submenus && (
                                                <>
                                                    <ul className="tp-submenu submenu" style={{ display: `${activeSubmenu === subIndex ? 'block' : 'none'}` }}>
                                                        {subItem.submenus.map((nestedItem: Submenu, nestedIndex: number) => (
                                                            <li key={nestedIndex}>
                                                                <Link href={nestedItem.link || "#"}>{nestedItem.title}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <button
                                                        className={`tp-menu-close ${activeSubmenu === subIndex ? 'active' : ''}`}
                                                        onClick={() => toggleSubmenu(subIndex)}
                                                    >
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Toggle button - only show if has dropdown */}
                            {hasDropdown && (
                                <button
                                    className={`tp-menu-close ${activeMenu === menuItem.id ? 'active' : ''}`}
                                    onClick={() => toggleMenu(menuItem.id)}
                                >
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default MainMobileMenu;
