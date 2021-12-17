import "./Footer.scss";
import Logo from "../Logo/Logo";
import SocialBlock from "../SocialBlock/SocialBlock";
import Copyright from "../Copyright/Copyright";

function Footer() {
    return (
        <footer className="Footer">
            <div className="wrapper Footer__wrap">
                <Logo />
                <SocialBlock />
                <Copyright />
            </div>
        </footer>
    );
}

export default Footer;