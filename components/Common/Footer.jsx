import Link from 'next/link'
import React from 'react'

const footerLinks = [
    {
        title: 'Recommendend Steroids',
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
                title: 'Winstrol (Stanazolo)',
                href: '/orale-steroiden/stanazolol'
            },
            {
                title: 'Turinabol',
                href: '/orale-steroiden/turinabol'
            },
        ]
    },
    {
        title: 'Testosterone',
        navLinks: [
            {
                title: 'Testosterone Enanthate',
                href: '/testosteron/testosteron-enantat'
            },
            {
                title: 'Testosterone Propionate',
                href: '/testosteron/testosteron-propionat'
            },
            {
                title: 'Testosterone 400',
                href: '/testosteron/testosterone-400'
            },
            {
                title: 'Testosterone Cypionate',
                href: '/testosteron/testosterone-cypionate'
            },
            {
                title: 'Testosterone Mix',
                href: '/testosteron/testosterone-mix'
            },
        ]
    },
    {
        title: 'Quick Links',
        navLinks: [
            {
                title: 'Deliver',
                href: '/delivery-details'
            },
            {
                title: 'Legal Information',
                href: '/legal-information'
            },
            {
                title: 'Terms & Conditions',
                href: '/terms-and-conditions'
            },
            {
                title: 'Secure Payment',
                href: '/secure-payment'
            },
            {
                title: 'FAQs',
                href: '/faqs'
            },
            {
                title: 'How do I make an international transfer?',
                href: '/blog/how-do-i-make-international-transfer'
            },
            {
                title: 'Contact',
                href: '/contact-us'
            },
            {
                title: 'Blog',
                href: '/blogs'
            },
        ]
    }
]

const Footer = () => {
    return (
        <footer className="bg-success-content text-base-100 pt-10 mt-10 px-5">
            <div className="footer container mx-auto pb-5">
                <aside>
                    <h2 className='text-3xl font-extrabold italic'>Anaboic<span className='text-primary text-4xl'>Hub</span></h2>                    
                    <p>
                        Providing reliable steroids since 1992
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
                <p className='mb-0'>Copyright © {new Date().getFullYear()} - All right reserved by <Link href={'/'}>AnabolicHub</Link> Ltd</p>
            </aside>
        </footer>
    )
}

export default Footer