import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faPodcast } from '@fortawesome/free-solid-svg-icons';
import SocialMediaIcons from './SocialMediaIcons';

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // 首頁聯繫資訊 List
  const contactList = [
    {
      title: 'alysewang@hexschool.com 合作洽談',
      link: 'mailto:alysewang@hexschool.com',
    },
    {
      title: 'Youtube 職涯諮詢室',
      link: 'https://www.youtube.com/',
      icon: faYoutube,
    },
    {
      title: 'podcast 職涯諮詢室',
      link: 'https://www.podcast.com/',
      icon: faPodcast,
    },
    {
      title: 'Facebook 前端社群',
      link: 'https://www.facebook.com/groups/f2e.tw',
      icon: faFacebook,
    },
    {
      title: 'LinkedIn 職涯交流',
      link: 'https://www.linkedin.com/',
      icon: faLinkedin,
    },
    {
      title: 'Instagram 日常分享',
      link: 'https://www.instagram.com/',
      icon: faInstagram,
    },
  ];



  return (
    <footer className="border-t-1 border-t-neutral-400">
      {/* 首頁 Footer 區塊 */}
      {isHomePage && <div className="container py-16 md:py-20">
        <h2 className="text-5xl md:text-6xl mb-6">與我聯繫</h2>

        <ul>
          {contactList.map((item, index) => (
            <li key={index} className="border-b-2 border-neutral-300">
              <a href={item.link} className="py-4 flex justify-between items-center">
                <span>
                  {
                    item.icon && <FontAwesomeIcon icon={item.icon} className="text-primary mr-2" />
                  }
                  {item.title}
                </span>

                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </li>
          ))}
        </ul>

      </div>}

      {/* 非首頁 Footer 區塊 */}
      {
        !isHomePage && <div className="container py-20 hidden md:flex justify-between items-center">
          <h2 className="md:text-2xl lg:text-3xl">
            <a href="mailto:alysewang@hexschool.com">alysewang@hexschool.com</a>
          </h2>

          <SocialMediaIcons />
        </div>
      }

      <p className="text-center py-6 border-t-1 border-t-neutral-400">© 2025 Alyse Wang. All rights reserved.</p>
    </footer>
  )
}