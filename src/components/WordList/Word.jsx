import { useState } from "react";
import "./Word.scss";
import EditButton from "./EditButton/EditButton";

function Word({english, transcription, russian}) {
    const [isEditMode, changeEditMode] = useState(false);

    const handleChangeMode = () => {
        isEditMode ? changeEditMode(false) : changeEditMode(true);
    }


    const [newWord, setNewWord] = useState({
            english: english,
            transcription: transcription,
            russian: russian
        }
    );

    const handleChange = (event) => {
        setNewWord({
            ...newWord,
            [event.target.name]: event.target.value
        });
    }

    const handleReset = (event) => {
        setNewWord({
            english: english,
            transcription: transcription,
            russian: russian
        });
        changeEditMode(false);
    }

    return (
        <div className="Word__item">
            <div className="Word__wrap">
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <input value={newWord.english} onChange={handleChange} name="english" type="text" className="form__input"/>
                        :
                        <span>{newWord.english}</span>
                    }
                </div>
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <input value={newWord.transcription} onChange={handleChange} name="transcription" type="text" className="form__input"/>
                        :
                        <span>{newWord.transcription}</span>
                    }
                </div>
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <input value={newWord.russian} onChange={handleChange} name="russian" type="text" className="form__input"/>
                        :
                        <span>{newWord.russian}</span>
                    }
                </div>
            </div>
            <div className="Word__edit">
                {isEditMode ?
                    <div className="Word__edit-items">
                        <EditButton title="Save" svg="save" onClick={handleChangeMode}  />
                        <EditButton title="Cancel" svg="cancel" onClick={handleReset}/>
                    </div>
                    :
                    <div className="Word__edit-items">
                        <EditButton title="Edit" svg="edit" onClick={handleChangeMode}/>
                        <EditButton title="Delete" svg="delete"/>
                    </div>
                }
            </div>
        </div>
    );

}

export default Word;