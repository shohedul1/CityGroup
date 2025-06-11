'use client';
import React, { useState } from "react";
import { X, AlignJustify, Search } from "lucide-react";
import DropdrownMenu from "./DropdrownMenu";

const ActionButtons = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="flex items-center justify-center gap-5 relative z-50">

            <div className="hidden md:hidden lg:flex xl:flex relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#565add]">
                    <Search className="w-5 h-5" />
                </span>
                <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 w-[150px] py-3 text-md text-[#565add] bg-[#eff0ff] rounded-[40px] border-4 border-[#565add] shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
                />
            </div>

            {/* Mobile Menu Toggle */}
            <div
                onClick={toggleDropdown}
                className="bg-[#eff0ff] p-3 rounded-full xl:hidden z-50 cursor-pointer"
            >
                {isDropdownVisible ? (
                    <X className="w-6 h-6 transition-all duration-500 ease-in-out text-[#565add]" />
                ) : (
                    <AlignJustify className="w-6 h-6 transition-all duration-500 ease-in-out text-[#565add]" />
                )}
            </div>

            {/* Dropdown with transition */}


            <div
                className={`fixed top-[60px] left-0 w-full  bg-white z-40 transition-all duration-500 ease-in-out shadow-md ${isDropdownVisible
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-5 pointer-events-none'
                    }`}
            >
                <DropdrownMenu onClose={() => setDropdownVisible(false)} />
            </div>

        </div>
    );
};

export default ActionButtons;
