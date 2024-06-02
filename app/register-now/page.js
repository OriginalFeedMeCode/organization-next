import CommonFooter from '@components/CommonFooter'
import CommonHeader from '@components/CommonHeader'
import React from 'react'

export const metadata = {
    title: "Sign Up - Doctors Digital",
    description: "Create an account with Doctors Digital to start managing your patients, appointments, and settings efficiently.",
};

function RegisterNow() {
    return (
        <div className='w-full md:min-h-max h-[100svh] flex flex-col'>
            <CommonHeader isRegister={true} />
            <div className='flex-1 py-6'></div>
            <CommonFooter />
        </div>
    )
}

export default RegisterNow