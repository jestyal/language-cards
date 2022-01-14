import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CardList from "./components/CardList/CardList";
import PageNotFound from "./components/404/404";
import HomePage from "./components/HomePage/HomePage";


function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>

                <nav className="nav__wrap">
                    <Link to="/game" className="nav__link">
                        Cards
                    </Link>
                    <Link to="/" className="nav__link">
                        Home
                    </Link>
                </nav>

                <Routes>
                    <Route exact path="/game" element={<CardList/>}/>
                    <Route index path="/" element={<HomePage/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
