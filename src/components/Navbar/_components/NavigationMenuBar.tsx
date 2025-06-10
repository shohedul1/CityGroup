



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
            { url: '/product/tree.png', href: "/" },
            { url: '/product/bengol.png', href: "/" },
            { url: '/product/sun.png', href: "/" },
            { url: '/product/Jibon.png', href: "/" },
            { url: '/product/Natuarel.png', href: "/" },
            { url: '/product/quily.png', href: "/" },
            { url: '/product/candy.png', href: "/" },




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
            { label: "About Us", emoji: <Info className="text-orange-500" />, href: '/about-us' },
            { label: "Careers", emoji: <LifeBuoy className="text-green-500" />, href: '/careers' },
            { label: "Newsroom", emoji: <Download className="text-indigo-500" />, href: '/newsroom' },
        ],
    },
    {
        title: 'Career',
        menu: "career",
        options: [
            { label: "About Us", emoji: <Info className="text-orange-500" />, href: '/about-us' },
            { label: "Careers", emoji: <LifeBuoy className="text-green-500" />, href: '/careers' },
            { label: "Newsroom", emoji: <Download className="text-indigo-500" />, href: '/newsroom' },
        ],
    },
    {
        title: 'Contact Us',
        menu: "Contact-us",
        options: [
            { label: "About Us", emoji: <Info className="text-orange-500" />, href: '/about-us' },
            { label: "Careers", emoji: <LifeBuoy className="text-green-500" />, href: '/careers' },
            { label: "Newsroom", emoji: <Download className="text-indigo-500" />, href: '/newsroom' },
        ],
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
                <div className="flex items-center gap-3  ">
                    <div className="uppercase hover:text-[#273896] text-[#0083cb] font-normal mt-2 ">{title}</div>
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
        <div className="hidden text-md font-light space-x-4 w-full items-center xl:flex">
            {
                items.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="cursor-pointer hidden xl:block">
                            {rendrMenu(item)}
                        </div>
                    </React.Fragment>
                ))
            }

        </div>
    )
}

export default NavigationMenuBar