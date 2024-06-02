import React from 'react'
import CommonHeader from '@components/CommonHeader'
import CommonFooter from '@components/CommonFooter'
import Accordian from '@components/Accordian';

export const metadata = {
  title: "Doctors Digital - Login",
  description: "Welcome back! Please log in to access your personalized dashboard.",
};

function HomePage() {

  const features = [
    {
      title: "Efficient Prescription Updates",
      description: "Stay connected with your patients and ensure they receive the care they need. With Doctor's Digital, you can easily update prescriptions, monitor medication adherence, and provide timely interventions when necessary."
    },
    {
      title: "Centralized Patient Information",
      description: "Access comprehensive patient profiles in one centralized location. From medical history to treatment plans, our platform provides you with the information you need to deliver personalized care and make informed decisions."
    },
    {
      title: "Secure Communication",
      description: "Communicate securely with your patients through our messaging and telehealth features. Whether you're providing follow-up care or answering questions, you can engage with your patients confidently, knowing their data is protected."
    }
  ];

  return (
    <div className='w-full md:min-h-max h-[100svh] flex flex-col'>
      <CommonHeader />
      <div className='py-8 flex-1 w-full '>
        <div className='r-w grid grid-cols-1 md:grid-cols-3 gap-5'>
          <div className='md:col-span-2'>
            <h1 className=' text-xl md:text-2xl font-semibold mb-4 '>Welcome Back to Doctor's Digital</h1>
            <p className='mb-0 md:mb-6'>Log in to your Doctor's Digital account to access powerful tools designed to simplify your practice management and enhance patient care. With our secure platform, you can seamlessly manage appointments, update prescriptions, and access patient details anytime, anywhere.</p>
            <h2 className='hidden md:block text-xl md:text-2xl font-semibold mb-6'>Why choose us?</h2>
            <Accordian features={features} />
          </div>
          <div>

          </div>
        </div>
      </div>
      <CommonFooter />
    </div>
  )
}

export default HomePage