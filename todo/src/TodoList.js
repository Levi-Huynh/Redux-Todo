import React, {Component} from "react";
import { connect } from "react-redux";
import {ToggleComplete, ClearTask} from './actions';


import './App.css'
function TodoList(props) {

    return(
    <div>

    
    {props.todos.map((todo, index) =>{
        return <h3 key={index}>{todo.value}</h3>;
    }
    )}
    

    
    <button onClick={(event, todo) => this.handleClearTask(event, todo)}>Delete</button>

    </div>
    
    );
    
    }
    



//   <button onClick={(event, todo) => this.handleClearTask(event, todo)}>Delete</button>




const mapStateToProps = state => ({
    todos: state.todos
});


export default connect(mapStateToProps, {ToggleComplete, ClearTask})(TodoList);