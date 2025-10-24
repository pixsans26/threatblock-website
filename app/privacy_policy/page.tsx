import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | ThreatBlock',
    description: 'Read the official Privacy Policy for ThreatBlock. Learn how we collect, use, and protect your personal information and data.',
    keywords: 'privacy policy, data protection, user privacy, gdpr, ccpa, data handling'
};


export default function PrivacyPolicy() {
    return (
        <>

            <div className="bg-white text-gray-800 min-h-screen font-sans pt-24">
                {/* Main content wrapper, centered, with constrained width and responsive padding */}
                <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 md:py-12 lg:px-8">

                    {/* Main Page Header (responsive font size) */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
                        Privacy Policy
                    </h1>

                    {/* Last Updated Date */}
                    <p className="text-center text-sm text-gray-500 mb-8 sm:mb-10">
                        Last Updated: April 30, 2025
                    </p>

                    {/* Introductory Paragraph (responsive font size) */}
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
                        At ThreatBlock, we are committed to protecting your privacy and ensuring the security of your
                        personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard
                        your data when you visit our website, enroll in our training programs, or interact with our
                        services.
                    </p>

                    {/* Section: Information We Collect */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Information We Collect
                        </h2>
                        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 leading-relaxed">
                            <li>
                                <strong className="font-medium text-gray-800">Personal Information:</strong> Name, email address, phone number, billing information, and other
                                details provided during registration or purchase.
                            </li>
                            <li>
                                <strong className="font-medium text-gray-800">Usage Data:</strong> Information about how you interact with our website, such as IP address,
                                browser type, pages visited, and time spent on our site.
                            </li>
                            <li>
                                <strong className="font-medium text-gray-800">Course-Related Data:</strong> Progress, quiz results, and certification records to track your
                                learning journey.
                            </li>
                            <li>
                                <strong className="font-medium text-gray-800">Cookies and Tracking Technologies:</strong> Data collected via cookies to enhance your
                                browsing experience (see our Cookie Policy for details).
                            </li>
                        </ul>
                    </section>

                    {/* Section: How We Use Your Information */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            How We Use Your Information
                        </h2>
                        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 leading-relaxed">
                            <li>
                                To process enrollments, deliver training programs, and issue certifications.
                            </li>
                            <li>
                                To communicate with you about course updates, promotions, or customer support.
                            </li>
                            <li>
                                To improve our website, services, and user experience through analytics.
                            </li>
                            <li>
                                To comply with legal obligations and protect against fraudulent activities.
                            </li>
                        </ul>
                    </section>

                    {/* Section: Data Sharing */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Data Sharing
                        </h2>
                        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 leading-relaxed">
                            <li>
                                <strong className="font-medium text-gray-800">Service Providers:</strong> We may share data with trusted third-party providers (e.g., payment
                                processors, hosting services) who assist in delivering our services.
                            </li>
                            <li>
                                <strong className="font-medium text-gray-800">Partners:</strong> With your consent, we may share data with certification bodies (e.g., EC-Council,
                                CompTIA) to issue credentials.
                            </li>
                            <li>
                                <strong className="font-medium text-gray-800">Legal Requirements:</strong> We may disclose data if required by law or to protect our rights and
                                safety.
                            </li>
                        </ul>
                    </section>

                    {/* Section: Your Rights */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Your Rights
                        </h2>
                        <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-3 text-gray-700 leading-relaxed">
                            <li>
                                Access, update, or delete your personal information by contacting us at privacy@ThreatBlock.in.
                            </li>
                            <li>
                                Opt out of marketing communications at any time via the unsubscribe link in our emails.
                            </li>
                            <li>
                                Request information about how your data is processed and shared.
                            </li>
                        </ul>
                    </section>

                    {/* Section: Data Security */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Data Security
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We implement industry-standard measures, including encryption and secure servers, to protect
                            your data. However, no system is completely secure, and we encourage you to use strong
                            passwords and secure networks.
                        </p>
                    </section>

                    {/* Section: International Transfers */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            International Transfers
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you are located outside the United States, your data may be transferred to and processed in
                            the U.S., where our servers are located. We ensure compliance with applicable data protection
                            laws.
                        </p>
                    </section>

                    {/* Section: Contact Us */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Contact Us
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            For questions or concerns about this Privacy Policy, please contact us at
                            privacy@ThreatBlock.in or ThreatBlock, 67, 2nd Floor, Satya Niketan 110021
                        </p>
                    </section>

                </main>
            </div>
        </>
    );
}