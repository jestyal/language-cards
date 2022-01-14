import { Link } from "react-router-dom";
import "./Header.scss";
import "../NavLink/Nav.scss";
import Logo from "../Logo/Logo";
// import SearchForm from "../SearchForm/SearchForm";
// import NavLink from "../NavLink/NavLink";

// const navData = [{
//     title: "Log In",
//     link: "",
// },{
//     title: "Sign Up",
//     link: "",
// },];

const headerMenu = [{
    title: 'Flashcards',
    link: '/game'
}, {
    title: 'Contacts',
    link: '/contacts'
}]


function Header() {
    return (
        <header className="header">
            <div className="wrapper header__wrap">
                <Logo isShow />
                {/*<SearchForm />*/}
                <nav className="nav__wrap">
                    {
                        headerMenu.map((item, index) =>
                            <Link key={index} to={item.link} className="nav__link">
                                {item.title}
                            </Link>
                        )
                    }
                </nav>
                {/*<nav className="nav__wrap">*/}
                {/*    {*/}
                {/*        navData.map((item, index) =>*/}
                {/*            <NavLink key={index}*/}
                {/*                     title={item.title}*/}
                {/*                     link={item.link}*/}
                {/*            />*/}
                {/*        )*/}
                {/*    }*/}
                {/*</nav>*/}
            </div>
        </header>
    );
}

export default Header;