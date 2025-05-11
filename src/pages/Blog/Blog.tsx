import Card from '@/components/Card';
import Banner from '@/components/Banner';
import { BlogPost } from '@/interfaces/blog';
import blogPostList from './BlogPostList'; // 假資料：部落格文章列表
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Blog() {

  // 假資料：部落格文章列表
  // const blogPostList: BlogPost[] = [
  //   {
  //     id: 0,
  //     isNew: true,
  //     isHot: false,
  //     date: '2024/10/21',
  //     title: '自學前端不用怕：從零開始的三大關鍵',
  //     tags: ['前端開發', '職涯成長'],
  //     description: '嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！',
  //     imgUrl: 'https://images.unsplash.com/photo-1456615074700-1dc12aa7364d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  //   {
  //     id: 1,
  //     isNew: false,
  //     isHot: false,
  //     date: '2024/10/11',
  //     title: 'React 入門不再迷惘：三步驟帶你上手核心概念',
  //     tags: ['React', '入門基礎'],
  //     description: '你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：「React 到底該怎麼入門？」為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。',
  //     imgUrl: 'https://images.unsplash.com/photo-1456615074700-1dc12aa7364d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  //   {
  //     id: 2,
  //     isNew: false,
  //     isHot: false,
  //     date: '2024/09/07',
  //     title: '前端作品集打造指南：讓你的專案成為履歷亮點',
  //     tags: ['作品集', '求職攻略'],
  //     description: '對正在求職的前端工程師而言，作品集往往是第一個「說話」的利器。當面試官瀏覽你的網頁作品時，能夠快速了解你的程式邏輯、設計感以及解決問題的思路。我在協助多位同學優化履歷與作品集的過程中，總結出一些關鍵要素，分享給正在打造、升級作品集的你。',
  //     imgUrl: 'https://images.unsplash.com/photo-1746240922260-efbea47dc532?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  // ];

  // 假資料：最新文章
  const lastestBlogPost: BlogPost = blogPostList.filter(blogPost => blogPost.isNew)[0];


  return (
    <div>
      {/* Banner 區塊 */}
      <section>
        <Banner title="BLOG" subTitle="前端工程師 & 職涯諮詢師" />
      </section>

      {/* 最新文章區塊 */}
      <section className="md:flex md:gap-6 border-b-1 border-neutral-300">
        <div className="md:basis-1/2">
          <img className="object-cover h-full w-full" src={lastestBlogPost.imgUrl} alt={lastestBlogPost.title} />
        </div>

        <div className="px-3 py-12 md:basis-1/2 md:flex md:flex-col md:justify-center md:max-w-[40%]">
          <p className="mb-1">{lastestBlogPost.date}</p>

          <p className="mb-2">
            前端開發 x 職涯成長
            <span className="bg-primary text-white py-2 px-3 ms-2 rounded-4xl">
              最新文章
            </span>
          </p>

          <h2 className="text-xl font-bold mb-2">{lastestBlogPost.title}</h2>

          <p className="line-clamp-2 mb-4">
            {lastestBlogPost.description}
          </p>

          <div>
            <a href="#" className="inline-block text-black py-2 px-3 border-black border-1 rounded-4xl">
              閱讀內文
            </a>
          </div>
        </div>
      </section>


      {/* 其他文章區塊 */}
      <section>
        <div className="py-16 px-3 md:px-0 md:py-20 md:container mx-auto ">
          <div className="md:px-3 md:grid md:grid-cols-12 md:gap-6">
            <div className="relative w-full md:w-auto md:col-span-4">
              <input
                type="text"
                className="block px-3 py-2 pl-10 rounded-4xl border-2 w-full"
                placeholder="搜尋你感興趣的文章"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          <ul className="md:px- py-12 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {
              blogPostList.filter(blogPost => !blogPost.isNew).map((blogPost: BlogPost) => {
                return (
                  <li key={blogPost.id}>
                    <Card {...blogPost} />
                  </li>
                )
              })
            }
          </ul>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <button className="bg-transparent">{`<`}</button>
            {
              Array.from({ length: 5 }, (_, index) => (
                <button key={index} className="bg-transparent ms-2">{index + 1}</button>
              ))
            }
            <button className="bg-transparent ms-4">{`>`}</button>
          </div>
        </div>
      </section>
    </div>
  )
}