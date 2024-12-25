import Breadcrumbs from '@/components/Common/Breadcrumbs'
import React from 'react'
import OrdersTable from './OrdersTable'
import { auth } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";
import { getOrders } from '@/lib/actions/order.actions'

const page = async () => {
    const { userId } = await auth();

    if (!userId) return redirect(`${process.env.DOMAIN_URL}/login?redirect_url=${process.env.DOMAIN_URL}/checkout`)

    const orders = await getOrders(userId);

    return (
        <main className="container mx-auto mt-4 px-4 lg:px-0">
            <Breadcrumbs />

            <div className="mt-5">
                <OrdersTable orders={orders} />
            </div>
            
        </main>
    )
}

export default page