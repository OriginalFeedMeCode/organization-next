"use client"
import CommonFooter from '@components/CommonFooter';
import CommonHeader from '@components/CommonHeader';
import LINK_PATHS from '@constants/LinkPath';
import Link from 'next/link';
//import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function Verify() {
    const [payload, setPayload] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [searchParamsLoaded, setSearchParamsLoaded] = useState(false);

    useEffect(() => {
        const fetchSearchParams = async () => {
            try {
                const params = new URLSearchParams(window.location.search);
                const payloadParam = params.get('payload');
                if (payloadParam) {
                    setPayload(payloadParam);
                }
            } catch (error) {
                console.error('Error fetching search params:', error);

            } finally {
                setSearchParamsLoaded(true);
            }
        };
        fetchSearchParams();
    }, []);

    const handleVerification = async () => {
        const verificationUrl = `http://localhost:9090/doctors-digital/v1/users/activation/?payload=${payload}`;

        try {
            const response = await fetch(verificationUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                const data = await response.json();
                toast.success(data.message);
                setIsVerified(true);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error during verification:', error);
            toast.error('Error during verification');
        }
    };

    return (
        <div className='h-screen flex flex-col'>
            <CommonHeader />
            <div className='flex-1 py-6 min-h-max r-w flex items-center justify-center'>
                {searchParamsLoaded ? (
                    payload ? (
                        isVerified ? (
                            <div className='text-center'>
                                <h2 className='md:text-3xl font-semibold mb-4'>Verification Success</h2>
                                <p className='mb-4'>Please click the button below to login.</p>
                                <Link href={LINK_PATHS.HOME}>
                                    <a className='btn'>Login</a>
                                </Link>
                            </div>
                        ) : (
                            <div className='text-center'>
                                <h2 className='md:text-3xl font-semibold mb-4'>Verify Your Email Address</h2>
                                <p className='mb-4'>Please click the button below to verify your email.</p>
                                <button className='btn' onClick={handleVerification}>Verify</button>
                            </div>
                        )
                    ) : (
                        <p>Unauthorized Request</p>
                    )
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <CommonFooter />
        </div>
    );
}

export default Verify;
