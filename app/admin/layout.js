import Sidebar from '@/components/Dashboard/Sidebar';
import { Suspense } from 'react';
import { auth } from '@clerk/nextjs/server'
import { getUserRole } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

export default async function Layout({ children }) {
  const {userId} = await auth();
  const role = await getUserRole(userId);
  
  if(role != 'admin' && role !='editor') redirect('/')
  
  return (
    <Suspense>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto"> {/* Added margin, padding, and overflow */}
          {children}
        </main>
      </div>
    </Suspense>
  );
}