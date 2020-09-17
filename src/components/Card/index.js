import React, { useRef, useContext } from 'react';

import {useDrag, useDrop} from 'react-dnd';

import BoardContext from '../Board/context';

import { Container, Header, Label } from './styles';

const Card = (props) => {
 const { data, index, listIndex } = props;
 const ref = useRef();
 const { move } = useContext(BoardContext);

 const [{ isDragging }, dragRef] = useDrag({
      item: { type:'CARD', index, listIndex },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
  })

  const [, dropRef] = useDrop({
      accept: 'CARD',
      hover(item, monitor){
          const draggedListIndex = item.listIndex;
          const targetListIndex = listIndex;

          const draggedIndex = item.index; // item que sendo arrastado 
          const targetIndex = index; // item que encostando no item arrastado

          if (draggedIndex === targetIndex && draggedListIndex === targetListIndex){
            return; // não faça nada
          }

          const targetSize = ref.current.getBoundingClientRect();
          const targetCenter = (targetSize.bottom - targetSize.top) / 2; // pixel central vertical de cada card
          
          const draggedOffset = monitor.getClientOffset(); // o quanto do item foi arrastado, calculando a distancia do arrasto do item
          const draggedTop = draggedOffset.y - targetSize.top // distancia do item percorendo menos a distancia do item que está encostando no item percorrido do topo da tela

          //console.log(draggedTop, targetCenter);

          if (draggedIndex < targetIndex && draggedTop < targetCenter){
             return;
          }

          if(draggedIndex > targetIndex && draggedTop > targetCenter){
            return;
          }

          move( draggedListIndex, targetListIndex, draggedIndex, targetIndex );

          item.index = targetIndex;
          item.listIndex = targetListIndex;
      }
  })
  
  dragRef(dropRef(ref));

  return (
      <Container ref={ref} isDragging={isDragging}>
          <Header>
              <Label color={data.labels} />
          </Header>
                <p>{data.content}</p>
          { data.user && <img src={data.user} alt="avatar"/>}
      </Container>
  );
}

export default Card;