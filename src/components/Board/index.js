import React, { useState } from 'react';
import produce from 'immer';

import List from '../List'
import BoardContext from './context';
import { Container } from './styles';
import { loadLists } from '../../services/api';

const data = loadLists();

function Board() {
  const [lists, setLists] = useState(data);

  const move = (fromList, toList, from, to) => {
     setLists(produce(lists, draft => {
       const dragged = draft[fromList].cards[from];

       draft[fromList].cards.splice(from, 1); // removendo o item que está se movendo da lista
       draft[toList].cards.splice(to, 0, dragged);

     }))
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
        <Container>
          {lists.map(( list, index ) => (
            <List key={list.title} index={ index } data={list}/>
          ))}
        </Container>
    </BoardContext.Provider>
  );
}

export default Board;