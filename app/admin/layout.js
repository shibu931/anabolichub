import Sidebar from '@/components/Dashboard/Sidebar';
import { Suspense } from 'react';

export default function Layout({ children }) {
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