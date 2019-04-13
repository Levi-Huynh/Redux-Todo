import {ADD_TODO} from "./actions";
import {TOGGLE} from './actions';
import {CLEAR_TASK} from './actions';

let defaultState= {
    todos: [{value: "grow garden", 
    completed: false, id: Date.now()},
    {value: "fix bike", completed: false, id: Date.now()}]
   
};

export default function reducer (state= defaultState, action) {
switch (action.type) {
    case ADD_TODO:
   
    let newTodo= {value: action.payload, completed: false, id: Date.now()};
    return {...state, todos: newTodo, inputValue:""};


    case TOGGLE:
    return {...state,
        todos: state.todos.map((todo, index) => 
        action.payload === index
        ? {...todo, completed: !todo.completed}
        :todo )};
        

    case CLEAR_TASK:
    return {...state,
        todos:[...state.todos.filter(task => action.payload)]
    };
default: return state;
}

};