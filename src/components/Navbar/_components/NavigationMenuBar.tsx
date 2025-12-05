'use client';
import {
    AlignJustify,
    Cog,
    Download,
    Dribbble,
    FileChartColumnIncreasing,
    GitFork,
    Info,
    LifeBuoy,
    Network,
} from "lucide-react";
import React, { useState } from "react";
import ContenMenu from "./ContenMenu";
import { PiGlobeStandThin, PiShootingStar } from "react-icons/pi";
import Link from "next/link";

interface MenuItem {
    title: string,
    menu: string,
    options: {
        label?: string,
        emoji?: React.ReactElement,
        href: string;
        url?: string
    }[];
}

const items: MenuItem[] = [
    {
        title: 'KNOW US',
        menu: "know-us",
        options: [
            { label: "about us", emoji: <FileChartColumnIncreasing className="text-orange-500 w-10 h-10" />, href: 'team-alignment' },
            { label: "History", emoji: <Cog className="text-gray-500 w-10 h-10" />, href: 'seles' },
            { label: "Sister Concerns", emoji: <Network className="text-blue-500 w-10 h-10" />, href: '/enginnering' },
            { label: "Management", emoji: <GitFork className="text-rose-500 w-10 h-10" />, href: '/design' },
            { label: "Achievements", emoji: < PiShootingStar className="text-indigo-500 w-10 h-10" />, href: '/marketing' },
            { label: "csr", emoji: <Dribbble className="text-indigo-400 w-10 h-10" />, href: '/customer-support' },
            { label: "sustainability", emoji: <PiGlobeStandThin className="text-lime-500 w-10 h-10" />, href: '/product-management' },
        ]

    },
    {
        title: 'Brands',
        menu: "brands",
        options: [
            {
                url: 'https://res.cloudinary.com/djhjt07rh/image/upload/v1749572649/tree_xqofzz.png',
                href: "/"
            },
            {
                url: 'https://res.cloudinary.com/djhjt07rh/image/upload/v1749572650/bengol_upsub8.png',
                href: "/"
            },
            {
                url: 'https://res.cloudinary.com/djhjt07rh/image/upload/v1749572649/trie_xsiu8f.png',
                href: "/"
            },
            {
                url: 'https://res.cloudinary.com/djhjt07rh/image/upload/v1749572650/Jibon_gwbs67.png',
                href: "/"
            },
            {
                url: 'https://res.cloudinary.com/djhjt07rh/image/upload/v1749572649/Natuarel_xmc8cu.png',
                href: "/"
            },
            {
                url: 'https://res.cloudinary.com/djhjt07rh/image/upload/v1749572649/quily_gveg22.png',
                href: "/"
            },
            {
                url: 'https://res.cloudinary.com/djhjt07rh/image/upload/v1749572648/candy_btwho4.png',
                href: "/"
            },




        ]

    },

    {

        title: 'Foreign Trade',
        menu: "foreign-trade",
        options: [
            { label: "Our Export", emoji: <LifeBuoy className="text-green-500" />, href: '/' },
            { label: "Contact For Foreign Trade", emoji: <AlignJustify className="text-orange-500" />, href: '/' },

        ],

    },

    {
        title: 'Media',
        menu: "media",
        options: [
            { label: "News & events", emoji: <Info className="text-orange-500" />, href: '/about-us' },
            { label: "commercials", emoji: <LifeBuoy className="text-green-500" />, href: '/careers' },
            { label: "press releases", emoji: <Download className="text-indigo-500" />, href: '/newsroom' },
            { label: "INVESTORINFORMATION", emoji: <Download className="text-indigo-500" />, href: '/newsroom' },
        ],
    },
    {
        title: 'career',
        menu: "career",
        options: []
    },
    {
        title: 'Contact Us',
        menu: "Contact-us",
        options: [],
    }
]


const NavigationMenuBar = () => {
    const [activeMenu, setActionMenu] = useState<string | null>(null);

    const handleMouseEnter = (menu: string) => {
        setActionMenu(menu);
    };

    const handleMouseLeave = () => {
        setActionMenu(null)
    }

    const rendrMenu = (item: MenuItem) => {
        const { title, menu, options } = item;
        return (
            <div className="flex items-center relative"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}>
                <div className="flex items-center gap-5">

                    {/* <div className="uppercase hover:text-[#273896] text-[#0083cb] font-normal mt-2 ">{title}</div> */}
                    {title === "KNOW US" && (
                        <div className="uppercase hover:text-[#273896] text-[#0083cb] lg:text-sm xl:text-base font-normal mt-2 ">{title}</div>

                    )}
                    {title === "Brands" && (
                        <div className="uppercase hover:text-[#273896] text-[#0083cb] font-normal mt-2 text-sm ">{title}</div>

                    )}
                    {title === "Foreign Trade" && (
                        <div className="uppercase hover:text-[#273896] text-[#0083cb] font-normal mt-2 text-sm ">{title}</div>

                    )}
                    {title === "Media" && (
                        <div className="uppercase hover:text-[#273896] text-[#0083cb] font-normal mt-2 text-sm">{title}</div>

                    )}
                    {title === "career" && (
                        <Link href="/career">
                            <div className="uppercase hover:text-[#273896] text-[#0083cb] font-normal mt-2 text-sm">{title}</div>
                        </Link>

                    )}
                    {title === "Contact Us" && (
                        <Link href="/">
                            <div className="uppercase hover:text-[#273896] text-[#0083cb] font-normal mt-2 text-sm">{title}</div>
                        </Link>

                    )}
                    <div className="mt-20">
                        {activeMenu === menu && (
                            <ContenMenu
                                options={options.map((option) => (
                                    {
                                        ...option,
                                        href: option.href
                                    }
                                ))}
                                title={title}
                            />

                        )}

                    </div>

                </div>

            </div>
        )
    }

    return (
        <div className="hidden  font-light space-x-4 w-full items-center lg:flex">
            {
                items.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="cursor-pointer hidden lg:block">
                            {rendrMenu(item)}
                            
                        </div>
                    </React.Fragment>
                ))
            }

        </div>
    )
}

export default NavigationMenuBar