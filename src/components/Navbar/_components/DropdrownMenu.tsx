'use client';


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

interface DropDrownMenuProps {
    onClose: () => void;
}



const DropdrownMenu: React.FC<DropDrownMenuProps> = ({ onClose }) => {
    const handleLinkClick = () => {
        onClose();
    }

    // const brands = [
    //     "tree.png", "bengol.png", "Natuarel.png", "Jibon.png", "sun.png", "quily.png", "candy.png"
    // ];
    const brands = [

        'https://res.cloudinary.com/djhjt07rh/image/upload/v1749572649/tree_xqofzz.png',
        'https://res.cloudinary.com/djhjt07rh/image/upload/v1749572650/bengol_upsub8.png',
        'https://res.cloudinary.com/djhjt07rh/image/upload/v1749572649/trie_xsiu8f.png',
        'https://res.cloudinary.com/djhjt07rh/image/upload/v1749572650/Jibon_gwbs67.png',
        'https://res.cloudinary.com/djhjt07rh/image/upload/v1749572649/Natuarel_xmc8cu.png',
        'https://res.cloudinary.com/djhjt07rh/image/upload/v1749572649/quily_gveg22.png',
        'https://res.cloudinary.com/djhjt07rh/image/upload/v1749572648/candy_btwho4.png',




    ]
    const knowUsLinks = [
        { label: 'About us', href: '/team-alignment' },
        { label: 'History', href: '/team-alignment' },
        { label: 'Sister Concerns', href: '/team-alignment' },
        { label: 'Management', href: '/team-alignment' },
        { label: 'Achievements', href: '/team-alignment' },
        { label: 'csr', href: '/team-alignment' },
        { label: 'sustainability', href: '/team-alignment' },

    ];

    return (
        <div className="w-full h-full px-5 relative  white  justify-center items-center  xl:hidden ">
            <Accordion type="single" collapsible  >
                <AccordionItem value="item-1">
                    <AccordionTrigger className="uppercase text-[#0083cb]">know us</AccordionTrigger>
                    <AccordionContent>
                        {knowUsLinks.map((item, i) => (
                            <AccordionItem key={i} value={i.toString()}>
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className="flex pl-4 w-full text-[#0083cb] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                                >
                                    <div className="uppercase">{item.label}</div>

                                </Link>
                            </AccordionItem>
                        ))}

                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="uppercase text-[#0083cb]">brands</AccordionTrigger>
                    <AccordionContent className="flex flex-col border-t ">
                        {brands.map((img, i) => (
                            <AccordionItem key={i} value={i.toString()} className="flex w-full items-center     relative overflow-hidden ">
                                <Link className="w-full py-1" href="/team-alignment" onClick={handleLinkClick}>
                                    <Image
                                        src={img}
                                        alt="brand logo"
                                        width={500}
                                        height={500}
                                        className="w-[100px] object-container h-[28px]"
                                        priority
                                    />
                                </Link>
                            </AccordionItem>
                        ))}
                    </AccordionContent>

                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="uppercase text-[#0083cb]">MEDIA</AccordionTrigger>
                    <AccordionContent>
                        <AccordionItem value="1">
                            <Link
                                href={'/team-alignment'}
                                className="flex pl-4 w-full text-[#0083cb] rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                                onClick={handleLinkClick}
                            >
                                <div className="uppercase">News & Events</div>
                            </Link>
                        </AccordionItem>
                        <AccordionItem value="2">
                            <Link
                                href={'/team-alignment'}
                                className="flex text-[#0083cb] pl-4 w-full rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                                onClick={handleLinkClick}
                            >
                                <div className="uppercase">Commercials</div>

                            </Link>
                        </AccordionItem>
                        <AccordionItem value="3">
                            <Link
                                href={'/team-alignment'}
                                className="flex text-[#0083cb] pl-4 w-full rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                                onClick={handleLinkClick}
                            >
                                <div className="uppercase">Press Releases</div>

                            </Link>
                        </AccordionItem>
                        <AccordionItem value="4">
                            <Link
                                href={'/team-alignment'}
                                className="flex text-[#0083cb] pl-4 w-full rounded-full items-center hover:text-lime-500 h-10 hover:bg-slate-200"
                                onClick={handleLinkClick}
                            >
                                <div className="uppercase">Investor Information</div>

                            </Link>
                        </AccordionItem>



                    </AccordionContent>
                </AccordionItem>
                <div className="flex   flex-col">
                    <Link href={"/"} className="flex text-[#0083cb] items-center  py-3 border-b ">
                        CAREER
                    </Link>
                    <Link href={"/"} className="flex text-[#0083cb] items-center  py-3 border-b">
                        CONTACT US
                    </Link>
                </div>



            </Accordion >



        </div >

    )
}

export default DropdrownMenu;


