import LINK_PATHS from '@constants/LinkPath'
import Link from 'next/link'
import React from 'react'

const CommonHeader = ({ isRegister }) => {
    return (
        <div className='py-4 w-full border-b sticky top-0 left-0 right-0 bg-white/20 backdrop-blur'>
            <div className='r-w flex items-center min-h-max justify-between'>
                <Link href={LINK_PATHS.HOME}><h2 className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-red-800 g-t text-xl md:text-2xl'>Doctors Digital.</h2></Link>
                {
                    isRegister ? <Link href={LINK_PATHS.HOME} className='btn' >Login</Link> : <Link href={LINK_PATHS.SIGNUP} className='btn' >Register Now</Link>
                }

            </div>
        </div>
    )
}

export default CommonHeader