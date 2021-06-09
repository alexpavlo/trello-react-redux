import React, {Component} from 'react';
import TrelloList from "./trelloList";
import {connect, useDispatch} from "react-redux";
import TrelloActionButton from "./trelloActionButton";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import { sort } from "../action";
import styled from "styled-components"


const App = ({lists, onDragEnd, dispatch}) => {
    onDragEnd = (result) => {
        const {destination, source, draggableId} = result;

        if(!destination) {
            return null;
        }

       dispatch(
            sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId
        ))

}

    return (

        <DragDropContext onDragEnd={onDragEnd}>
      <div className='App'>
        <h2>Hello</h2>
          <Droppable droppableId='all-list' direction='horizontal' type='list'>{provided=>(
              <div style={styles.listsContainer} {...provided.droppableProps} ref={provided.innerRef}>
                  {lists.map((list, index) => <TrelloList listId={list.id} key={list.id} title={list.title} cards={list.cards} index={index}/>
                  )}
                  {provided.placeholder}
                  <TrelloActionButton list/>
              </div>
          )}
          </Droppable>

      </div>
        </DragDropContext>
  );
};

const styles ={
    listsContainer: {
        display: 'flex',
        flexDirection: 'row'

    }
}

const mapStateToProps = state => ({
    lists: state.lists,
    cards: state.cards,
    boards: state.boards
})

export default connect(mapStateToProps) (App) ;
