import "./Button.scss";

function Button({ title, onClick, isHidden }) {
    return (
        <button className={`btn` + (isHidden ? ' js_hidden' : "")} onClick={onClick}>
            {title}
        </button>
    );
}

export default Button;