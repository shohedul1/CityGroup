import React from 'react'
import Logo from './_components/Logo'
import NavigationMenuBar from './_components/NavigationMenuBar'
import ActionButtons from './_components/ActionButtons'


const Navbar = () => {
    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-center" className='flex items-center justify-between px-6 lg:px-26.5 w-full md:w-screen  sticky  top-0 z-50  pb-2  bg-white shadow drop-shadow-2xl '>
            <Logo />
            <div className='flex items-center flex-row  justify-center gap-5'>
                <NavigationMenuBar />
                <ActionButtons />
            </div>
        </div>
    )
}

export default Navbar