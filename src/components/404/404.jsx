import "./404.scss";
import {Link} from "react-router-dom";

function PageNotFound() {
    return (
        <section className="wrapper wrapper_full text_center">
            <h1 className="title title_max mt_40 mb_40">404</h1>
            <h2 className="title title_max">Page not found</h2>
            <p>Return to <Link to="/">home</Link></p>
        </section>
    );
}

export default PageNotFound;