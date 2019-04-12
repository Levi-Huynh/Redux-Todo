import TodoList from "./TodoList";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE = "TOGGLE";
export const CLEAR_TASK = "CLEAR_TASK";

//params of the functions below are the payloads
//reducers do the actual logic

export function addTodo1 (newTodo) {
 return{
     type: ADD_TODO,
     payload: newTodo
 }

}

// export function addTodo1 (text) {
//     let newTodo = {
//         value: text,
//         completed: false,
//         id: Date.now()

//     };

//     return {type: ADD_TODO, payload: newTodo};

// }

export function ToggleComplete (index) {
 return{
     type: TOGGLE,
     payload: index
 };

}

export function ClearTask (task) {
let completed = !task.completed;
    
    return {
        type: CLEAR_TASK,
        payload: completed

    }


}