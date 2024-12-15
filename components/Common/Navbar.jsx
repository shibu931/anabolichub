'use server'
import Link from 'next/link'
import NavMenu from './NavMenu'
import Cart from "./Cart"



const Navbar = () => {
    
    return (
        <header>
            {/* Header Nav */}
            <div className='grid grid-cols-3 py-6 max-w-7xl mx-auto'>
                <div className='me-auto'>
                    <label className="input border-accent-content/50 rounded-none flex items-center gap-2 h-10">
                        <input type="text" className="grow input-sm placeholder:text-sm ps-0" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#000"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <div className='mx-auto'>
                    <Link href="/" className='text-3xl italic font-extrabold'>
                        Anabolic<span className='text-red-600 font-extrabold text-4xl'>Hub</span>
                    </Link>
                </div>
                <div className='ms-auto'>
                    <Cart/>
                </div>
            </div>

            {/* Menu Nav */}
            <nav className='bg-success-content flex justify-center'>
                <ul className="menu lg:menu-horizontal py-1 container text-base-100 ">
                    <NavMenu />
                </ul>
            </nav>
        </header>
    )
}

export default Navbar