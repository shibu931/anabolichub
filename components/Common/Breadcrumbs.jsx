'use client'; 
import Link from "next/link"
import { usePathname } from 'next/navigation';
import generateBreadcrumbsFromSlug from '../../utils/generateBreadCrumb'

const Breadcrumbs = () => {
    const pathname = usePathname();
    const breadcrumb =  generateBreadcrumbsFromSlug(pathname) 
    return (
        <div className="breadcrumbs text-sm">
            <ul>
                <li className="text-black font-medium"><Link href="/">Home</Link></li>
                {
                    breadcrumb.map((link,index)=>(
                        <li key={index} className="text-black font-medium"><Link href={link.href}>{link.label}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Breadcrumbs