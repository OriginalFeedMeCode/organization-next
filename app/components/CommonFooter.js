import Link from 'next/link'
import React from 'react'
import LINK_PATHS from '@constants/LinkPath'

const CommonFooter = () => {
    return (
        <div className='py-4 w-full border-t text-xs '>
            <div className='r-w md:flex md:items-center min-h-max md:justify-between'>
                <p className='mb-2 md:mb-0'>{new Date().getFullYear()} All Rights Reserved &copy; Doctors Digital.</p>
                <div className='flex gap-3 md:gap-5 '>
                    <Link href={LINK_PATHS.PRIVACY_POLICY} className='hover:text-blue-600 transition-colors duration-150' >Privacy Policy</Link>
                    <Link target='_' href={LINK_PATHS.SHOAIB} className='hover:text-blue-600 transition-colors duration-150' >Developed by Shoaib</Link>
                </div>
            </div>
        </div>
    )
}

export default CommonFooter