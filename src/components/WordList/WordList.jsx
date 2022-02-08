import {useContext} from "react";
import Word from "./Word";
import "./Word.scss";
// import WORDS from "../Dictionary/Dictionary";
import {WordsContext} from "../../contexts/Words";
import EditButton from "./EditButton/EditButton";
import WordInput from "./WordInput";


function WordList() {
    const {WORDS, addWord, isAddWord, changeWord, newAddWord} = useContext(WordsContext);

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
                    {isAddWord &&
                        <div className="Word__item Word__add">
                            <div className="Word__wrap">
                                <WordInput value={newAddWord.english} name="english" onChange={changeWord} isEditMode={true}/>
                                <WordInput value={newAddWord.transcription} name="transcription" onChange={changeWord} isEditMode={true}/>
                                <WordInput value={newAddWord.russian} name="russian" onChange={changeWord} isEditMode={true}/>
                                {/*<WordInput value={newWord.english} error={error.english} name="english" onChange={handleChange} isEditMode={true} />*/}
                                {/*<WordInput value={newWord.transcription} error={error.transcription} name="transcription" onChange={true} isEditMode={true} />*/}
                                {/*<WordInput value={newWord.russian} error={error.russian} name="russian" onChange={handleChange} isEditMode={true} />*/}
                            </div>
                            <div className="Word__edit">
                                <div className="Word__edit-items">
                                    <EditButton title="Save" svg="save" />
                                    <EditButton title="Cancel" svg="cancel" />
                                    <EditButton title="Delete" svg="delete"/>
                                    {/*<EditButton title="Save" svg="save" onClick={handleSave} isDisabled={isHaveError()}/>*/}
                                    {/*<EditButton title="Cancel" svg="cancel" onClick={handleReset}/>*/}
                                    {/*<EditButton title="Delete" svg="delete"/>*/}
                                </div>
                            </div>
                        </div>
                    }
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