import {SignUp } from '@clerk/nextjs'
import React from 'react'

export const generateMetadata = () => {
    return {
        title: 'Registrieren',
        description: 'Erstellen Sie ein neues Konto, um auf alle Funktionen zuzugreifen.',
        metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
        alternates: {
            canonical: '/register',
        },
        openGraph: {
            title: 'Registrieren',
            description: 'Erstellen Sie ein neues Konto, um auf alle Funktionen zuzugreifen.',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/register`,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Registrieren',
            description: 'Erstellen Sie ein neues Konto, um auf alle Funktionen zuzugreifen.',
        },
    }
}

const ReigsterPage = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-10'>
            <SignUp path='/register' />
        </div>
    )
}

export default ReigsterPage