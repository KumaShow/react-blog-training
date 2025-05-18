import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // 核心樣式
import 'swiper/css/navigation'; // 導航箭頭
import '@/assets/swiper.css'; // 自訂樣式
import Card from './Card';
import blogPostList from '@/pages/Blog/blogPostList'; // 假資料：部落格文章列表

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { BlogPost } from '@/interfaces/blog';

export default function Carousel() {
  // const arrowZoneWidth = '60px';

  return (
    <div
    // style={{
    //   position: 'relative',
    //   paddingLeft: arrowZoneWidth,
    //   paddingRight: arrowZoneWidth,
    // }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation // 導航箭頭
        // navigation={{
        //   nextEl: '.custom-swiper-button-next', // 指向自訂的下一個按鈕的 CSS 選擇器
        //   prevEl: '.custom-swiper-button-prev', // 指向自訂的上一個按鈕的 CSS 選擇器
        // }}
        pagination={{ clickable: true }} // 顯示分頁圓點
        // autoplay={{ delay: 4000, disableOnInteraction: false }} // 自動播放
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
    </div>
  );
}
