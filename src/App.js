import { HashRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CardList from "./components/CardList/CardList";
import PageNotFound from "./components/404/404";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";


function App() {
    return (
        <HashRouter>
            <div className="app">
                <Header/>
                <Routes>
                    <Route exact path="/game" element={<CardList/>}/>
                    <Route exact path="/contacts" element={<ContactPage/>}/>
                    <Route index path="/" element={<HomePage/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;
