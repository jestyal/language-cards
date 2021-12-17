import "./Logo.scss";
import { ReactComponent as LogoSvg } from './logo.svg';

export default function Logo({ isShow }) {
    return (
        <div className="Logo">
            <a href="/" className="Logo__link">
                <LogoSvg />
            </a>
            {isShow &&
                <div className="Logo__desc">Learning English by Flashcards</div>
            }
        </div>
    );
}
