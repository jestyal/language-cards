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




    const useFocus = () => {
        const ref = useRef(null)
        const setFocus = () => {ref.current && ref.current.focus()}

        return [ ref, setFocus ]
    }

    const [btnRef, setBtnFocus] = useFocus();

    useEffect(() => {
        setBtnFocus();
    });



    return (
        <div className="card__item">
            <div className="">
                <div className="card__word">{english || "English"}</div>
                <div className="card__transcription">{transcription || "Transcription"}</div>
            </div>
            <div className="card__btn-wrap">
                {isFront ?
                    <button className="btn btn_focused" onClick={showRussianWord} ref={btnRef}>
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