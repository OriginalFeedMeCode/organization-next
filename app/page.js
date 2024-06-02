import React from 'react'
import CommonHeader from '@components/CommonHeader'
import CommonFooter from '@components/CommonFooter'

function HomePage() {
  return (
    <div className='w-full md:min-h-max h-[100svh] flex flex-col'>
      <CommonHeader />
      <div className='py-4 flex-1 w-full '>

      </div>
      <CommonFooter />
    </div>
  )
}

export default HomePage