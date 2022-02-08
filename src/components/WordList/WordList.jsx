import {useContext} from "react";
import Word from "./Word";
import "./Word.scss";
// import WORDS from "../Dictionary/Dictionary";
import {WordsContext} from "../../contexts/Words";
import EditButton from "./EditButton/EditButton";
import WordInput from "./WordInput";


function WordList() {
    const {WORDS, addWord, isAddWord} = useContext(WordsContext);

    return (
        <>
            <div className="Word__list-title flex flex_justify flex_align-center mb_20">
                <h2 className="title mb_0">Word list</h2>
                <EditButton title="Add word +" onClick={addWord}/>
            </div>
            {isAddWord &&
                <div className="Word__wrap Word__wrap_head">
                    <WordInput value="english" name="english" isEditMode={true}/>
                    <WordInput value="transcription" name="transcription" isEditMode={true}/>
                    <WordInput value="russian" name="russian" isEditMode={true}/>

                    {/*<WordInput value={newWord.english} error={error.english} name="english" onChange={handleChange} isEditMode={true} />*/}
                    {/*<WordInput value={newWord.transcription} error={error.transcription} name="transcription" onChange={true} isEditMode={true} />*/}
                    {/*<WordInput value={newWord.russian} error={error.russian} name="russian" onChange={handleChange} isEditMode={true} />*/}
                </div>
            }
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
        </>
    );
}

export default WordList;