import "./Button.scss";

function Button({ title, link }) {
    return (
        <a href={link} className="Btn">
            {title}
        </a>
    );
}

export default Button;