import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <div>
            <Link href={"/"}>
                <Image
                    src={'/logo/City_Group.png'}
                    alt='image'
                    width={500}
                    height={500}
                    // style={{ width: "auto", height: "auto" }} // Adjusted style
                    className='lg:w-[247px] lg:h-[64px]  w-[150px] h-[50px]  object-contain'
                    property="true"
                    priority

                />
            </Link>
        </div>
    )
}

export default Logo