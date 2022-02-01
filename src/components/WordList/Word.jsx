import {useState} from "react";
import "../../assets/styles/forms.scss";
import "./Word.scss";
import EditButton from "./EditButton/EditButton";

function WordInput({isEditMode, value, onChange, name, error }) {
    return (
        <div className="Word__input-wrap">
            {isEditMode ?
                <>
                    <input value={value} onChange={onChange} name={name} type="text"
                           className={(!error ? `form__input` : `form__input form__input_err`)}
                    />
                    <div className="form__error">
                        {error}
                    </div>
                </>
                :
                <span>{value}</span>
            }
        </div>
    )
}

function Word({english, transcription, russian}) {
    const [isEditMode, changeEditMode] = useState(false);

    const [newWord, setNewWord] = useState({
        english: english,
        transcription: transcription,
        russian: russian,
    });

    //Errors
    const [error, setError] = useState({
        english: "",
        transcription: "",
        russian: "",
    });

    const isHaveError = () => Object.values(error).find(i => i !== "");

    const resetChanges = () => {
        setError({
            ...error,
            english: "",
            transcription: "",
            russian: "",
        });
    }

    //Inputs
    const handleChange = (event) => {
        setError({
            ...error,
            [event.target.name]: event.target.value ? "" : "Field cannot be empty",
        });

        setNewWord({
            ...newWord,
            [event.target.name]: event.target.value
        });

    };

    //Edit btn
    const handleEdit = () => {
        changeEditMode(true);
        resetChanges();
    };

    //Save btn
    const handleSave = () => {
        if (isHaveError()) return;

        changeEditMode(false);

        console.log(
            `Word: ` + newWord.english + ` Transcription: ` + newWord.transcription + ` Russian: ` + newWord.russian
        );
    }

    //Cancel btn
    const handleReset = () => {
        setNewWord({
            english: english,
            transcription: transcription,
            russian: russian
        });
        changeEditMode(false);
        resetChanges();
    };

    return (
        <div className="Word__item">
            <div className="Word__wrap">
                <WordInput value={newWord.english} error={error.english} name="english" onChange={handleChange} isEditMode={isEditMode} />
                <WordInput value={newWord.transcription} error={error.transcription} name="transcription" onChange={handleChange} isEditMode={isEditMode} />
                <WordInput value={newWord.russian} error={error.russian} name="russian" onChange={handleChange} isEditMode={isEditMode} />
            </div>
            <div className="Word__edit">
                {isEditMode ?
                    <div className="Word__edit-items">
                        <EditButton title="Save" svg="save" onClick={handleSave}
                                    isDisabled={isHaveError()}
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