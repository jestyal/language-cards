import "./Footer.scss";
import Logo from "../Logo/Logo";
import SocialBlock from "../SocialBlock/SocialBlock";
import Copyright from "../Copyright/Copyright";
import SearchForm from "../SearchForm/SearchForm";
import Button from "../Button/Button";
import NavLink from "../NavLink/NavLink";

const navData = [{
    title: "Flashcards",
    link: "",
},{
    title: "About",
    link: "",
},{
    title: "Contact",
    link: "",
},{
    title: "Privacy Statement",
    link: "",
},];


function Footer() {
    return (
        <footer className="Footer">
            <div className="wrapper">
                <div className="Footer__wrap mb_10">
                    <Button title="Create Flashcards" />
                    <div className="Nav__wrap">
                        {
                            navData.map((item) =>
                                <NavLink title={item.title}
                                         link={item.link}
                                />
                            )
                        }
                    </div>
                    <SearchForm />
                </div>
                <div className="Footer__wrap">
                    <Logo />
                    <SocialBlock />
                    <Copyright />
                </div>
            </div>
        </footer>
    );
}

export default Footer;