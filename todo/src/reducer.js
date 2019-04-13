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
    return {...state,  todos: [...state.todos, newTodo]};


    case TOGGLE:
    return {...state,
        todos: state.todos.map((todo, index) => 
        action.payload === index
        ? {...todo, completed: !todo.completed}
        :todo )};
        

    case CLEAR_TASK:
    let task = action.payload
    return {...state,
        todos:[...state.todos.filter(task => !task.completed )]
    };
default: return state;
}

}