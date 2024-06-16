"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import CryptionUtil from '@util/CryptionUtil'
import { useRouter } from 'next/navigation';



const RegisterForm = () => {

    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        userEmail: '',
        phoneCode: '+91',
        phoneNumber: '',
        userCredential: '',
        confirmPassword: ''
    });

    const submitForm = async (event) => {
        event.preventDefault();

        if (formData.userCredential.length < 8) {
            toast.error('Password must be at least 8 characters long');
            return;
        }

        if (formData.userCredential !== formData.confirmPassword) {
            toast.error('Passwords do not match')
            return;
        }

        const url = "http://localhost:9090/doctors-digital/v1/users/signup-doctor-s1";

        const { encodeToBase64 } = CryptionUtil;
        const request = encodeToBase64(JSON.stringify(formData))

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: request
            });

            if (response.status === 200) {
                const data = await response.json();
                toast.success(data.message);
                router.replace('/')
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className='w-full'>
            <form className='grid grid-cols-1 gap-3' onSubmit={submitForm}>
                <div className='mb-2 md:mb-0'>
                    <label className="block mb-1 text-sm font-medium text-gray-900">
                        First Name <sup>*</sup>
                    </label>
                    <input
                        name="firstName"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                    />
                </div>
                <div>
                    <label htmlFor="userEmail" className="block mb-1 text-sm font-medium text-gray-900">
                        Email <sup>*</sup>
                    </label>
                    <input
                        autoComplete="current-username"
                        name="userEmail"
                        id="userEmail"
                        required
                        type='email'
                        value={formData.userEmail}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                        placeholder="username@domain.com"
                    />
                </div>
                <div className='space-y-1 !mt-0'>
                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-900">
                        Phone Number <sup>*</sup>
                    </label>
                    <div className='w-full flex gap-2 items-center'>
                        <input
                            id="phoneCode"
                            name="phoneCode"
                            disabled
                            value={formData.phoneCode}
                            className="bg-gray-50 border px-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5 w-14"
                        />
                        <input
                            name="phoneNumber"
                            required
                            id="phoneNumber"
                            type='number'
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 p-2.5 flex-1"
                            placeholder="92XXXXXXX"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="userCredential" className="block mb-1 text-sm font-medium text-gray-900">
                        Password <sup>*</sup>
                    </label>
                    <input
                        autoComplete="current-password"
                        name="userCredential"
                        id="userCredential"
                        required
                        type="password"
                        value={formData.userCredential}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                        placeholder="Password"
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-900">
                        Confirm Password <sup>*</sup>
                    </label>
                    <input
                        autoComplete="current-password"
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                        placeholder="Confirm Password"
                    />
                </div>

                <button type="submit" className="w-full text-white bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Submit
                </button>
            </form>

        </div>
    );
};

export default RegisterForm;
