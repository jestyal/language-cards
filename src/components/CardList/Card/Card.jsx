import {useState} from "react";
import Button from "../../Button/Button";

function Card({ english, transcription, russian, counter }) {
    const [isHidden, changeBtnVisibility] = useState(false);
    const [last, changeLast] = useState(false);

    function showRussianWord() {
        changeBtnVisibility(true);
        changeLast(counter);
    }

    if(last !== counter && isHidden) {
        changeBtnVisibility(false);
    }

    return (
        <div className="card__item">
            <div className="">
                <div className="card__word">{ english || "English" }</div>
                <div className="card__transcription">{ transcription || "Transcription" }</div>
            </div>
            <div className="card__btn-wrap">
                <Button title="Check Up" onClick={showRussianWord} isHidden={isHidden} />
                <div className="card__translation">{ russian || "Russian" }</div>
            </div>
        </div>
    );
}

export default Card;