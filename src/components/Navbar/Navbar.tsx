import React from 'react'
import Logo from './_components/Logo'
import NavigationMenuBar from './_components/NavigationMenuBar'
import ActionButtons from './_components/ActionButtons'


const Navbar = () => {
    return (

        <div data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            className='flex items-center  justify-between l lg:px-26 px-4 lg:py-1 py-1.5  w-screen bg-white  sticky  top-0 z-50  shadow drop-shadow-2xl'>
            <div className='-translate-y-1'>
                <Logo />
            </div>
            <div className='flex items-center flex-row justify-center gap-5 lg:-translate-y-1 '>
                <NavigationMenuBar />
                <ActionButtons />
            </div>
        </div>
    )
}

export default Navbar