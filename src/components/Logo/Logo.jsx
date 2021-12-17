import "./Logo.scss";
import { ReactComponent as LogoSvg } from './logo.svg';

export default function Logo() {
    return (
        <div className="Logo">
            <div className="Logo__img">
                <LogoSvg />
            </div>
            <div className="Logo__desc">Learning English by Flashcards</div>
        </div>
    );
}
