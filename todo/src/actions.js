export const ADD_TODO = "ADD_TODO";

export function addTodo1 (text) {
    let newTodo = {
        value: text,
        completed: false

    };

    return {type: ADD_TODO, payload: newTodo};

}