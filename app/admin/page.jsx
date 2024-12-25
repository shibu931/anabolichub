'use client'
import DashboardHeader from '@/components/Dashboard/DashboardHeader';
import Sidebar from '@/components/Dashboard/Sidebar';
import { useState, useEffect } from 'react';
const DashboardPage = () => {
  const [stats, setStats] = useState({ users: 0, products: 0, articles: 0 })
  useEffect(() => {
    // fetch stats
    setStats({ users: 10, products: 20, articles: 30 })
  }, [])
  return (
    <>
      <DashboardHeader title="Dashboard" />
      <div className="container mx-auto mt-8"> {/* Added container and margin */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white rounded p-6 shadow-md hover:shadow-lg transition duration-300'> {/* Added hover effect */}
            <h2 className='text-lg font-bold text-gray-700'>Users</h2>
            <p className='text-3xl font-semibold text-blue-500 mt-2'>{stats.users}</p>
          </div>
          <div className='bg-white rounded p-6 shadow-md hover:shadow-lg transition duration-300'>
            <h2 className='text-lg font-bold text-gray-700'>Products</h2>
            <p className='text-3xl font-semibold text-green-500 mt-2'>{stats.products}</p>
          </div>
          <div className='bg-white rounded p-6 shadow-md hover:shadow-lg transition duration-300'>
            <h2 className='text-lg font-bold text-gray-700'>Articles</h2>
            <p className='text-3xl font-semibold text-orange-500 mt-2'>{stats.articles}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;