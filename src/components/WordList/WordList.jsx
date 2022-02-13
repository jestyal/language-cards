import {useContext} from "react";
import Word from "./Word";
import "./Word.scss";
// import WORDS from "../Dictionary/Dictionary";
import {WordsContext} from "../../contexts/Words";
import EditButton from "./EditButton/EditButton";


function WordList() {
    const {WORDS, addWord} = useContext(WordsContext);

    return (
        <>
            <div className="Word__list-title flex flex_justify flex_align-center mb_20">
                <h2 className="title mb_0">Word list</h2>
                <EditButton title="Add word +" onClick={addWord}/>
            </div>
            <div className="Word__list">
                <div className="Word__list-head">
                    <div>English</div>
                    <div>Transcription</div>
                    <div>Russian</div>
                    <div>Edit Buttons</div>
                </div>
                <div className="Word__list-body">
                    {
                        WORDS.map((item, index) =>
                            <Word key={item.id} index={index} word={item} />
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default WordList;