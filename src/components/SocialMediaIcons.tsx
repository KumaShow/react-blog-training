import { SocialMediaIcon } from '@/interfaces/socialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';

export default function SocialMediaIcons() {
  // Social Media Icons
  const socialMediaIcons: SocialMediaIcon[] = [
    { icon: faYoutube, link: 'https://www.youtube.com/' },
    { icon: faPodcast, link: 'https://www.podcast.com/' },
    { icon: faFacebook, link: 'https://www.facebook.com/' },
    { icon: faLinkedin, link: 'https://www.linkedin.com/' },
    { icon: faInstagram, link: 'https://www.instagram.com/' },
  ];

  return (
    <ul className="flex items-center text-primary text-2xl leading-none">
      {
        socialMediaIcons.map(icon => (
          <li key={icon.link}>
            <a href={icon.link} target="_blank" className="p-2.5 block">
              <FontAwesomeIcon icon={icon.icon} />
            </a>
          </li>
        ))
      }
    </ul>
  )
};