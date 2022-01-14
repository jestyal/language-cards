import "./Header.scss";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import NavLink from "../NavLink/NavLink";


// const navData = [{
//     title: "Log In",
//     link: "",
// },{
//     title: "Sign Up",
//     link: "",
// },];

const headerMenu = [{
    title: 'Flashcards',
    link: '/cards'
}]


function Header() {
    return (
        <header className="header">
            <div className="wrapper header__wrap">
                <Logo isShow />
                {/*<SearchForm />*/}
                <nav className="nav__wrap">
                    {/*{*/}
                    {/*    navData.map((item, index) =>*/}
                    {/*        <NavLink key={index}*/}
                    {/*                 title={item.title}*/}
                    {/*                 link={item.link}*/}
                    {/*        />*/}
                    {/*    )*/}
                    {/*}*/}

                </nav>
            </div>
        </header>
    );
}

export default Header;