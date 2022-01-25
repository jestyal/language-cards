import {useState} from "react";
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


    const [studiedWords, setStudiedWords] = useState([]);
    const handleClickBtn = (id) => {
        if(!studiedWords.includes(id)) {
            setStudiedWords([...studiedWords, id]);
        }
    }

    return (
        <main className="wrapper wrapper_full">
            <h1 className="title title_max title_center mt_40 mb_40">Learning English by Flashcards</h1>
            <h2 className="title title_center mb_40">Flashcards Game</h2>
            {counter === WORDS.length ?
                <div className="card__finish">
                    <h2>Congratulations!</h2>
                    {studiedWords.length > 0 &&
                        <p>You studied {studiedWords.length} words</p>
                    }
                    <Firework />
                </div>
                :
                <div className="card__slider">
                    <div className="card__list">
                        <Card {...WORDS[counter]} handleClickBtn={handleClickBtn} />
                    </div>
                    <div className="card__arrows">
                        {counter > 0 && <Button onClick={showPrevCard} className={"arrows__prev"}/>}
                        <Button onClick={showNextCard} className={"arrows__next"}/>
                    </div>
                    <div className="card__counter">
                        {counter + 1} / {WORDS.length}
                    </div>
                    {studiedWords.length > 0 &&
                        <div className="card__stydied-word">
                            You studied <span>{studiedWords.length}</span> words.
                        </div>
                    }
                </div>
            }
        </main>
    );
}

export default CardList;