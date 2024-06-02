import React from 'react'
import CommonHeader from '@components/CommonHeader';
import CommonFooter from '@components/CommonFooter';
import Link from 'next/link';
import LINK_PATHS from '@constants/LinkPath';

export default function PrivacyPolicy() {
    return (
        <div className="">
            <CommonHeader />
            <div className="r-w py-6">
                <div className='md:flex md:justify-between md:items-center md:gap-3 mb-6 '>
                    <h1 className="text-3xl font-bold mb-3 md:mb-0">Privacy Policy</h1>
                    <p className="">Effective Date: June 1, 2024</p>
                </div>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="mb-4">
                    Welcome to Doctor's Digital. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you use our services.
                </p>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <p className="mb-4">
                    We collect personal information that you provide to us, including but not limited to:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Contact Information: Name, email address, phone number.</li>
                    <li>Account Information: Username and password.</li>
                    <li>Health Information: Appointments, prescriptions, medical history, and other patient details.</li>
                    <li>Usage Information: Information about how you use our website and services.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">
                    We use the information we collect in the following ways:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>To Provide Services: We use your personal information to provide you with the services you request, including managing appointments, updating prescriptions, and accessing patient details.</li>
                    <li>To Communicate with You: We may use your contact information to send you updates, reminders, and other communications related to your account and our services.</li>
                    <li>To Improve Our Services: We analyze the usage information to improve the functionality and user experience of our website and services.</li>
                    <li>To Ensure Security: We use your information to protect against unauthorized access, fraud, and other security threats.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Data Encryption and Security</h2>
                <p className="mb-4">
                    We take your privacy and data security seriously. All data is encrypted both in transit and at rest using industry-standard encryption protocols. Our security measures include:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Encryption: All personal data is encrypted using advanced encryption standards to protect your information from unauthorized access.</li>
                    <li>Secure Access: Access to your data is restricted to authorized personnel only, and is protected by multi-factor authentication and other security measures.</li>
                    <li>Regular Security Assessments: We regularly perform security assessments to identify and address potential vulnerabilities.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">5. How We Share Your Information</h2>
                <p className="mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>With Your Consent: We may share your information with third parties if you have given us explicit consent to do so.</li>
                    <li>For Legal Reasons: We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                    <li>With Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, and customer service. These providers are bound by strict confidentiality agreements and security measures.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Data Retention</h2>
                <p className="mb-4">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.
                </p>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">7. Your Rights</h2>
                <p className="mb-4">
                    You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Access: You have the right to access the personal information we hold about you.</li>
                    <li>Correction: You have the right to request the correction of inaccurate personal information.</li>
                    <li>Deletion: You have the right to request the deletion of your personal information.</li>
                    <li>Objection: You have the right to object to the processing of your personal information.</li>
                    <li>Restriction: You have the right to request the restriction of processing your personal information.</li>
                    <li>Portability: You have the right to receive a copy of your personal information in a structured, commonly used, and machine-readable format.</li>
                </ul>
                <p className="mb-4">
                    To exercise any of these rights, please contact us at [insert contact email].
                </p>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new Privacy Policy on our website and updating the effective date at the top of this page.
                </p>

                <h2 className="text-xl md:text-2xl font-semibold mb-4">9. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mb-4">
                    Doctor's Digital<br />
                    Email: <Link className='font-semibold hover:text-blue-600' href={LINK_PATHS.DD}>Doctors Digital</Link>
                </p>
            </div>
            <CommonFooter />
        </div>
    );
}
