import { ReactComponent as InstagramLogo } from '../icons/instagram.svg';
import { ReactComponent as GitHubLogo } from '../icons/github.svg';
import { ReactComponent as TelegramLogo } from '../icons/telegram.svg';

function SocialLink({ title, link, svg }) {
    return (
        <a href={link} className="Social__link" title={title} target="_blank" rel="noopener nofollow">
            {/*<InstagramLogo  />*/}
            {svg}
        </a>
    );
}

export default SocialLink;