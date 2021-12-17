import "./Footer.scss";
import Logo from "../Logo/Logo";
import SocialBlock from "../SocialBlock/SocialBlock";
import Copyright from "../Copyright/Copyright";
import Nav from "../Nav/Nav";
import SearchForm from "../SearchForm/SearchForm";

function Footer() {
    return (
        <footer className="Footer">
            <div className="wrapper Footer__wrap">
                <Logo />
                <Nav />
                <SearchForm />
                <SocialBlock />
                <Copyright />
            </div>
        </footer>
    );
}

export default Footer;