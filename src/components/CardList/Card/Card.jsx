import Button from "../../Button/Button";

function Card({ english, transcription, russian }) {
    return (
        <div className="card__item">
            <div className="">
                <div className="card__word">{english}</div>
                <div className="card__transcription">{transcription}</div>
            </div>
            <div className="card__btn-wrap">
                <Button title="Check Up" />
                <div className="card__translation">{russian}</div>
            </div>
        </div>
    );
}

export default Card;