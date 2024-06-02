import React from 'react'
import CommonHeader from '@components/CommonHeader'
import CommonFooter from '@components/CommonFooter'

export const metadata = {
  title: "Doctors Digital - Login",
  description: "Welcome back! Please log in to access your personalized dashboard.",
};

function HomePage() {
  return (
    <div className='w-full md:min-h-max h-[100svh] flex flex-col'>
      <CommonHeader />
      <div className='py-6 flex-1 w-full '>
        <div className='w-full md:flex md:items-center md:gap-5'>

        </div>
      </div>
      <CommonFooter />
    </div>
  )
}

export default HomePage