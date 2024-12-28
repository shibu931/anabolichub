import Link from 'next/link'
import React from 'react'

const footerLinks = [
    {
        title: 'Empfohlene Steroide',
        navLinks: [
            {
                title: 'Dianabol',
                href: '/orale-steroiden/methandienone-dianabol'
            },
            {
                title: 'Anavar (Oxandrolon)',
                href: '/orale-steroiden/oxandrolon'
            },
            {
                title: 'Clenbuterol',
                href: '/orale-steroiden/clenbuterol'
            },
            {
                title: 'Winstrol (Stanazolol)',
                href: '/orale-steroiden/stanazolol'
            },
            {
                title: 'Turinabol',
                href: '/orale-steroiden/turinabol'
            },
        ]
    },
    {
        title: 'Testosteron',
        navLinks: [
            {
                title: 'Testosteron Enantat',
                href: '/testosteron/testosteron-enantat'
            },
            {
                title: 'Testosteron Propionat',
                href: '/testosteron/testosteron-propionat'
            },
            {
                title: 'Testosteron 400',
                href: '/testosteron/testosterone-400'
            },
            {
                title: 'Testosteron Cypionat',
                href: '/testosteron/testosterone-cypionate'
            },
            {
                title: 'Testosteron Mix',
                href: '/testosteron/testosterone-mix'
            },
        ]
    },
    {
        title: 'Schnelllinks',
        navLinks: [
            {
                title: 'Lieferdetails',
                href: '/content/delivery-details'
            },
            {
                title: 'Rechtliche Informationen',
                href: '/content/legal-information'
            },
            {
                title: 'Allgemeine Geschäftsbedingungen',
                href: '/content/terms-and-conditions'
            },
            {
                title: 'Sichere Zahlung',
                href: '/content/secure-payment'
            },
            {
                title: 'FAQs',
                href: '/content/faqs'
            },
            {
                title: 'Wie tätige ich eine internationale Überweisung?',
                href: '/blog/how-do-i-make-international-transfer'
            },
            {
                title: 'Kontakt',
                href: '/contact-us'
            },
            {
                title: 'Blog',
                href: '/blogs'
            },
        ]
    }
];
const Footer = () => {
    return (
        <footer className="bg-success-content text-base-100 pt-10 mt-10 px-5">
            <div className="footer container mx-auto pb-5">
                <aside>
                    <h2 className='text-3xl font-extrabold italic'>Anaboic<span className='text-primary text-4xl'>Hub</span></h2>                    
                    <p>
                    Zuverlässige Steroide seit 2010
                    </p>
                </aside>
                {
                    footerLinks.map((links, index) => (
                        <nav key={index}>
                            <h6 className="footer-title text-base opacity-100">{links.title}</h6>
                            {links.navLinks.map((link, index) => (
                                <Link className="link link-hover text-sm" href={link.href} key={index}>{link.title}</Link>
                            ))}
                        </nav>
                    ))
                }
            </div>
            <hr className='border-primary'/>
            <aside className='text-center py-5'>
            <p className='mb-0'>Copyright © {new Date().getFullYear()} - Alle Rechte vorbehalten von <Link href={'/'}>AnabolicHub</Link> Ltd</p>
            </aside>
        </footer>
    )
}

export default Footer