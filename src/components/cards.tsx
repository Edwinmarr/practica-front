import { type FC } from 'react';

interface Card {
  title: string;
  price: number;
  description: string;
  image: string;
}

interface Props {
  cards: Card[];
}

const Cards: FC<Props> = ({cards}) => {

  return (
  <div>

    {cards.map(card => 
    <div>
      <h2>{card.title}</h2>
      <img src={card.image} alt='No hay imagen'/>
      <p>{card.description}</p>
      <p>{card.price}</p>
    </div>)}

  </div>)
}


export default Cards;
