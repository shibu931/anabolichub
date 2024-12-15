import {SignUp } from '@clerk/nextjs'
import React from 'react'

const ReigsterPage = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-10'>
            <SignUp path='/register' />
        </div>
    )
}

export default ReigsterPage