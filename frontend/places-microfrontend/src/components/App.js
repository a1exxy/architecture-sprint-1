import React from "react";
import api from "../utils/api";
import CardList from './CardList';

function App() {
    const [cards, setCards] = React.useState([]);
    // В корневом компоненте App создана стейт-переменная currentUser. Она используется в качестве значения для провайдера контекста.
    const [currentUser, setCurrentUser] = React.useState({});
    // Запрос к API за информацией о пользователе и массиве карточек выполняется единожды, при монтировании.
    React.useEffect(() => {
      api
        .getAppInfo()
        .then(([cardData, userData]) => {
          setCurrentUser(userData);
          setCards(cardData);
        })
        .catch((err) => console.log(err));
    }, []);
    return (<>
        <CardList cards={cards} />
    </>)
}

export default App;