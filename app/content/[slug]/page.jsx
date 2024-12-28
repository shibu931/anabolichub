import ArticlePage from '@/components/Common/ArticlePage'

const page = async ({params}) => {
  const {slug} = await params
  const data = await fetch(`${process.env.DOMAIN_URL}/api/article?slug=${slug}`)
  const {article} = await data.json()
  
  return (
    <main className='container mx-auto mt-5'>
      {article?.content ? <ArticlePage content={article.content}/> : <p className='my-16 text-2xl font-bold text-center'>No Article Found</p>}
    </main>
  )
}

export default page