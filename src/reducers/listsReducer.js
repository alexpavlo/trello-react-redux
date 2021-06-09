import {CONSTANS} from "../action";

let listId = 2;
let cardId = 6;

const initialState =[
    {
        title: 'Last Episode',
        id: `list-${0}`,
        cards:[
            {
                id: `card-${0}`,
                text: 'we created a static list and a static card'
            },
            {
                id: `card-${1}`,
                text: 'we used a mix between Material UI React and styled components'
            }
        ]
    },
    {
        title: 'This Episode',
        id: `list-${1}`,
        cards:[
            {
                id: `card-${2}`,
                text: 'we will create our first reducer'
            },
            {
                id: `card-${3}`,
                text: 'and render many cards on our list with static data'
            },
            {
                id: `card-${4}`,
                text: 'we will also make some little changes i forgot in the last episode (link tags for roboto font and icons)'
            },
            {
                id: `card-${5}`,
                text: 'we will also make some little changes i forgot in the last episode (link tags for roboto font and icons)'
            }
        ]
    }
]



const listsReducer = (state = initialState, action) =>{
        switch (action.type) {
            case CONSTANS.ADD_LIST:
                const newList = {
                title: action.payload,
                    cards: [],
                        id: `list-${listId}`
            };
            listId +=1;
                return [...state,newList];

            case CONSTANS.ADD_CARD:{
                const newCard = {
                    text: action.payload.text,
                    id: `card-${cardId}`
                }
                cardId += 1;

                const newState = state.map(list => {
                    if (list.id === action.payload.listId){
                        return {
                            ...list, cards: [...list.cards, newCard]
                        }
                    } else {
                        return list
                    }
                });
                return newState;
            }
            case CONSTANS.DRAG_HAPPENED:
                const {droppableIdStart,
                    droppableIdEnd,
                    droppableIndexStart,
                    droppableIndexEnd,
                    draggableId,
                } = action.payload;

                const newState = [...state];

                //dragging list around

                // if (type === "list") {
                //     const list = newState.splice(droppableIndexStart, 1);
                //     newState.splice(droppableIndexEnd, 0, ...list);
                //     return newState
                // }

                //in the same list
                if(droppableIdStart === droppableIdEnd ){
                    const list = state.find(list=>droppableIdStart === list.id)
                    const card = list.cards.splice(droppableIndexStart, 1)
                    list.cards.splice(droppableIndexEnd, 0, ...card)

                }
                //other list

                if (droppableIdStart !== droppableIdEnd) {
                    //find the list where the drage happened
                    const listStart = state.find(list => droppableIdStart === list.id)
                    //pull out the card in the list
                    const card = listStart.cards.splice(droppableIndexStart, 1 )
                    //find the list where drag ended
                    const listEnd = state.find(list => droppableIdEnd === list.id)
                    //put the card in the other list
                    listEnd.cards.splice(droppableIndexEnd, 0, ...card)
                }


                return newState;
            default: return state
}
}

export default listsReducer;