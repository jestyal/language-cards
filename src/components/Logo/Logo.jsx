import "./Logo.scss";
import logo from "./logo.svg";

export default function Logo() {
    return (
        <div className="Logo">
            <div className="Logo__img">
                <img src={logo} alt="logo" />
            </div>
            <div className="Logo__desc">Learning English by Flashcards</div>
        </div>
    );
}
