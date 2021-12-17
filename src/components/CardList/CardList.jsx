import Card from "./Card/Card";
import "./Card.scss";

function CardList() {
    return (
        <div className="card__list">
            <h1>Карточки</h1>
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CardList;