import React from 'react';
import Card from './Card';

function CardList({cards, onCardClick, onCardLike, onCardDelete}) {
//         {/*        onCardClick={onCardClick}*/}
//{/*        onCardLike={onCardLike}*/}
//{/*        onCardDelete={onCardDelete}*/}
    return (<>
        <ul className="places__list">
            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
              />
            ))}
          </ul>
    </>)
}

export default CardList


