import "./404.scss";
import {Link} from "react-router-dom";

function PageNotFound() {
    return (
        <main className="wrapper wrapper_error-page">
            <div className="">
                <h1 className="title title_error-page">404</h1>
                <h2 className="title title_max">Page not found</h2>
                <div className="mb_40">
                    <img src="https://i.gifer.com/3z9a.gif" alt="404"/>
                </div>
                <p className="title title_max">Please, return to <Link to="/language-cards">home page</Link></p>
            </div>
        </main>
    );
}

export default PageNotFound;