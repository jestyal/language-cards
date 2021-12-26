import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CardList from "./components/CardList/CardList";
import WordList from "./components/WordList/WordList";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="wrapper">
            <h1 className="title title_max title_center mt_40 mb_40">Learning English by Flashcards</h1>
            <CardList />
            <WordList />
        </div>
        <Footer />
    </div>
  );
}

export default App;
