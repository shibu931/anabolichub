import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticleCard = ({article}) => {    
    return (
        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <Image src={`${article.ogImage}` } width={380} height={240} alt={article.title} className="object-cover object-center w-full h-48" />
            <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                    <div>
                        <Link href={`/blog/${article.slug}`}
                            className="block mb-3 text-xl font-black leading-tight hover:underline hover:text-primary">
                            {article.title}
                        </Link>
                        <p className="mb-4">
                            {article.metaDescription}
                        </p>
                    </div>
                    <div>
                        <Link href={`/blog/${article.slug}`}
                            className="rounded-none btn-sm btn btn-primary">Read
                            More </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard