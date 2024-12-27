import React from 'react'
import { auth } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";

const page = async () => {
  const { userId } = await auth();
  if (!userId) return redirect(`${process.env.DOMAIN_URL}/login?redirect_url=${process.env.DOMAIN_URL}/checkout`)
  return (
    <div className='container mx-auto my-5'>
      
    </div>
  )
}

export default page