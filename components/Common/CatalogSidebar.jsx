'use client';
import { navLinks } from '@/data/navLinks';
import { getCurrentCategoryAndParent } from '@/lib/utils';
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';

const CatalogSidebar = () => {
  const pathname = usePathname();
  const slug = pathname.replace('/', '')
  const [openSiblings, setOpenSiblings] = useState({});
  const categoryInfo = getCurrentCategoryAndParent(slug, navLinks);

  if (!categoryInfo) {
    return <div>Page not found</div>
  }

  const { parent, current, siblings } = categoryInfo;
  console.log('parent ',parent);
  console.log('siblings ',siblings);
  console.log('current ',current);
  

  return (
    <aside className="catalog-sidebar p-3 border-r bg-gray-100 sticky top-10"> {/* Tailwind classes */}
      <h3 className="text-lg font-bold mb-2 text-center">{parent.title}</h3>
      <ul className="sidebar-list list-none p-0 m-0">
        <li className='border p-2 mb-2'>
          <strong className="current-category block text-base mb-2">{current.title}</strong>
          <ul className="sub-list list-none pl-6 m-0">
            {current.links.map((link) => (
              <li key={link?.slug}>
                <Link href={link.slug ? link.slug :'#' } className={`sub-link text-sm block py-1 text-gray-700 hover:text-primary ${pathname === link?.slug ? 'font-bold text-primary' : ''}`}>{link?.title}</Link>
              </li>
            ))}
          </ul>
        </li>
        <Accordion type="single" collapsible>
          {siblings && siblings.map(sibling => (
            <AccordionItem value={sibling.title} key={sibling.title}>
              <li key={sibling.slug} className="mb-2 p-2 border border-gray-200">
                <AccordionTrigger className="sibling-title flex justify-between items-center cursor-pointer py-1">
                  <Link href={sibling.slug ? sibling.slug :'#'} className="sibling-link text-gray-800 hover:text-primary">{sibling.title}</Link>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="sub-list list-none pl-6 m-0">
                    {sibling.links.map(siblingLink => (
                      <li key={siblingLink.slug}>
                        <Link href={sibling.slug ? sibling.slug :'#'} className="sub-link text-sm block py-1 text-gray-700 hover:text-primary">{siblingLink.title}</Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </li>
            </AccordionItem>
          ))}
        </Accordion>

      </ul>
    </aside>
  )
}

export default CatalogSidebar