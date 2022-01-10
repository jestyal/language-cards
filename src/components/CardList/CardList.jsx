import { Fragment, useState } from "react";
import Card from "./Card/Card";
import "./Card.scss";
import WORDS from "../Dictionary/Dictionary";
import Button from "../Button/Button";

function CardList(props) {
    // const [counter, setCounter] = useState(props.number);
    const [counter, setCounter] = useState(0);

    const showPrevCard = () => {
        if(counter <= 0) {
            setCounter(0)
        } else {
            setCounter(counter - 1);
        }
    }

    const showNextCard = () => {
        if((counter + 1) === WORDS.length) {
            setCounter(WORDS.length - 1)
        } else {
            setCounter(counter + 1);
        }
    }


    return (
        <Fragment>
            <h2 className="title">Card list</h2>

            <div className="card__slider">
                <div className="card__list">
                    {
                        WORDS.map((item, index) =>
                            <Card key={index}
                                  id={item.id}
                                  index={index}
                                  counter={counter}
                                  {...item}
                            />
                        )
                    }
                </div>
                <div className="card__arrows">
                    <Button onClick={showPrevCard} />
                    <Button onClick={showNextCard} />
                </div>
                <div className="card__counter">
                    { counter + 1 } / { WORDS.length }
                </div>
            </div>
        </Fragment>
    );
}

export default CardList;