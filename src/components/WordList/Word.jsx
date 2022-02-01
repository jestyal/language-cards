import {useState} from "react";
import "../../assets/styles/forms.scss";
import "./Word.scss";
import EditButton from "./EditButton/EditButton";

function Word({english, transcription, russian}) {
    const [isEditMode, changeEditMode] = useState(false);

    const [newWord, setNewWord] = useState({
        english: english,
        transcription: transcription,
        russian: russian,
    });

    //Validation
    const [isValid, setIsValid] = useState({
        english: true,
        transcription: true,
        russian: true,
    });

    //Disable Save btn
    const [isDisabled, setIsDisabled] = useState(false);

    //Errors
    const [error, setError] = useState({
        english: "",
        transcription: "",
        russian: "",
    });


    //Inputs
    const handleChange = (event) => {
        //валидация
        if (!event.target.value) {
            setIsDisabled(true);
            setError({
                ...error,
                [event.target.name]: "Field cannot be empty"
            });
        } else {
            setIsDisabled(false);
            setError({
                ...error,
                [event.target.name]: ""
            });
        }

        setIsValid({
            ...isValid,
            [event.target.name]: event.target.value.length !== 0
        });

        setNewWord({
            ...newWord,
            [event.target.name]: event.target.value
        });

    };

    //Edit btn
    const handleEdit = () => {
        isEditMode ? changeEditMode(false) : changeEditMode(true);

        setError({
            ...error,
            english: "",
            transcription: "",
            russian: "",
        });
    };

    //Save btn
    const handleSave = () => {
        isEditMode ? changeEditMode(false) : changeEditMode(true);

        //сохранение
        if(isDisabled) {
            changeEditMode(true);
        } else {
            console.log(
                `Word: ` + newWord.english + ` Transcription: ` + newWord.transcription + ` Russian: ` + newWord.russian
            );
        }
    }


    //Cancel btn
    const handleReset = (event) => {
        setNewWord({
            english: english,
            transcription: transcription,
            russian: russian
        });
        changeEditMode(false);

        //валидация
        setIsValid({
            english: true,
            transcription: true,
            russian: true,
        })

        setIsDisabled(false);

    };


    return (
        <div className="Word__item">
            <div className="Word__wrap">
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <>
                            <input value={newWord.english} onChange={handleChange} name="english" type="text"
                                   className={(isValid.english ? `form__input` : `form__input form__input_err`)}
                            />
                            <div className="form__error">
                                {error.english ? error.english : ""}
                            </div>
                        </>
                        :
                        <span>{newWord.english}</span>
                    }
                </div>
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <>
                            <input value={newWord.transcription} onChange={handleChange} name="transcription"
                                   type="text"
                                   className={(isValid.transcription ? `form__input` : `form__input form__input_err`)}
                            />
                            <div className="form__error">
                                {error.transcription ? error.transcription : ""}
                            </div>
                        </>

                        :
                        <span>{newWord.transcription}</span>
                    }
                </div>
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <>
                            <input value={newWord.russian} onChange={handleChange} name="russian" type="text"
                                   className={(isValid.russian ? `form__input` : `form__input form__input_err`)}
                            />
                            <div className="form__error">
                                {error.russian ? error.russian : ""}
                            </div>
                        </>
                        :
                        <span>{newWord.russian}</span>
                    }
                </div>
            </div>
            <div className="Word__edit">
                {isEditMode ?
                    <div className="Word__edit-items">
                        <EditButton title="Save" svg="save" onClick={handleSave}
                                    isDisabled={isDisabled}
                        />
                        <EditButton title="Cancel" svg="cancel" onClick={handleReset}/>
                    </div>
                    :
                    <div className="Word__edit-items">
                        <EditButton title="Edit" svg="edit" onClick={handleEdit}/>
                        <EditButton title="Delete" svg="delete"/>
                    </div>
                }
            </div>
        </div>
    );

}

export default Word;