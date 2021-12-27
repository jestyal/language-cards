import {Fragment} from "react";
import Word from "./Word";
import "./Word.scss";
import WORDS from "../Dictionary/Dictionary";

function WordList() {
    return (
        <Fragment>
            <h2 className="title">Word list</h2>
            <div className="Word__list">
                <div className="Word__list-head">
                    <div>English</div>
                    <div>Transcription</div>
                    <div>Russian</div>
                    <div>Edit Buttons</div>
                </div>
                <div className="Word__list-body">
                    {
                        WORDS.map((item) =>
                            <Word key={item.id} {...item} />
                        )
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default WordList;