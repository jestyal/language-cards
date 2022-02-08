import {createContext, useEffect, useState} from "react";

export const WordsContext = createContext([]);

export default function WordsContextComponent(props) {

    //Создайте общий контекст приложения, в котором будет храниться коллекция всех слов
    const [WORDS, setWords] = useState([]);

    //Изначально индикатор закрузки выключен
    const [isLoading, setIsLoading] = useState(false);

    //отлов ошибок
    const [isError, setIsError] = useState(null)

    function getWordsFromBase() {
        fetch('/api/words')
            .then(response => {
                if (response.ok) { //Проверяем что код ответа 200
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                setWords(response);
                setIsLoading(false);
            })
            .catch(error => {
                setIsError(error)
                setIsLoading(false);
            });
    }


    // Создайте метод для получения списка слов из базы, он должен вызываться в функции componentDidMount. Не забудьте о проверке ошибок и индикаторе загрузки.
    useEffect(() => {
        setIsLoading(true);
        getWordsFromBase();
    }, []);



    // Создайте методы для изменения, удаления и добавления слов. При сохранении изменений слова в таблице, отправьте изменения на сервер и обновите таблицу.

    const [isAddWord, setIsAddWord] = useState(false);
    const [newAddWord, setNewWord] = useState({
        english: "english",
        transcription: "transcription",
        russian: "russian",
    })

    const addWord = () => {
        console.log("Added!!!!!!!!!!!!!!");
        setIsAddWord(!isAddWord);
    };

    const changeWord = (event) => {
        setNewWord({
            ...newAddWord,
            [event.target.name]: event.target.value
        })
    };

    const deleteWord = () => {

    };




    if (isError) {
        return (
            <div>{isError.message}</div>
        );
    }
    if (isLoading) {
        return (
            <div>Loading ...</div>
        );
    }

    return (
        <WordsContext.Provider value={{WORDS, addWord, isAddWord, changeWord, newAddWord}}>
            {props.children}
        </WordsContext.Provider>
    )
}