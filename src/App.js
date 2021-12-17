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
            <CardList />
            <WordList />
        </div>
        <Footer />
    </div>
  );
}

export default App;
