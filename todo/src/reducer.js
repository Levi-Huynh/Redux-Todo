import {ADD_TODO} from "./actions";

let defaultState= {
    todos: [],
   
};

export default function reducer (state= defaultState, action) {
switch (action.type) {
    case ADD_TODO:
    let newTodo= [...state.todos, action.payload];
    return {...state, todos: newTodo, inputValue:""}
    default: return state;
}

}