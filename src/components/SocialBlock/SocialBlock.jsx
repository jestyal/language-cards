import "./SocialBlock.scss";
import SocialLink from "./SocialLink/SocialLink";
import { ReactComponent as InstagramLogo } from './icons/instagram.svg';
import { ReactComponent as GitHubLogo } from './icons/github.svg';
import { ReactComponent as TelegramLogo } from './icons/telegram.svg';

const SocialData = [{
    title: "instagram",
    link: "https://www.instagram.com/jestyal/",
    svg: <InstagramLogo />,
},{
    title: "github",
    link: "https://github.com/jestyal",
    svg: <GitHubLogo />,
},{
    title: "telegram",
    link: "https://t.me/jestyal",
    svg: <TelegramLogo />,
},]

function SocialBlock() {
    return (
        <div className="Social__wrap">
            {
                SocialData.map((item) =>
                    <SocialLink title={item.title}
                                link={item.link}
                                svg={item.svg}
                    />
                )
            }
        </div>
    );
}

export default SocialBlock;