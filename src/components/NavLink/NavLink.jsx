import "./Nav.scss";
import { Link } from "react-router-dom";

export default function NavLink({ title, link }) {
    return (
        <>
            <Link to={link} className="nav__link">
                {title}
            </Link>
        </>
    );
}
