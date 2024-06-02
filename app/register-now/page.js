import Accordian from '@components/Accordian';
import CommonFooter from '@components/CommonFooter'
import CommonHeader from '@components/CommonHeader'
import React from 'react'

export const metadata = {
    title: "Sign Up - Doctors Digital",
    description: "Create an account with Doctors Digital to start managing your patients, appointments, and settings efficiently.",
};

function RegisterNow() {

    const features = [
        {
            title: "Effortless Appointment Management",
            description: "Say goodbye to manual scheduling! Our intuitive appointment management system allows you to schedule, reschedule, and cancel appointments with ease. Spend less time on administrative tasks and more time focusing on patient care."
        },
        {
            title: "Comprehensive Patient Details",
            description: "Access all your patient information in one centralized location. From medical history to treatment plans, our platform provides comprehensive patient profiles to support informed decision-making and personalized care."
        },
        {
            title: "Seamless Communication",
            description: "Enhance communication with your patients through secure messaging and telehealth features. Keep your patients informed and engaged every step of the way, whether they're in the clinic or at home."
        }
    ];



    return (
        <div className='w-full md:min-h-max h-[100svh] flex flex-col'>
            <CommonHeader isRegister={true} />
            <div className='py-8 flex-1 w-full '>
                <div className='r-w grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='md:col-span-2'>
                        <h1 className=' text-xl md:text-2xl font-semibold mb-4 '>Create a New Account with Doctor's Digital</h1>
                        <p className='mb-0 md:mb-6'>Welcome to Doctor's Digital – where modern healthcare meets seamless management. Join our growing community of healthcare professionals and experience the future of medical practice management. By signing up with Doctor's Digital, you gain access to a comprehensive suite of tools designed to streamline your practice, enhance patient care, and boost your efficiency.</p>
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

export default RegisterNow