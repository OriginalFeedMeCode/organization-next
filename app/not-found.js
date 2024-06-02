import CommonFooter from '@components/CommonFooter'
import CommonHeader from '@components/CommonHeader'
import LINK_PATHS from '@constants/LinkPath';
import Link from 'next/link';
import React from 'react'

export const metadata = {
    title: "Page Not Found - Doctor's Digital",
    description: "The page you are looking for does not exist. Visit Doctor's Digital to manage your appointments, prescriptions, and patient details securely.",
};

function notFound() {
    return (
        <div className='w-full md:min-h-max h-[100svh] flex flex-col'>
            <CommonHeader />
            <div className='flex-1 py-6'>
                <div className='r-w h-full flex flex-col justify-center'>
                    <div className='w-full'>
                        <h1 className="text-2xl md:text-4xl font-bold mb-4">404 - Page Not Found</h1>
                        <p className="md:text-lg mb-4">The page you are looking for does not exist.</p>
                        <p className="mb-4">Visit <Link href={LINK_PATHS.HOME} className="text-blue-500 underline">Doctor's Digital</Link> to manage your appointments, prescriptions, and account details securely.</p>
                        <Link href="/" className="btn">Go to Home</Link>
                    </div>
                </div>
            </div>
            <CommonFooter />
        </div>
    )
}

export default notFound