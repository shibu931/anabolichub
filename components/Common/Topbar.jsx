import React from 'react'
import { AboutIcon, LoginIcon, MailIcon, RegisterIcon } from '../Icons/Icons'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Topbar = () => {
  return (
    <div className='bg-neutral py-2 w-full'>
      <div className="max-w-7xl flex mx-auto justify-between">
        <div className="flex">
          <Link href='/about-us' className='text-base-100 flex text-sm my-auto me-4'><AboutIcon className="w-5 me-2" />About Us</Link>
          <Link href='/contact-us' className='text-base-100 flex text-sm my-auto'><MailIcon className="w-5 me-2" />Contact Us</Link>
        </div>
        <div className="flex">
          <SignedIn>

            <UserButton showName/>
          </SignedIn>
          <SignedOut>
            <SignInButton>

          <Link href='/login' className='text-base-100 flex text-sm my-auto me-4'><LoginIcon className="w-5 me-2" />Login</Link>
            </SignInButton>
          </SignedOut>
          <Link href='/register' className='text-base-100 flex text-sm my-auto'><RegisterIcon className="w-5 me-2" />Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Topbar