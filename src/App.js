import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <div className="App">
        <Header />
        <CardList />
        <Footer />
    </div>
  );
}

export default App;
