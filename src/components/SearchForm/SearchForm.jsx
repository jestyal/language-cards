import "../../assets/styles/forms.scss";
import "./SearchForm.scss";
import { ReactComponent as SearchIcon } from './search-icon.svg';

export default function SearchForm() {
    return (
        <form className="Form SearchForm">
            <input id="search-input" type="text" className="form__input" placeholder="Search" />
            <div className="SearchForm__btn-wrap">
                <input type="submit" className="form__btn btn" value="" />
                <SearchIcon />
            </div>
        </form>
    );
}
