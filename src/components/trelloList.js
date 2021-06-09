import React from 'react';
import TrelloCard from "./trelloCard";
import TrelloActionButton from "./trelloActionButton";
import {Droppable, Draggable} from "react-beautiful-dnd";

const TrelloList = ({title, cards, listId, index}) => {
    return (
        <Droppable droppableId={String( listId)}>
            {provided=>(
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
                    <h4>{title}</h4>
                    {cards.map((card, index)=> <TrelloCard key={card.id} index={index} text={card.text} id={card.id} />)}
                    <TrelloActionButton listId={listId}/>
                    {provided.placeholder}
                </div>
            )}

        </Droppable>
    );
};

const styles={
    container:{
        backgroundColor: '#dfe3e6',
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: '100%',
        marginRight: 8,
    }
}

export default TrelloList;