'use client'
import Link from 'next/link';


const Sidebar = ({isActive}) => {


  return (
    <aside className="bg-gray-800 text-white w-64 p-4 h-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/admin/dashboard" className={`block p-2 rounded hover:bg-gray-700 transition duration-300 `}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/admin/users" className={`block p-2 rounded hover:bg-gray-700 transition duration-300 `}>
              Users
            </Link>
          </li>
          <li>
            <Link href="/admin/products" className={`block p-2 rounded hover:bg-gray-700 transition duration-300 `}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/admin/article" className={`block p-2 rounded hover:bg-gray-700 transition duration-300 `}>
              Articles
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;