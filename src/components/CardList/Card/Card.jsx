import {useState, useEffect} from "react";
import Button from "../../Button/Button";

function Card({id, english, transcription, russian }) {
    const [isFront, setIsFront] = useState(true);

    function showRussianWord() {
        setIsFront(!isFront);
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
                    <Button title="Check Up" onClick={showRussianWord}/>
                    :
                    <div className="card__translation">{russian || "Russian"}</div>
                }
            </div>
        </div>
    );
}

export default Card;