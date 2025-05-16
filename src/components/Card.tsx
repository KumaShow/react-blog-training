import { BlogPost } from "@/interfaces/blog";

interface Badge {
  condition: boolean;
  label: string;
}

interface CardProps extends BlogPost {
  aosDelay?: number;
}

const Card = (props: CardProps) => {
  const { title, date, tags, description, imgUrl, isNew, isHot, aosDelay } = props;

  // 最新文章、人氣文章的條件 Map
  const additionalBadges: Badge[] = [
    { condition: !!isHot, label: "最新文章" },
    { condition: !!isNew, label: "人氣文章" },
  ];
  const renderBadges = additionalBadges
    .filter((badge: Badge) => badge.condition)
    .map((badge: Badge) => badge.label)

  return (
    <div 
      data-aos="fade-up" 
      data-aos-delay={aosDelay} 
      data-aos-duration="500" 
      className="hover:shadow-lg hover:-translate-y-2.5 transition-all duration-300 bg-white p-6"
    >
      <img className="mb-4 max-h-[250px] w-full object-cover" src={imgUrl} alt={title} />

      <p className="mb-1">{date}</p>

      <div className="mb-2 flex flex-wrap items-center">
        {/* 渲染標籤 */}
        {
          tags.map((item, index) => {
            return <span key={index} className="text-primary text-lg mr-2">
              {`#${item}`}
            </span>
          })
        }

        {/* 渲染 Badge */}
        {
          renderBadges.map((badgeText, index) =>
            <span key={index} className="bg-primary text-white py-1.5 px-3 ms-2 rounded-full font-bold">
              {badgeText}
            </span>
          )
        }
      </div>

      <h2 className="text-xl font-bold mb-2">{title}</h2>

      <p className="line-clamp-2 mb-4">
        {description}
      </p>

      <div>
        <a href="#" className="inline-block text-black py-2 px-3 border-black border-1 rounded-4xl">閱讀內文</a>
      </div>
    </div>
  )
};

export default Card;