import CommonFooter from '@components/CommonFooter'
import CommonHeader from '@components/CommonHeader'
import React from 'react'

function RegisterNow() {
    return (
        <div className='w-full md:min-h-max h-[100svh] flex flex-col'>
            <CommonHeader isRegister={true} />
            <div className='flex-1'></div>
            <CommonFooter />
        </div>
    )
}

export default RegisterNow