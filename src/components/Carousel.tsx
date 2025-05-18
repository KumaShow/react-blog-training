import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // 核心樣式
import 'swiper/css/navigation'; // 導航箭頭
import '@/assets/style/swiper.css'; // 自訂樣式
import Card from './Card';
import blogPostList from '@/pages/Blog/blogPostList'; // 假資料：部落格文章列表

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { BlogPost } from '@/interfaces/blog';

export default function Carousel() {

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation // 導航箭頭
      pagination={{ clickable: true }} // 顯示分頁圓點
      autoplay={{ delay: 4000, disableOnInteraction: true }} // 自動播放
      loop={true} // 循環
      spaceBetween={24} // 幻燈片間距
      slidesPerView={1} // 一次顯示 1 張
      breakpoints={{
        768: {
          slidesPerView: 3, // 螢幕寬度大於 768px 時顯示 3 張
        },
      }}
    >
      {blogPostList.map((blogPost: BlogPost) => (
        <SwiperSlide key={blogPost.id}>
          <Card {...blogPost} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
