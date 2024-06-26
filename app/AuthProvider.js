"use client"
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthProvider = ({ children }) => {

    return (
        <SessionProvider >
            {children}
            <ToastContainer />
        </SessionProvider>
    );
}
