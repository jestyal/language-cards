import "./Header.scss";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import SearchForm from "../SearchForm/SearchForm";

function Header() {
    return (
        <header className="Header">
            <div className="wrapper Header__wrap">
                <Logo isShow />
                <SearchForm />
                <Nav />
            </div>
        </header>
    );
}

export default Header;