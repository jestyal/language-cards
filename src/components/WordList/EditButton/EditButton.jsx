import { Component } from "react";
import "./EditButton.scss";
import { ReactComponent as DeleteIcon } from './icons/delete-icon.svg';
import { ReactComponent as EditIcon } from './icons/edit-icon.svg';
import { ReactComponent as SaveIcon } from './icons/save-icon.svg';

// const ICONS = {
//     delete: <DeleteIcon />,
//     edit: <EditIcon />,
//     save: <SaveIcon />,
// }
class EditButton extends Component {
    render() {
        const {title, svg, onClick} = this.props

        let buttonDesc;
        if(svg === "delete") {
            buttonDesc = <DeleteIcon />
        } else if (svg === "edit") {
            buttonDesc = <EditIcon />
        } else if (svg === "save") {
            buttonDesc = <SaveIcon />
        } else {
            buttonDesc = ""
        }
        return (
            <button type="submit" className="Btn Btn_edit" onClick={onClick}>
                {title}
                {buttonDesc}
            </button>
        );
    }
}

export default EditButton;