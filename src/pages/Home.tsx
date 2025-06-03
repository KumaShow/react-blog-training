import Banner from '@/components/Banner';
import Carousel from '@/components/Carousel';
import SocialMediaIcons from '@/components/SocialMediaIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

import home_img1 from '@/assets/img/Home/home_img1.jpg';
import home_img2 from '@/assets/img/Home/home_img2.jpg';
import home_img3 from '@/assets/img/Home/home_img3.jpg';
import home_img4 from '@/assets/img/Home/home_img4.jpg';
import home_img5 from '@/assets/img/Home/home_img5.jpg';
import home_img6 from '@/assets/img/Home/home_img6.jpg';
import bannerImg2 from '@/assets/img/bannerImg2.jpg';
import exampleImg1 from '@/assets/img/Home/example/ex1.jpg';
import exampleImg2 from '@/assets/img/Home/example/ex2.jpg';
import exampleImg3 from '@/assets/img/Home/example/ex3.jpg';
import exampleImg4 from '@/assets/img/Home/example/ex4.jpg';

// 藍色橫線
const PrimaryDash = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10">
      <div className="w-7.5 h-[2.5px] bg-primary rounded-full"></div>
    </div>
  );
};

export default function Home() {
  // 專業服務與方案
  const serviceList = [
    {
      imgUrl: home_img1,
      title: '履歷健檢',
      description:
        '履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。',
    },
    {
      imgUrl: home_img2,
      title: '線上諮詢',
      description:
        '想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。',
    },
    {
      imgUrl: home_img3,
      title: '網頁開發',
      description:
        '想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。',
    },
    {
      imgUrl: home_img4,
      title: '企業內訓',
      description:
        '想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。',
    },
  ];

  // 職涯諮詢成功案例
  const exampleList = [
    {
      name: '小明',
      imgUrl: exampleImg1,
      title: '無經驗到前端工程師',
      description: ['打造前端專案與履歷亮點', '深度強化面試表現'],
    },
    {
      name: '小華',
      imgUrl: exampleImg2,
      title: '深度強化面試表現',
      description: ['制訂階段性目標與時間安排', '鼓勵參與前端社群或活動'],
    },
    {
      name: '小李',
      imgUrl: exampleImg3,
      title: '面試緊張到從容應對',
      description: [
        '透過面試模擬找出常犯的邏輯漏洞',
        '討論遇到不熟悉議題時的回應方式',
      ],
    },
    {
      name: '小王',
      imgUrl: exampleImg4,
      title: '面試緊張到從容應對',
      description: ['擬定進階框架或技術研究目標', '培養跨團隊溝通與簡報能力'],
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <section>
        <Banner title="Alyse Wang" subTitle="前端工程師 & 職涯諮詢師" />

        <div
          className="lg:grid lg:grid-cols-12 lg:container relative z-10"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="bg-white px-6 py-10 -mt-20 lg:col-start-5 lg:col-span-7 lg:inline-block text-lg lg:text-xl lg:shadow-2xl">
            <p className="mb-4">嗨，我是 Alyse 一名深耕前端技術的工程師。</p>
            <p className="mb-4">
              擅長 React、Vue
              等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
            </p>

            <SocialMediaIcons />
          </div>
        </div>
      </section>

      {/* 專業服務與方案 */}
      <section className="border-b border-neutral-700">
        <div className="container py-16 md:py-20">
          <h2
            className="text-5xl lg:text-6xl mb-8"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            專業服務與方案
          </h2>

          <ul className="[&>li:not(:last-child)]:mb-8 lg:[&>li:not(:last-child)]:mb-16 mb-8">
            {serviceList.map((item, index) => (
              <li
                key={index}
                className="lg:flex items-center lg:px-28 lg:even:flex-row-reverse lg:odd:[&>div]:-ml-20 lg:even:[&>div]:-mr-20"
              >
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="lg:max-w-6/10"
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                  data-aos-duration="1000"
                />

                <div
                  className="p-6 bg-white lg:min-w-120 relative z-10"
                  data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                  data-aos-duration="1000"
                >
                  <PrimaryDash />
                  <h3 className="text-xl mb-1">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-row-reverse text-xl">
            <a
              href="mailto:example@example.com"
              className="text-black font-bold flex flex-col items-end lg:flex-row lg:items-center group "
            >
              <span className="mb-2 lg:mb-0">聯繫我，取得更多資訊！</span>

              <FontAwesomeIcon
                icon={faCircleRight}
                className="group-hover:translate-x-2 transition-all duration-150"
              />
            </a>
          </div>
        </div>
      </section>

      {/* 部落格精選 */}
      <section className="border-b border-neutral-700">
        <div className="container py-16 md:py-20">
          <h2
            className="text-5xl lg:text-6xl mb-8"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            部落格精選
          </h2>

          <div data-aos="fade-up" data-aos-duration="1500" className="pb-8">
            <Carousel />
          </div>
        </div>
      </section>

      {/* 職涯諮詢成功案例 */}
      <section className="border-b border-neutral-700">
        <div className="container py-16 md:py-20">
          <h2
            className="text-5xl lg:text-6xl mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            職涯諮詢成功案例
          </h2>

          <div className="mb-10 font-bold lg:flex lg:gap-6">
            <div className="max-h-[60vh] lg:max-h-[80vh] overflow-hidden lg:w-7/12 p-6 bg-neutral-300">
              <img
                data-aos="zoom-in-left"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
                src={home_img5}
                alt="成功案例說明"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="lg:max-w-5/12">
              <div
                className="px-6 py-10 lg:px-10 lg:py-20 bg-white -mt-20 lg:mt-[29px] lg:-ml-[220px] w-full relative z-10"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
              >
                <PrimaryDash />

                <p className="mb-6">
                  在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效{' '}
                  <span className="text-primary">突破原有的舒適圈</span>。
                </p>
              </div>

              <div
                className="px-6 py-10 lg:px-10 lg:py-20 bg-neutral-200 lg:-mt-10 w-full relative z-11"
                data-aos="zoom-in-right"
                data-aos-duration="1500"
                data-aos-anchor-placement="center-bottom"
              >
                <PrimaryDash />

                <p className="mb-6">
                  期待在下一個新機會中，我能與你一起攜手邁向更高峰！
                </p>

                <a
                  href="mailto:example@example.com"
                  className="mb-6 px-4 py-2 border border-primary rounded-full text-primary hover:bg-primary hover:text-white transition duration-300"
                >
                  立即預約諮詢
                </a>
              </div>
            </div>
          </div>

          <ul className="[&>li:not(:last-child)]:mb-6 lg:[&>li:not(:last-child)]:mb-0 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-6 lg:gap-8 bg-zinc-100 p-6">
            {exampleList.map((example) => (
              <li
                key={example.name}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
              >
                <div className="overflow-hidden mb-4 rounded-full h-20 w-20">
                  <img
                    src={example.imgUrl}
                    alt={`成功案例 ${example.name}`}
                    className="object-cover h-full w-full"
                  />
                </div>

                <h3 className="text-xl mb-1">{example.title}</h3>

                <ul className="[&>li:not(:last-child)]:mb-2 pb-4 mb-4 border-b border-zinc-800">
                  <li>
                    <FontAwesomeIcon
                      icon={faSquareCheck}
                      className="text-primary mr-2"
                    />
                    {example.description[0]}
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faSquareCheck}
                      className="text-primary mr-2"
                    />
                    {example.description[1]}
                  </li>
                </ul>

                <a
                  href="#"
                  className="inline-block px-4 py-2 rounded-full border border-zinc-800 hover:bg-primary hover:text-white transition duration-300"
                >
                  前往聆聽 podcast
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 訂閱電子報 */}
      <section>
        <div className="lg:flex lg:h-[80vh]">
          {/* 左側：人物背景圖 */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="w-full h-[50vh] lg:w-1/2 lg:h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${home_img6})` }}
          ></div>

          {/* 右側：文字與背景圖 */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="w-full p-3 lg:w-1/2 bg-cover bg-center content-center"
            style={{ backgroundImage: `url(${bannerImg2})` }}
          >
            <div className="font-bold px-6 py-10 lg:p-20 bg-white">
              <h2 className="text-5xl lg:text-6xl mb-8">訂閱電子報</h2>
              <p className="mt-4 text-lg md:text-xl lg:text-2xl mb-6">
                立即訂閱，搶先掌握
                <span className="text-primary">前端 x 職涯</span>的獨家資訊！
              </p>

              <form action="">
                <input
                  type="text"
                  placeholder="請輸入您的大名"
                  className="px-4 py-2 w-full mb-2 bg-neutral-200"
                />
                <input
                  type="email"
                  placeholder="請輸入您的電子信箱"
                  className="px-4 py-2 w-full bg-neutral-200"
                />

                <button className="mt-6 px-4 py-2 border border-primary rounded-full text-primary hover:bg-primary hover:text-white transition duration-300">
                  啟動訂閱
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
