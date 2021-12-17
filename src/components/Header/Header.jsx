import "./Header.scss";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import NavLink from "../NavLink/NavLink";


const navData = [{
    title: "Log In",
    link: "",
},{
    title: "Sign Up",
    link: "",
},];


function Header() {
    return (
        <header className="Header">
            <div className="wrapper Header__wrap">
                <Logo isShow />
                <SearchForm />
                <div className="Nav__wrap">
                    {
                        navData.map((item, index) =>
                            <NavLink key={index}
                                     title={item.title}
                                     link={item.link}
                            />
                        )
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;