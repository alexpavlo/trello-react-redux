import {CONSTANS} from "../action";

export const addCard = (listId, text) =>{
    return {
        type: CONSTANS.ADD_CARD,
        payload: {text, listId}
    }
}