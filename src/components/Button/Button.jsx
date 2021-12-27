import "./Button.scss";

function Button({ title, onClick, isHidden }) {
    return (
        <button className={`Btn ` + (isHidden ? 'js_hidden' : null)} onClick={onClick}>
            {title}
        </button>
    );
}

export default Button;