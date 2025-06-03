import { Link } from 'react-router-dom';
import Card from '@/components/Card';
import Banner from '@/components/Banner';
import { BlogPost } from '@/interfaces/blog';
import blogPostList from '@/pages/Blog/BlogPostList'; // 假資料：部落格文章列表
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Blog() {
  // 假資料：最新文章
  const latestBlogPost: BlogPost = blogPostList.filter(
    (blogPost: BlogPost) => blogPost.isNew
  )[0];

  const [searchTerm, setSearchTerm] = useState<string>('');

  // 依據搜尋關鍵字過濾文章
  const filteredBlogPosts = blogPostList
    .filter((blogPost: BlogPost) => !blogPost.isNew)
    .filter((blogPost: BlogPost) =>
      blogPost.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      {/* Banner 區塊 */}
      <section>
        <Banner title="BLOG" subTitle="前端工程師 & 職涯諮詢師" />
      </section>

      {/* 最新文章區塊 */}
      <section className="md:flex md:gap-6 border-b-1 border-neutral-300">
        <div className="md:basis-1/2">
          <img
            className="object-cover h-full w-full"
            src={latestBlogPost.imgUrl}
            alt={latestBlogPost.title}
          />
        </div>

        <div className="px-3 py-12 md:basis-1/2 md:flex md:flex-col md:justify-center md:max-w-[40%]">
          <time className="mb-1" dateTime={latestBlogPost.date}>
            {latestBlogPost.date}
          </time>

          <p className="mb-2">
            前端開發 x 職涯成長
            <span className="bg-primary text-white py-2 px-3 ms-2 rounded-4xl">
              最新文章
            </span>
          </p>

          <h2 className="text-xl font-bold mb-2">{latestBlogPost.title}</h2>

          <p className="line-clamp-2 mb-4">{latestBlogPost.description}</p>

          <div>
            <Link
              to={`/blog/${latestBlogPost.id}`}
              className="inline-block text-black py-2 px-3 border-black border-1 rounded-4xl hover:bg-primary hover:text-white transition duration-300"
            >
              閱讀內文
            </Link>
          </div>
        </div>
      </section>

      {/* 其他文章區塊 */}
      <section>
        <div className="py-16  md:py-20 container ">
          <div className="md:px-3 md:grid md:grid-cols-12 md:gap-6">
            <div className="relative w-full md:w-auto md:col-span-4">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                className="block px-3 py-2 pl-10 rounded-4xl border-2 w-full"
                placeholder="搜尋你感興趣的文章"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {searchTerm && (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={() => setSearchTerm('')}
                />
              )}
            </div>
          </div>

          <ul className="md:px- py-12 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {filteredBlogPosts.map((blogPost: BlogPost) => {
              return (
                <li
                  key={blogPost.id}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-anchor-placement="center-bottom"
                >
                  <Card {...blogPost} />
                </li>
              );
            })}
          </ul>

          {/* 查無資料 */}
          {filteredBlogPosts.length === 0 && (
            <div className="text-center text-2xl text-gray-500">
              查無相關文章
            </div>
          )}

          {/* Pagination */}
          {filteredBlogPosts.length > 0 && (
            <div className="flex justify-center mt-8 *:hover:text-primary *:hover:-translate-y-[2px] *:transition *:duration-200">
              <button className="bg-transparent px-2">{`<`}</button>
              {Array.from({ length: 5 }, (_, index) => (
                <button key={index} className="bg-transparent py-2.5 px-4">
                  {index + 1}
                </button>
              ))}
              <button className="bg-transparent ms-4 px-2">{`>`}</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
