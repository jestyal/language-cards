import {useState, useContext, useEffect} from "react";
import "../../assets/styles/forms.scss";
import "./Word.scss";
import EditButton from "./EditButton/EditButton";
import WordInput from "./WordInput";
import {WordsContext} from "../../contexts/Words";

function Word({word, index}) {
    const {english,transcription, russian, id} = word;
    const { deleteWord, saveWord } = useContext(WordsContext);
    const [isEditMode, changeEditMode] = useState(!id);

    const [newWord, setNewWord] = useState({...word});

    useEffect(() => {
        setNewWord({...word});
    }, [word]);

    //Errors
    const [error, setError] = useState({
        english: !id ? "Field cannot be empty" : "",
        transcription: !id ? "Field cannot be empty" : "",
        russian: !id ? "Field cannot be empty" : "",
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
        saveWord(index, newWord);
        // console.log(
        //     `Word: ` + newWord.english + ` Transcription: ` + newWord.transcription + ` Russian: ` + newWord.russian
        // );

    }

    //Cancel btn
    const handleReset = () => {
        setNewWord({
            english,
            transcription,
            russian
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
                        {!id ? <EditButton title="Delete" svg="delete" onClick={() => deleteWord(id, index)} /> : <EditButton title="Cancel" svg="cancel" onClick={handleReset}/>}
                    </div>
                    :
                    <div className="Word__edit-items">
                        <EditButton title="Edit" svg="edit" onClick={handleEdit}/>
                        <EditButton title="Delete" svg="delete" onClick={() => deleteWord(id, index)}/>
                    </div>
                }
            </div>
        </div>
    );

}

export default Word;