import Card from '@/components/Card';
import Banner from '@/components/Banner';
import { BlogPost } from '@/interfaces/blog';
import blogPostList from '@/pages/Blog/BlogPostList'; // 假資料：部落格文章列表
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Blog() {

  // 假資料：最新文章
  const lastestBlogPost: BlogPost = blogPostList.filter((blogPost: BlogPost) => blogPost.isNew)[0];

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
              blogPostList.filter((blogPost: BlogPost) => !blogPost.isNew).map((blogPost: BlogPost) => {
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