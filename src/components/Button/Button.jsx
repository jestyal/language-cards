import "./Button.scss";
// import { ReactComponent as ArrowPrev } from "../../assets/images/icons/arrowPrev.svg"
// import { ReactComponent as ArrowNext } from "../../assets/images/icons/arrowNext.svg"

function Button({ title, onClick, isHidden, arrowPrev, arrowNext }) {
    return (
        <button className={`Btn ` + (isHidden ? 'js_hidden' : "")} onClick={onClick}>
            {title}
            {/*{arrowPrev ? <ArrowPrev /> : null}*/}
            {/*{arrowNext ? <ArrowNext /> : null}*/}
        </button>
    );
}

export default Button;