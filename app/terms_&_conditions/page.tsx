import Link from "next/link";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Conditions | ThreatBlock',
    description: 'Review the Terms & Conditions of using ThreatBlock\'s website and services. This outlines your rights and responsibilities.',
    keywords: 'terms and conditions, terms of service, legal, user agreement, service agreement'
};

export default function TermsCondition() {
    return (
        <>
            <div className="bg-white text-gray-800 min-h-screen font-sans pt-24">
                {/* Main content wrapper, centered, with constrained width and responsive padding */}
                <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 md:py-12 lg:px-8">

                    {/* Main Page Header (responsive font size) */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
                        Terms and Conditions
                    </h1>

                    {/* Last Updated Date */}
                    <p className="text-center text-sm text-gray-500 mb-8 sm:mb-10">
                        Last Updated: October 22, 2025
                    </p>

                    {/* Introductory Paragraphs (responsive font size) */}
                    <div className="space-y-4 text-gray-700 leading-relaxed mb-8 sm:mb-10">
                        <p>
                            Welcome to ThreatBlock ("Company", "we", "our", "us"). These Terms and Conditions ("Terms") govern your
                            use of our website, products, services, and any related content or materials made available through
                            <a href='www.threatblock.in' className="text-red-600"> www.threatblock.in</a> ("Website"). By accessing or using our Website, you agree to comply with and be bound
                            by these Terms.
                        </p>
                        <p>
                            If you do not agree with any part of these Terms, please discontinue use of our Website and services
                            immediately.
                        </p>
                    </div>

                    {/* Sections Wrapper */}
                    <div className="space-y-8">

                        {/* Section 1: Company Overview */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                1. Company Overview
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                ThreatBlock is a cybersecurity firm specializing in enterprise-grade security consulting, corporate and
                                institutional training, and cyber defense products. Our mission is to help organizations defend against
                                evolving digital threats - defending tomorrow, today.
                            </p>
                        </section>

                        {/* Section 2: Acceptance of Terms */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                2. Acceptance of Terms
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                By using our Website, requesting a service, registering for training, or engaging with any of our offerings, you
                                confirm that:
                            </p>
                            <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 text-gray-700 leading-relaxed">
                                <li>You have read, understood, and agreed to these Terms.</li>
                                <li>You have the legal authority to accept these Terms on behalf of yourself or your organization.</li>
                            </ul>
                        </section>

                        {/* Section 3: Services */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                3. Services
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our Website may provide information about our consulting, training, and product solutions, including but not
                                limited to:
                            </p>
                            <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 text-gray-700 leading-relaxed">
                                <li>Network and application security assessments</li>
                                <li>Threat intelligence and red teaming</li>
                                <li>Cybersecurity training programs</li>
                                <li>Specialized solutions and custom deployments</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                All services are subject to availability and separate contractual agreements as required.
                            </p>
                        </section>

                        {/* Section 4: Use of Website */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                4. Use of Website
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                You agree to use the Website for lawful purposes only. You must not:
                            </p>
                            <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 text-gray-700 leading-relaxed">
                                <li>Engage in activities that disrupt, damage, or interfere with the Website's functionality or security.</li>
                                <li>Attempt to gain unauthorized access to any part of the Website, its systems, or associated data.</li>
                                <li>Copy, modify, distribute, or exploit Website content for commercial use without prior written consent from ThreatBlock.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                We reserve the right to suspend or terminate access to users who violate these Terms.
                            </p>
                        </section>

                        {/* Section 5: Intellectual Property */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                5. Intellectual Property
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                All materials on the Website, including logos, graphics, designs, videos, documents, and written content, are
                                the exclusive property of ThreatBlock unless otherwise stated.
                            </p>
                        </section>

                        {/* Section 6: Training Programs and Certifications */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                6. Training Programs and Certifications
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                ThreatBlock offers specialized cybersecurity training courses. By enrolling, you agree that all course
                                materials are protected intellectual property and for personal use only. Reproduction or redistribution of
                                training material is strictly prohibited.
                            </p>
                        </section>

                        {/* Section 7: Consulting and Engagements */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                7. Consulting and Engagements
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Any professional engagement with ThreatBlock including penetration testing, vulnerability assessments, or
                                advisory services shall be governed by a separate Service Agreement signed between the client and
                                ThreatBlock.
                            </p>
                        </section>

                        {/* Section 8: Product Usage */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                8. Product Usage
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                If you use our products (such as scanners, threat intelligence tools, or SaaS-based solutions), you must
                                comply with the accompanying license terms or user agreements. Unauthorized use or reverse-engineering
                                of ThreatBlock's products is strictly prohibited.
                            </p>
                        </section>

                        {/* Section 9: Third-Party Links and Resources */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                9. Third-Party Links and Resources
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our Website may include links to third-party websites or resources for informational purposes. ThreatBlock is
                                not responsible for the content, accuracy, or reliability of these external resources.
                            </p>
                        </section>

                        {/* Section 10: Privacy and Data Protection */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                10. Privacy and Data Protection
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and safeguard your data.
                            </p>
                        </section>

                        {/* Section 11: Limitation of Liability */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                11. Limitation of Liability
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                ThreatBlock and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages
                                arising from your use of the Website or services.
                            </p>
                        </section>

                        {/* Section 12: Indemnification */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                12. Indemnification
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                You agree to indemnify and hold harmless ThreatBlock, its affiliates, and team members from any claims,
                                damages, or expenses arising out of your use or misuse of the Website or services.
                            </p>
                        </section>

                        {/* Section 13: Modifications to Terms */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                13. Modifications to Terms
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                ThreatBlock reserves the right to modify or update these Terms at any time. Continued use after updates
                                constitutes acceptance of the revised Terms.
                            </p>
                        </section>

                        {/* Section 14: Termination */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                14. Termination
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may suspend or terminate access to the Website or services without prior notice if you violate these
                                Terms.
                            </p>
                        </section>

                        {/* Section 15: Governing Law */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                15. Governing Law
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                These Terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction
                                of the courts in New Delhi, Delhi, India.
                            </p>
                        </section>

                        {/* Section 16: Contact Us */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                16. Contact Us
                            </h2>
                            <div className="text-gray-700 leading-relaxed space-y-2">
                                <p>
                                    For any questions regarding these Terms, please contact us at:
                                </p>
                                <p className="font-medium text-gray-800">
                                    ThreatBlock Cybersecurity Pvt. Ltd.
                                </p>
                                <p>
                                    <strong className="font-medium">Email:</strong><a href="mailto:support@threatblock.in" className="text-red-600"> support@threatblock.in</a>
                                </p>
                                <p>
                                    <strong className="font-medium">Website:</strong> <a href='https://www.threatblock.in' className="text-red-600"> www.threatblock.in</a>
                                </p>
                            </div>
                        </section>

                    </div>
                </main>
            </div>
        </>
    );
}