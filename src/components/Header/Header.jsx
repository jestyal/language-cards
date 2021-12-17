import "./Header.scss";
import Logo from "../Logo/Logo";

function Header() {
    return (
        <header className="Header">
            <div className="wrapper">
                <Logo isShow />
            </div>
        </header>
    );
}

export default Header;