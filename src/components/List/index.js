import React from 'react';
import { MdAdd } from 'react-icons/md'

import Card from '../Card'

import { Container, Header, Ul } from './styles';

const List = (props) => {
  const { data, index: listIndex } = props;
  return (
      <Container done={data.done}>
          <Header>
             <h2>{data.title}</h2>
             {data.creatable && (
               <button type="button">
                  <MdAdd size={24} color="#FFF" />
               </button>
             )}
          </Header>
          <Ul>
              {data.cards.map( ( card, index ) => (
                <Card 
                  key={card.id}
                  listIndex={listIndex} 
                  data={card}
                  index={index}
                />
              ))}
          </Ul> 
      </Container>
  );
}

export default List;