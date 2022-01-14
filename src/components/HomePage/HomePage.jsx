import WordList from "../WordList/WordList";

export default function HomePage() {
    return (
        <main className="wrapper">
            <h1 className="title title_max title_center mt_40 mb_40">Learning English by Flashcards</h1>
            <WordList />
        </main>
    );
}
