import {createContext, useEffect, useState} from "react";
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";

export const WordsContext = createContext([]);

export default function WordsContextComponent(props) {

    //Создайте общий контекст приложения, в котором будет храниться коллекция всех слов
    const [WORDS, setWords] = useState([]);

    //Изначально индикатор закрузки выключен
    const [isLoading, setIsLoading] = useState(false);

    //отлов ошибок
    const [isError, setIsError] = useState(null)

    function getWordsFromBase() {
        fetch('http://itgirlschool.justmakeit.ru/api/words')
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
    const addWord = () => {
        setWords([
            {
                english: "",
                transcription: "",
                russian: "",
            },
            ...WORDS,
        ]);
    };

    const deleteWord = (id, index) => {
        const newWords = [...WORDS];
        newWords.splice(index, 1);

        if (id) {
            setIsLoading(true);
            fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {method: 'POST'})
                .then(response => {
                    setIsLoading(false);
                    if (response.ok) {
                        setWords(newWords);
                    } else {
                        throw new Error('Something went wrong ...');
                    }
                })
                .catch(error => {
                    setIsError(error)
                    setIsLoading(false);
                })
        } else {
            setWords(newWords);
        }
    };


    const saveWord = (index, word) => {
        setIsLoading(true);
        const url = word.id ? `http://itgirlschool.justmakeit.ru/api/words/${word.id}/update` : `/api/words/add`;

        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(word),
        }).then(response => {
            setIsLoading(false);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        }).then(response => {
            const newArr = [...WORDS];
            newArr[index] = response;
            setWords(newArr);
        }).catch(error => {
            setIsError(error)
            setIsLoading(false);
        });

    };

    if (isError) {
        return (
            <div>{isError.message}</div>
        );
    }
    if (isLoading) {
        return (
            <LoadingIndicator/>
        );
    }

    return (
        <WordsContext.Provider
            value={{WORDS, addWord, deleteWord, saveWord}}>
            {props.children}
        </WordsContext.Provider>
    )
}