import {useState, useEffect, useRef} from "react";
import "../../assets/styles/forms.scss";
import "./Word.scss";
import EditButton from "./EditButton/EditButton";

function Word({english, transcription, russian}) {
    const [isEditMode, changeEditMode] = useState(false);

    const handleChangeMode = () => {
        isEditMode ? changeEditMode(false) : changeEditMode(true);

    };

    const [newWord, setNewWord] = useState({
        english: english,
        transcription: transcription,
        russian: russian,
    });


    const handleChange = (event) => {

        //валидация
        if (!event.target.value ) {
            setIsDisabled(true);
        }
        setIsValid({
            ...isValid,
            [event.target.name]: event.target.value.length !== 0
        });



        setNewWord({
            ...newWord,
            [event.target.name]: event.target.value
            // [event.target.name]: event.target.value.length !== 0,
        });



    };

    const handleReset = (event) => {
        setNewWord({
            english: english,
            transcription: transcription,
            russian: russian
        });
        changeEditMode(false);



        setIsValid({
            english: true,
            transcription: true,
            russian: true,
        })
        setIsDisabled(false);

    };



    //валидация для полей
    const [isValid, setIsValid] = useState({
        english: true,
        transcription: true,
        russian: true,
    });

    //отключить кнопку
    const [isDisabled, setIsDisabled] = useState(false);



    return (
        <div className="Word__item">
            <div className="Word__wrap">
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <input value={newWord.english} onChange={handleChange} name="english" type="text"
                               className={(isValid.english ? `form__input` : `form__input form__input_err`)}
                               // className="form__input"
                        />
                        :
                        <span>{newWord.english}</span>
                    }
                </div>
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <input value={newWord.transcription} onChange={handleChange} name="transcription" type="text"
                               className={(isValid.transcription ? `form__input` : `form__input form__input_err`)}
                               // className="form__input"
                        />
                        :
                        <span>{newWord.transcription}</span>
                    }
                </div>
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <input value={newWord.russian} onChange={handleChange} name="russian" type="text"
                               className={(isValid.russian ? `form__input` : `form__input form__input_err`)}
                               // className="form__input"
                        />
                        :
                        <span>{newWord.russian}</span>
                    }
                </div>
            </div>
            <div className="Word__edit">
                {isEditMode ?
                    <div className="Word__edit-items">
                        <EditButton title="Save" svg="save" onClick={handleChangeMode}
                                    isDisabled={isDisabled}
                        />
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