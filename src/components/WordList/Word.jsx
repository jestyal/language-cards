import { Component } from "react";
import "./Word.scss";
import EditButton from "./EditButton/EditButton";

class Word extends Component {
    editWord(elem, elemId) {
        let parent = document.querySelector(`#${elemId}`);
        let child  = parent.querySelectorAll('.form__input');

        for(let i=0; i<child.length; i++) {
            child[i].style.display = "block";
        }

        let saveBtn = parent.querySelector(`#save${elemId}`);
        saveBtn.style.display = "flex";

    }

    render() {
        const { english, transcription, russian } = this.props;

        return (
            <div className="Word__item" id={english}>
                <div className="Word__wrap">
                    <div className="Word__input-wrap">
                        <input type="text" className="form__input"/>
                        <span>{english}</span>
                    </div>
                    <div className="Word__input-wrap">
                        <input type="text" className="form__input"/>
                        <span>{transcription}</span>
                    </div>
                    <div className="Word__input-wrap">
                        <input type="text" className="form__input"/>
                        <span>{russian}</span>
                    </div>
                </div>
                <div className="Word__edit">
                    <EditButton id={`save` + english} title={"Save"} svg={"save"} isShow />
                    <EditButton id={`edit` + english} title={"Edit"} svg={"edit"} onClick={() => this.editWord(this, english)}/>
                    <EditButton id={`delete` + english} title={"Delete"} svg={"delete"} />
                </div>
            </div>
        );
    }
}

export default Word;