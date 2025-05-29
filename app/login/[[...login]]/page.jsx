import { SignIn } from '@clerk/nextjs'
import React from 'react'

export const generateMetadata = () => {
  return {
    title: 'Anmelden',
    description: 'Melden Sie sich an, um auf Ihr Konto zuzugreifen.',
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    alternates: {
      canonical: '/login',
    },
    openGraph: {
      title: 'Anmelden',
      description: 'Melden Sie sich an, um auf Ihr Konto zuzugreifen.',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Anmelden',
      description: 'Melden Sie sich an, um auf Ihr Konto zuzugreifen.',
    },
  }
}

const SignInPage = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <SignIn path='/login'/>
    </div>
  )
}

export default SignInPage