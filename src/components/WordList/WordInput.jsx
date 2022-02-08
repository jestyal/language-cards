import "./Word.scss";
import "../../assets/styles/forms.scss";

export default function WordInput({isEditMode, value, onChange, name, error }) {
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