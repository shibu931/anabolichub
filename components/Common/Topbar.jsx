import React from 'react'
import { AboutIcon, LoginIcon, MailIcon, OrderIcon, RegisterIcon } from '../Icons/Icons'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Topbar = () => {
  return (
    <div className='bg-neutral py-2 w-full'>
      <div className="max-w-7xl flex mx-auto justify-between px-2">
        <div className="hidden lg:flex">
          <Link href='/content/about-us' className='text-base-100 flex text-sm my-auto me-4'><AboutIcon className="w-5 me-2" />Über uns</Link>
          <Link href='/contact-us' className='text-base-100 flex text-sm my-auto'><MailIcon className="w-5 me-2" />Kontakt</Link>
        </div>
        <div className="flex">
          <SignedIn>
            <UserButton showName/>
            <Link href='/orders' className='text-base-100 flex text-sm my-auto'><OrderIcon className="w-5 me-2" />Orders</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Link href='/login' className='text-base-100 flex text-sm my-auto me-4'><LoginIcon className="w-5 me-2" />Login</Link>
            </SignInButton>
            <Link href='/register' className='text-base-100 flex text-sm my-auto'><RegisterIcon className="w-5 me-2" />Register</Link>
          </SignedOut>
        </div>
      </div>
    </div>
  )
}

export default Topbar