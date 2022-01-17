import {useState} from "react";
import Button from "../../Button/Button";

function Card({ word, english, transcription, russian, counter }) {
    const [isHidden, changeBtnVisibility] = useState(false);
    const [last, changeLast] = useState(false);

    function showRussianWord() {
        changeBtnVisibility(true);
        changeLast(counter);
    }

    if(last !== counter && isHidden) {
        changeBtnVisibility(false);
    }

    if (!word) {
        word = {
            english: "English",
            transcription: "Transcription",
            russian: "Russian"
        }
    }

    return (
        <div className="card__item">
            <div className="">
                <div className="card__word">{ english }</div>
                <div className="card__transcription">{ transcription }</div>
            </div>
            <div className="card__btn-wrap">
                <Button title="Check Up" onClick={showRussianWord} isHidden={isHidden} />
                <div className="card__translation">{ russian }</div>
            </div>
        </div>
    );
}

export default Card;