import { useState } from "react";
import "./Word.scss";
import EditButton from "./EditButton/EditButton";


function Word({english, transcription, russian}) {
    const [isEditMode, changeEditMode] = useState(false);

    function onClickChangeModeBtn() {
        isEditMode ? changeEditMode(false) : changeEditMode(true);
    }

    return (
        <div className="Word__item">
            <div className="Word__wrap">
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <input defaultValue={english} type="text" className="form__input"/>
                        :
                        <span>{english}</span>
                    }
                </div>
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <input defaultValue={transcription} type="text" className="form__input"/>
                        :
                        <span>{transcription}</span>
                    }
                </div>
                <div className="Word__input-wrap">
                    {isEditMode ?
                        <input defaultValue={russian} type="text" className="form__input"/>
                        :
                        <span>{russian}</span>
                    }
                </div>
            </div>
            <div className="Word__edit">
                {isEditMode ?
                    <div className="Word__edit-items">
                        <EditButton title="Save" svg="save"  />
                        <EditButton title="Cancel" svg="cancel" onClick={onClickChangeModeBtn}/>
                    </div>
                    :
                    <div className="Word__edit-items">
                        <EditButton title="Edit" svg="edit" onClick={onClickChangeModeBtn}/>
                        <EditButton title="Delete" svg="delete"/>
                    </div>
                }
            </div>
        </div>
    );

}

export default Word;