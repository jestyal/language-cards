import { Fragment } from "react";
import Card from "./Card/Card";
import "./Card.scss";
import WORDS from "../Dictionary/Dictionary";

function CardList() {
    return (
        <Fragment>
            <h2 className="title">Card list</h2>
            <div className="card__list">
                {
                    WORDS.map((item) =>
                        <Card key={item.id} {...item} />
                    )
                }
            </div>
        </Fragment>
    );
}

export default CardList;