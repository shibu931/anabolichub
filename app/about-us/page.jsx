import React from 'react'
import ArticlePage from '@/components/Common/ArticlePage'

const page = async () => {
  const data = await fetch(`${process.env.DOMAIN_URL}/api/article?slug=about-us`)
  const {article} = await data.json()
  
  return (
    <main className='container mx-auto mt-5'>
      <ArticlePage content={article.content}/>
    </main>
  )
}

export default page