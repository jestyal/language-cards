import "./Logo.scss";
import { ReactComponent as LogoSvg } from './logo.svg';
import { Link } from "react-router-dom";


export default function Logo({ isShow }) {
    return (

            <div className="Logo">
                <Link to="/" className="Logo__link">
                    <LogoSvg />
                </Link>
                {isShow &&
                    <div className="Logo__desc">Learning English by Flashcards</div>
                }
            </div>

    );
}
