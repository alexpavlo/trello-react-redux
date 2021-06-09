import {CONSTANS} from "../action";

export const addList = (title) =>{
    return {
        type: CONSTANS.ADD_LIST,
        payload: title
    }
}

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
    ) => {
    return {
        type: CONSTANS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    }}