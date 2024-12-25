import React from 'react'
import { auth } from '@clerk/nextjs/server'

const page = async () => {
  const { userId } = await auth();
  if (!userId) return redirect(`${process.env.DOMAIN_URL}/login?redirect_url=${process.env.DOMAIN_URL}/checkout`)
  return (
    <div>page</div>
  )
}

export default page