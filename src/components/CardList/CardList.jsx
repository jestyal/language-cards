import {useState, useEffect, useRef} from "react";
import Card from "./Card/Card";
import "./Card.scss";
import WORDS from "../Dictionary/Dictionary";
import Button from "../Button/Button";
import Firework from "../Firework/Firework";

function CardList() {
    const [counter, setCounter] = useState(0);

    const showPrevCard = () => {
        setCounter(counter - 1);
    }

    const showNextCard = () => {
        setCounter(counter + 1);
    }


    const [studiedWord, setStydiedWord] = useState(0);
    const handleClickBtn = () => {
        setStydiedWord(studiedWord + 1);
    }


    const ref = useRef(0);
    useEffect(() => ref.current.focus(), []);

    return (
        <main className="wrapper wrapper_full">
            <h1 className="title title_max title_center mt_40 mb_40">Learning English by Flashcards</h1>
            <h2 className="title title_center mb_40">Flashcards Game</h2>


            {counter === WORDS.length ?
                <div className="card__finish">
                    <h2>Congratulations!</h2>
                    <p>You stydied {studiedWord} words</p>
                    <Firework />
                </div>

                :
                <div className="card__slider">
                    <div className="card__list">
                        <Card {...WORDS[counter]} ref={ref} handleClickBtn={handleClickBtn} />
                    </div>
                    <div className="card__arrows">
                        {counter > 0 && <Button onClick={showPrevCard} className={"arrows__prev"}/>}
                        <Button onClick={showNextCard} className={"arrows__next"}/>
                    </div>
                    <div className="card__counter">
                        {counter + 1} / {WORDS.length}
                    </div>
                    <div className="card__stydied-word">
                        You stydied <span>{studiedWord}</span> words.
                    </div>
                </div>
            }
        </main>
    );
}

export default CardList;