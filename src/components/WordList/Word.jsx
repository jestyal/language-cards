import { useState } from "react";
import "./Word.scss";
import EditButton from "./EditButton/EditButton";

function Word({english, transcription, russian}) {
    const [isEditMode, changeEditMode] = useState(false);

    const handleChangeMode = () => {
        isEditMode ? changeEditMode(false) : changeEditMode(true);
    }





    const [englishValue, setEnglishValue] = useState(english);
    const [transcriptionValue, setTranscriptionValue] = useState(transcription);
    const [russianValue, setRussianValue] = useState(russian);

    const handleChangeEnglishValue = (event) => {
        setEnglishValue(event.target.value);
    }
    const handleChangeTranscriptionValue = (event) => {
        setTranscriptionValue(event.target.value);
    }
    const handleChangeRussianValue = (event) => {
        setRussianValue(event.target.value);
    }





    const handleChangeWord = () => {
        isEditMode ? changeEditMode(false) : changeEditMode(true);
    }




    
    return (
        <div className="Word__item">
            <div className="Word__wrap">
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <input value={englishValue} onChange={handleChangeEnglishValue} type="text" className="form__input"/>
                        :
                        <span>{englishValue}</span>
                    }
                </div>
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <input value={transcriptionValue} onChange={handleChangeTranscriptionValue} type="text" className="form__input"/>
                        :
                        <span>{transcriptionValue}</span>
                    }
                </div>
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <input value={russianValue} onChange={handleChangeRussianValue} type="text" className="form__input"/>
                        :
                        <span>{russianValue}</span>
                    }
                </div>
            </div>
            <div className="Word__edit">
                {isEditMode ?
                    <div className="Word__edit-items">
                        <EditButton title="Save" svg="save" onClick={handleChangeWord}  />
                        <EditButton title="Cancel" svg="cancel" onClick={handleChangeMode}/>
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