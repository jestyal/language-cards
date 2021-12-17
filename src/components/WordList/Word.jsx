import { Component } from "react";
import "./Word.scss";
import EditButton from "./EditButton/EditButton";

class Word extends Component {
    editWord() {
        console.log(1111111);
    }

    render() {
        const { english, transcription, russian } = this.props;

        return (
            <div className="Word__item">
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
                    {/*<EditButton title={"Save"} svg={"save"}/>*/}
                    <EditButton title={"Edit"} svg={"edit"} onClick={this.editWord}/>
                    <EditButton title={"Delete"} svg={"delete"} />
                </div>
            </div>
        );
    }
}

export default Word;