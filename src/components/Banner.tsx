import bannerImg1 from '@/assets/img/bannerImg1.jpg';
import bannerImg2 from '@/assets/img/bannerImg2.jpg';

export default function Banner({ title, subTitle }: { title: string, subTitle: string }) {
  return (
    <div className="flex flex-col lg:flex-row lg:h-[70vh]">
      {/* 左側：人物背景圖 */}
      <div
        className="w-full h-[50vh] lg:w-1/2 lg:h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg1})` }}
      ></div>

      {/* 右側：文字與背景圖 */}
      <div
        className="w-full lg:w-1/2 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImg2})` }}
      >
        <div className=" text-blue-700 font-bold p-8">
          <h1 className="text-4xl lg:text-[120px]">{title}</h1>
          <p className="mt-4 text-xl lg:text-2xl">{subTitle}</p>
        </div>
      </div>
    </div>
  )
}