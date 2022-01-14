import "./Footer.scss";
import Logo from "../Logo/Logo";
import SocialBlock from "../SocialBlock/SocialBlock";
import Copyright from "../Copyright/Copyright";
// import SearchForm from "../SearchForm/SearchForm";
// import Button from "../Button/Button";
// import NavLink from "../NavLink/NavLink";
//
// const navData = [{
//     title: "Flashcards",
//     link: "/flashcards",
// },{
//     title: "About",
//     link: "/about",
// },{
//     title: "Contact",
//     link: "/contact",
// },{
//     title: "Privacy Statement",
//     link: "/privacy-statement",
// },];


function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">
                {/*<div className="footer__wrap mb_10">*/}
                {/*    <Button title="Create Flashcards" />*/}
                {/*    <div className="nav__wrap">*/}
                {/*        {*/}
                {/*            navData.map((item, index) =>*/}
                {/*                <NavLink key={index}*/}
                {/*                         title={item.title}*/}
                {/*                         link={item.link}*/}
                {/*                />*/}
                {/*            )*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*    <SearchForm />*/}
                {/*</div>*/}
                <div className="footer__wrap">
                    <Logo />
                    <SocialBlock />
                    <Copyright />
                </div>
            </div>
        </footer>
    );
}

export default Footer;