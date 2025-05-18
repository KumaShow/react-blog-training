import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 判斷滾動位置，當滾動到一定位置時顯示按鈕
  const toggleVisibility = () => {
    return window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
  };

  // 使用 useEffect 來監聽滾動事件，並在元件卸載時移除監聽器
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-primary text-white w-10 h-10 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      )}
    </div>
  );
}
