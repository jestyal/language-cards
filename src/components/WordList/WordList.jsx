import { Fragment } from "react";
import Word from "./Word";
import "./Word.scss";
import WORDS from "../Dictionary/Dictionary";

function WordList() {
    return (
        <Fragment>
            <h2 className="title">Word list</h2>
            <div className="Word__list">
                {
                    WORDS.map((item) =>
                        <Word key={item.id}
                              english={item.english}
                              transcription={item.transcription}
                              russian={item.russian}
                              tags={item.tags}
                        />
                    )
                }
            </div>
        </Fragment>
    );
}

export default WordList;