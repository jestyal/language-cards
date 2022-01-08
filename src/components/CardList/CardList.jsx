import { Fragment } from "react";
import Card from "./Card/Card";
import "./Card.scss";
import WORDS from "../Dictionary/Dictionary";
import Button from "../Button/Button";

function CardList() {
    return (
        <Fragment>
            <h2 className="title">Card list</h2>

            <div className="card__slider">
                <div className="card__list">
                    {
                        WORDS.map((item) =>
                            <Card key={item.id} {...item} />
                        )
                    }
                </div>
                <div className="card__arrows">
                    <Button title="Prev" arrow="arrowPrev" />
                    <Button title="Next" arrow="arrowNext" />
                </div>
                <div className="card__counter">
                    1 / 10
                </div>
            </div>
        </Fragment>
    );
}

export default CardList;