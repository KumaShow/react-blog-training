import Banner from "@/components/Banner";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import img1 from "@/assets/img/BlogPostImgs/postImg1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

import exampleImg1 from "@/assets/img/Home/example/ex1.jpg";
import exampleImg2 from "@/assets/img/Home/example/ex2.jpg";
import exampleImg3 from "@/assets/img/Home/example/ex3.jpg";
import exampleImg4 from "@/assets/img/Home/example/ex4.jpg";

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

  // 職涯諮詢成功案例
  const exampleList = [
    {
      name: "小明",
      imgUrl: exampleImg1,
      title: "無經驗到前端工程師",
      description: [
        "打造前端專案與履歷亮點",
        "深度強化面試表現",
      ],
    },
    {
      name: "小華",
      imgUrl: exampleImg2,
      title: "深度強化面試表現",
      description: [
        "制訂階段性目標與時間安排",
        "鼓勵參與前端社群或活動",
      ],
    },
    {
      name: "小李",
      imgUrl: exampleImg3,
      title: "面試緊張到從容應對",
      description: [
        "透過面試模擬找出常犯的邏輯漏洞",
        "討論遇到不熟悉議題時的回應方式",
      ],
    },
    {
      name: "小王",
      imgUrl: exampleImg4,
      title: "面試緊張到從容應對",
      description: [
        "擬定進階框架或技術研究目標",
        "培養跨團隊溝通與簡報能力",
      ],
    },
  ];

  return (
    <div>
      <section className="relative pb-70 md:pb-50 lg:pb-50">
        <Banner title="Alyse Wang" subTitle="前端工程師 & 職涯諮詢師" />

        <div className="px-6 py-10 absolute left-3 right-3 bottom-[3%] md:bottom-[10%] lg:left-[35%] lg:right-[10%] lg:-bottom-[25%] xl:-bottom-[10%] lg:px-10 lg:py-20 text-lg lg:text-xl bg-white shadow-2xl">
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

        <ul className="[&>li:not(:last-child)]:mb-8 lg:[&>li:not(:last-child)]:mb-16 mb-8">
          {
            serviceList.map((item, index) => (
              <li key={index} className="lg:flex items-center lg:px-28 lg:even:flex-row-reverse lg:odd:[&>div]:-ml-20 lg:even:[&>div]:-mr-20">
                <img src={item.imgUrl} alt={item.title} className="lg:max-w-6/10" />

                <div className="p-6 bg-white lg:min-w-120 relative z-10">
                  <div className="flex items-center justify-center w-10 h-10">
                    <div className="w-7.5 h-[2.5px] bg-primary"></div>
                  </div>
                  <h3 className="text-xl mb-1">{item.title}</h3>
                  <p>
                    {item.description}
                  </p>
                </div>
              </li>
            ))
          }
        </ul>

        <div className="flex flex-row-reverse text-xl">
          <a href="mailto:alyse@example.com" className="text-black font-bold flex flex-col items-end lg:flex-row lg:items-center group ">
            <span className="mb-2 lg:mb-0">聯繫我，取得更多資訊！</span>

            <FontAwesomeIcon icon={faCircleRight} className="group-hover:translate-x-2 transition-all duration-150" />
          </a>
        </div>
      </section>

      {/* 部落格精選 */}
      <section className="container py-16 md:py-20">
        <h2 className="text-5xl lg:text-6xl mb-8">部落格精選</h2>
        <ul className="[&>li:not(:last-child)]:mb-6 lg:[&>li:not(:last-child)]:mb-0">
          {/* 在這裡添加部落格文章 */}
        </ul>
      </section>

      {/* 職涯諮詢成功案例 */}
      <section className="container py-16 md:py-20">
        <h2 className="text-5xl lg:text-6xl mb-8">職涯諮詢成功案例</h2>

        <div className="mb-10">

        </div>

        <ul className="[&>li:not(:last-child)]:mb-6 lg:[&>li:not(:last-child)]:mb-0 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-6 lg:gap-8 bg-zinc-100 p-6">
          {exampleList.map((example) =>
            <li key={example.name} >
              <div className="overflow-hidden mb-4 rounded-full h-20 w-20">
                <img src={example.imgUrl} alt={`成功案例 ${example.name}`} className="object-cover h-full w-full" />
              </div>

              <h3 className="text-xl mb-1">{example.title}</h3>

              <ul className="[&>li:not(:last-child)]:mb-2 pb-4 mb-4 border-b border-zinc-800">
                <li>
                  <FontAwesomeIcon icon={faSquareCheck} className="text-primary mr-2" />
                  {example.description[0]}
                </li>
                <li>
                  <FontAwesomeIcon icon={faSquareCheck} className="text-primary mr-2" />
                  {example.description[1]}
                </li>
              </ul>

              <button type="button" className="px-4 py-2 rounded-full border border-zinc-800">
                前往聆聽 podcast
              </button>
            </li>)
          }
        </ul>
      </section>

      {/* 訂閱電子報 */}
      <section>
        <h2 className="text-5xl lg:text-6xl mb-8">訂閱電子報</h2>
        <form className="flex flex-col md:flex-row md:items-center">
          <input
            type="email"
            placeholder="輸入你的電子郵件"
            className="border border-neutral-300 rounded-md p-2 mb-4 md:mb-0 md:mr-4"
          />
          <button className="bg-primary text-white rounded-md px-4 py-2">
            訂閱
          </button>
        </form>
      </section>
    </div>
  )
}