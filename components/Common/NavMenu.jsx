'use client'
import Link from 'next/link';
import { useEffect } from 'react';
import { BlogIcon, CycleIcon, HGHIcon, NeedleIcon, SexIcon } from '../Icons/Icons';
import { HomeIcon } from 'lucide-react';
import {navLinks} from '../../data/navLinks'

const NavMenu = () => {
    useEffect(() => {
        const handleDetailsToggle = (event) => {
            const currentDetails = event.currentTarget;
            const allDetails = document.querySelectorAll("details");
            allDetails.forEach((detail) => {
                if (detail !== currentDetails && detail.hasAttribute("open")) {
                    detail.removeAttribute("open");
                }
            });
        };
        const detailsElements = document.querySelectorAll("details");
        detailsElements.forEach((detail) => {
            detail.addEventListener("click", handleDetailsToggle);
        });
        return () => {
            detailsElements.forEach((detail) => {
                detail.removeEventListener("click", handleDetailsToggle);
            });
        };
    }, []);

    return (
        navLinks.map((navLink,index) => (
            navLink.isSubCategory ?
                <li key={index}>
                    <details >
                        <summary><navLink.icon className='w-5'/> {navLink.title}</summary>
                        <ul className="lg:flex lg:border-2 z-10 ms-0 ps-0 lg:ms-2 lg:ps-2">
                            {
                                navLink.category.map((subCategory,index)=>(
                                    <li key={index}>
                                    {subCategory.title && <Link className='hover:cursor-pointer hover:bg-white' href={`/${subCategory.slug}`}><h4 className='text-lg text-base-100 lg:text-accent-content font-bold'>{subCategory.title}</h4></Link>}
                                    <ul className='before:opacity-20 before:bg-base-200 lg:before:bg-success-content text-white lg:text-accent-content'>
                                        {
                                            subCategory.links.map((link)=>(
                                                <li key={link.title}><Link href={link.slug} className='focus:text-primary'>{link.title}</Link></li>
                                            ))
                                        }
                                    </ul>
                                    </li>
                                ))
                            }
                        </ul>
                    </details>
                </li>
                :
                <li key={index}><Link href={navLink.slug} className='focus:text-primary'><navLink.icon className='w-5'/> {navLink.title}</Link></li>
        ))
    )
};

export default NavMenu;
