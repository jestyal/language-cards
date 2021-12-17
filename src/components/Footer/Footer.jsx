import "./Footer.scss";
import Logo from "../Logo/Logo";
import SocialBlock from "../SocialBlock/SocialBlock";

function Footer() {
    return (
        <footer className="Footer">
            <div className="wrapper Footer__wrap">
                <Logo />
                <SocialBlock />
            </div>
        </footer>
    );
}

export default Footer;