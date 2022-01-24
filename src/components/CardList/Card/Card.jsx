import {useState, useEffect, forwardRef } from "react";
import "../../Button/Button.scss";

const Card = forwardRef(function Card({id, english, transcription, russian, handleClickBtn, studiedWord }, ref) {
    const [isFront, setIsFront] = useState(true);

    function showRussianWord() {
        setIsFront(!isFront);
        handleClickBtn();
    }

    useEffect(() => {
        setIsFront(true);
    }, [id]);

    return (
        <div className="card__item">
            <div className="">
                <div className="card__word">{english || "English"}</div>
                <div className="card__transcription">{transcription || "Transcription"}</div>
            </div>
            <div className="card__btn-wrap">
                {isFront ?
                    <button className="btn" onClick={showRussianWord} ref={ref}>
                        Check Up
                    </button>
                    :
                    <div className="card__translation">{russian || "Russian"}</div>
                }
            </div>
        </div>
    );
});

export default Card;