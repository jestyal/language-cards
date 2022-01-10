import {useState} from "react";
import Button from "../../Button/Button";

function Card({id, index, english, transcription, russian, counter}) {
    const [isHidden, changeBtnVisibility] = useState(false);

    function showRussianWord() {
        changeBtnVisibility(true);
    }

    return (
        <div className={`card__item` + ((counter === index) ? ` js_active` : ``)}>
            <div className="">
                <div className="card__word">{english}</div>
                <div className="card__transcription">{transcription}</div>
            </div>
            <div className="card__btn-wrap">
                <Button title="Check Up" onClick={showRussianWord} isHidden={isHidden}/>
                <div className="card__translation">{russian}</div>
            </div>
        </div>
    );
}

export default Card;