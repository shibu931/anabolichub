import Breadcrumbs from '@/components/Common/Breadcrumbs'
import ArticleCard from '@/components/Common/ArticleCard'

async function getArticles(){
  const data = await fetch(`http://localhost:3000/api/article/get-all-articles?type=blog`)
  return data.json()
} 

const page = async () => {
  const {articles} = await getArticles();
  console.log(articles);
  
  return (
    <div className='container xl:w-[1280px] mx-auto mt-4'>
      <Breadcrumbs />
      <div className="flex flex-wrap -mx-4 mt-5">
      {
        articles.map((article,index)=>(
          <ArticleCard article={article} key={index} />
        ))
      }
    </div>
    </div>
  )
}

export default page