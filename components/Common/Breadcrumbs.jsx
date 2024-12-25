'use client'; 
import Link from "next/link"
import { usePathname } from 'next/navigation';
import generateBreadcrumbsFromSlug from '../../utils/generateBreadCrumb'

const Breadcrumbs = ({slug,endSlug}) => {
    const pathname = usePathname();
    let breadcrumb;
    if(!slug){
        breadcrumb =  generateBreadcrumbsFromSlug(pathname)
    }else{
        breadcrumb =slug
    }
    return (
        <div className="breadcrumbs text-sm">
            <ul>
                <li className="text-black font-medium"><Link href="/">Home</Link></li>
                {
                    breadcrumb.map((link,index)=>(
                        <li key={index} className="text-black font-medium"><Link href={`/${link.href}`}>{link.label ? link.label : link.title}</Link></li>
                    ))
                }
                {
                    endSlug && (
                        <li className="text-black font-medium">{endSlug}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Breadcrumbs