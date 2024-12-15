import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <SignIn path='/login'/>
    </div>
  )
}

export default SignInPage