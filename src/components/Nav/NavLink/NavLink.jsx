export default function NavLink({ title, link }) {
    return (
        <a href={link} className="Nav__link">
            {title}
        </a>
    );
}
