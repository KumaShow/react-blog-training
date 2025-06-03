import { Link } from 'react-router-dom';
import { BlogPost } from '@/interfaces/blog';

interface Badge {
  condition: boolean;
  label: string;
}

const Card = (props: BlogPost) => {
  const { title, date, tags, description, imgUrl, isNew, isHot } = props;

  // 最新文章、人氣文章的條件 Map
  const additionalBadges: Badge[] = [
    { condition: !!isHot, label: '最新文章' },
    { condition: !!isNew, label: '人氣文章' },
  ];
  const renderBadges = additionalBadges
    .filter((badge: Badge) => badge.condition)
    .map((badge: Badge) => badge.label);

  return (
    <Link to={`/blog/${props.id}`} className="group">
      <img
        className="mb-4 aspect-video object-cover"
        src={imgUrl}
        alt={title}
      />

      <time className="mb-1" dateTime={date}>
        {date}
      </time>

      <div className="mb-2 flex flex-wrap items-center">
        {/* 渲染標籤 */}
        {tags.map((item, index) => {
          return (
            <span key={index} className="text-primary text-lg mr-2">
              {`#${item}`}
            </span>
          );
        })}

        {/* 渲染 Badge */}
        {renderBadges.map((badgeText, index) => (
          <span
            key={index}
            className="bg-primary text-white py-1.5 px-3 ms-2 rounded-full font-bold"
          >
            {badgeText}
          </span>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-2">{title}</h2>

      <p className="line-clamp-2 mb-4">{description}</p>

      <div>
        <button
          type="button"
          className="text-black py-2 px-3 border-black border-1 rounded-4xl group-hover:bg-primary group-hover:text-white transition duration-300"
        >
          閱讀內文
        </button>
      </div>
    </Link>
  );
};

export default Card;
