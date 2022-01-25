import {useState, useEffect, useRef } from "react";
import "../../Button/Button.scss";

// const Card = forwardRef(

function Card({id, english, transcription, russian, handleClickBtn }) {
    const [isFront, setIsFront] = useState(true);

    const showRussianWord = () => {
        setIsFront(!isFront);
        handleClickBtn();
    }

    useEffect(() => {
        setIsFront(true);
    }, [id]);


    const ref = useRef(null);
    useEffect(() => ref.current.focus(), []);


    return (
        <div className="card__item">
            <div className="">
                <div className="card__word">{english || "English"}</div>
                <div className="card__transcription">{transcription || "Transcription"}</div>
            </div>
            <div className="card__btn-wrap">
                {isFront ?
                    <button className="btn btn_focused" onClick={showRussianWord} ref={ref}>
                        Check Up
                    </button>
                    :
                    <div className="card__translation">{russian || "Russian"}</div>
                }
            </div>
        </div>
    );
}
// );


export default Card;