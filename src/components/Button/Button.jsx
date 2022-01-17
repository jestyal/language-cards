import "./Button.scss";

function Button({ title, onClick, className, isHidden }) {
    return (
        <button className={`btn ` + (isHidden ? 'js_hidden' : "") + (className ? className : "") } onClick={onClick}>
            {title}
        </button>
    );
}

export default Button;