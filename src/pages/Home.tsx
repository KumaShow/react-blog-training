import Banner from "@/components/Banner";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import img1 from "@/assets/img/BlogPostImgs/postImg1.jpg";

export default function Home() {
  // 專業服務與方案
  const serviceList = [
    {
      imgUrl: img1,
      title: "履歷健檢",
      description:
        "履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。",
    },
    {
      imgUrl: img1,
      title: "線上諮詢",
      description:
        "想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。",
    },
    {
      imgUrl: img1,
      title: "網頁開發",
      description:
        "想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。",
    },
    {
      imgUrl: img1,
      title: "企業內訓",
      description:
        "想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。",
    },
  ];


  return (
    <div>
      <section className="relative pb-70 md:pb-50 lg:pb-50">
        <Banner title="Alyse Wang" subTitle="前端工程師 & 職涯諮詢師" />

        <div className="px-6 py-10 absolute left-3 right-3 bottom-[3%] md:bottom-[10%] lg:left-[35%] lg:right-[10%] lg:-bottom-[25%] xl:-bottom-[10%] lg:px-10 lg:py-20 text-lg lg:text-xl bg-white">
          <p className="mb-4">嗨，我是 Alyse 一名深耕前端技術的工程師。</p>
          <p className="mb-4">
            擅長 React、Vue 等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
          </p>

          <SocialMediaIcons />
        </div>
      </section>

      {/* 專業服務與方案 */}
      <section className="container py-16 md:py-20">
        <h2 className="text-5xl lg:text-6xl mb-8">專業服務與方案</h2>

        <ul className="[&>li:not(:last-child)]:mb-8 lg:[&>li:not(:last-child)]:mb-16">

          {
            serviceList.map((item, index) => (
              <li key={index} className="lg:flex items-center">
                <img src={item.imgUrl} alt={item.title} className="lg:max-w-6/12" />

                <div className="p-6">
                  <div className="flex items-center justify-center w-10 h-10">
                    <div className="w-7.5 h-[2.5px] bg-primary"></div>
                  </div>
                  <h3 className="text-[28px] mb-1">{item.title}</h3>
                  <p>
                    {item.description}
                  </p>
                </div>
              </li>
            ))
          }

          {/* <li>
            <img src={img1} alt="Blog Post 1" />

            <div className="p-6">
              <div className="flex items-center justify-center w-10 h-10">
                <div className="w-7.5 h-[2.5px] bg-primary"></div>
              </div>
              <h3 className="text-[28px] mb-1">履歷健檢</h3>
              <p>
                履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。
              </p>
            </div>
          </li>
          <li>
            <img src={img1} alt="Blog Post 1" />

            <div className="p-6">
              <div className="flex items-center justify-center w-10 h-10">
                <div className="w-7.5 h-[2.5px] bg-primary"></div>
              </div>
              <h3 className="text-[28px] mb-1">履歷健檢</h3>
              <p>
                履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。
              </p>
            </div>
          </li> */}
        </ul>
      </section>
    </div>
  )
}