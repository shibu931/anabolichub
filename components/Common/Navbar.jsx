'use client'
import Link from 'next/link';
import NavMenu from './NavMenu';
import Cart from './Cart';
import { useState, useEffect } from 'react';
import Loading from './Loading'
import { AlignRight } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const searchProducts = async () => {
            if (!query) {
                setResults([]);
                return;
            }

            setLoading(true);
            try {
                const res = await fetch(`/api/products/search?q=${query}`);
                if (!res.ok) {
                    throw new Error(`API returned an error: ${res.status}`);
                }
                const data = await res.json();

                setResults(data.products);
            } catch (error) {
                console.error('Error searching:', error);
                setResults([]); // Clear results on error
            } finally {
                setLoading(false);
            }
        };

        const debounceFn = setTimeout(() => {
            searchProducts();
        }, 500);

        return () => clearTimeout(debounceFn);
    }, [query]);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (query) {
            window.location.href = `/search?q=${query}`;
        }
    };

    return (
        <header >
            {/* Header Nav */}
            <div className="grid grid-cols-2 lg:grid-cols-3 py-3 lg:py-6 max-w-7xl mx-auto px-2">
                <div className="hidden lg:block me-auto search-bar w-full">
                    <form onSubmit={handleSearchSubmit}>
                        <label className="input border-accent-content/50 rounded-none flex items-center gap-2 h-10 relative w-3/4">
                            <input
                                type="text"
                                className="grow input-sm placeholder:text-sm ps-0"
                                placeholder="Search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            {results.length > 0 && (
                                <ul className="absolute top-full left-0 bg-white w-full z-50 max-h-60 overflow-y-auto shadow rounded">
                                    {results.map((product) => (
                                        <li key={product._id} className="py-2 px-4 hover:bg-gray-100 text-sm">
                                            <Link href={`/product/${product.slug}`}>
                                                {product.productName}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {loading ? <p className="text-sm text-gray-500"><Loading util={'bg-primary'} /></p>
                                :
                                <button type='submit'><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="#000"
                                    className="h-4 w-4 opacity-70"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg></button>
                            }
                        </label>
                    </form>
                </div>
                <div className="mx-auto">
                    <Link href="/" className="text-2xl lg:text-3xl italic font-extrabold">
                        Anabolic<span className="text-primary font-extrabold text-3xl lg:text-4xl">Hub</span>
                    </Link>
                </div>
                <div className="ms-auto pe-4 lg:pe-0">
                    <Cart />
                </div>
            </div>

            {/* Menu Nav */}
            <nav className='bg-success-content flex py-2 lg:py-0 justify-between lg:justify-center px-2 items-center'>
                <div className="lg:hidden block me-auto search-bar w-full">
                    <form onSubmit={handleSearchSubmit}>
                        <label className="input border-accent-content/50 rounded-none flex items-center h-10 relative w-[280px]">
                            <input
                                type="text"
                                className="grow input-sm placeholder:text-sm ps-0"
                                placeholder="Search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            {results.length > 0 && (
                                <ul className="absolute top-full left-0 bg-white w-full z-50 max-h-60 overflow-y-auto shadow rounded">
                                    {results.map((product) => (
                                        <li key={product._id} className="py-2 px-4 hover:bg-gray-100 text-sm">
                                            <Link href={`/product/${product.slug}`}>
                                                {product.productName}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {loading ? <p className="text-sm text-gray-500"><Loading util={'bg-primary'} /></p>
                                :
                                <button type='submit'><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="#000"
                                    className="h-4 w-4 opacity-70"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg></button>
                            }
                        </label>
                    </form>
                </div>

                <ul className="hidden lg:flex menu lg:menu-horizontal !py-1 container text-base-100">
                    <NavMenu />
                </ul>
                <Sheet className="block lg:hidden">
                    <SheetTrigger>
                        <div className='btn btn-primary btn-sm me-2 lg:hidden flex items-center' title="menu"><AlignRight className='text-white' /></div>
                    </SheetTrigger>
                    <SheetContent className="bg-success-content ps-2 overflow-y-auto">
                        <SheetTitle></SheetTitle>
                        <ul className="block menu lg:menu-horizontal container text-base-100">
                            <NavMenu />
                        </ul>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    )
}

export default Navbar