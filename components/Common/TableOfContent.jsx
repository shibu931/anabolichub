'use client'
import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const TableOfContent = ({ content }) => {
    const [tocData, setTocData] = useState([]);

    useEffect(() => {
        if (!content) return;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        document.body.appendChild(tempDiv);

        setTimeout(() => {
            const headings = tempDiv.querySelectorAll('h2, h3');
            const toc = [];

            headings.forEach((heading) => {
                const id = heading.id || heading.textContent.toLowerCase().replace(/\s+/g, '-');
                heading.id = id;

                const level = heading.tagName.substring(1);
                const newItem = { id, text: heading.textContent };

                if (level === '2') {
                    toc.push(newItem);
                } else if (level === '3' && toc.length > 0) {
                    if (!toc[toc.length - 1].children) {
                        toc[toc.length - 1].children = [];
                    }
                    toc[toc.length - 1].children.push(newItem);
                }
            });
            setTocData(toc);
            document.body.removeChild(tempDiv);
        }, 0);
    }, [content]);
    return (
        <div className="table-of-contents">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border px-2" open>
                    <AccordionTrigger className="hover:no-underline">
                        <h2 className="text-xl font-bold uppercase">Table of Contents</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc">
                            {tocData.map((item) => (
                                <li key={item.id} className='text-base mb-3 font-semibold'>
                                    <a href={`#${item.id}`} className="hover:underline">
                                        {item.text}
                                    </a>
                                    {item.children && item.children.length > 0 && (
                                        <ul className="list-disc">
                                            {item.children.map((child) => (
                                                <li key={child.id} className="text-sm font-semibold">
                                                    <a href={`#${child.id}`} className="hover:underline">
                                                        {child.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default TableOfContent