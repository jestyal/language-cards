import { Component } from "react";
import "./EditButton.scss";
import { ReactComponent as DeleteIcon } from './icons/delete-icon.svg';
import { ReactComponent as EditIcon } from './icons/edit-icon.svg';
import { ReactComponent as SaveIcon } from './icons/save-icon.svg';
import { ReactComponent as CancelIcon } from './icons/cancel-icon.svg';

class EditButton extends Component {
    render() {
        const {id, title, svg, onClick, isHidden, isDisabled} = this.props

        let buttonDesc;
        if(svg === "delete") {
            buttonDesc = <DeleteIcon />
        } else if (svg === "edit") {
            buttonDesc = <EditIcon />
        } else if (svg === "save") {
            buttonDesc = <SaveIcon />
        } else if (svg === "cancel") {
            buttonDesc = <CancelIcon />
        } else {
            buttonDesc = ""
        }
        return (
            <button id={id} type="submit" className={'btn btn_edit' + (isDisabled ? ' btn_disabled' : '')} onClick={onClick} style={isHidden && {"display": "none"}}>
                {title}
                {buttonDesc}
            </button>
        );
    }
}


export default EditButton;