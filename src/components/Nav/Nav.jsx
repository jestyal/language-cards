import "./Nav.scss";
import NavLink from "./NavLink/NavLink";
// import SocialLink from "./SocialLink/SocialLink";


// const SocialData = [{
//     title: "instagram",
//     link: "https://www.instagram.com/jestyal/",
//     svg: <InstagramLogo />,
// },{
//     title: "github",
//     link: "https://github.com/jestyal",
//     svg: <GitHubLogo />,
// },{
//     title: "telegram",
//     link: "https://t.me/jestyal",
//     svg: <TelegramLogo />,
// },]

function Nav() {
    return (
        <div className="Nav__wrap">
            {/*{*/}
            {/*    SocialData.map((item) =>*/}
            {/*        <SocialLink title={item.title}*/}
            {/*                    link={item.link}*/}
            {/*                    svg={item.svg}*/}
            {/*        />*/}
            {/*    )*/}
            {/*}*/}
            <NavLink />
        </div>
    );
}

export default Nav;