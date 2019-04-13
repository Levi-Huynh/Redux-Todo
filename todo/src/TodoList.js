import React, {Component} from "react";
import { connect } from "react-redux";
import {ToggleComplete, ClearTask} from './actions';


import './App.css'
class TodoList extends Component {

    handleToggle= (event, todo) => {
        event.preventDefault();
        this.props.ToggleComplete(todo);
    
    }
    
    handleClearTask = (event, index) => {
        event.preventDefault();
        this.props.ClearTask(index);
    }

    render()
{    return(
    <div>

    
    {this.props.todos.map((todo, index) =>{
        return <h3 onClick={event => this.handleToggle(event, index)} key={index} className={todo.completed? "completed": null}>{todo.value}</h3>
               
    }
    )}
    

    
    <button onClick={(event, todo) => this.handleClearTask(event, todo)}>Delete</button>

    </div>
    
    );
    
    }
    
}


//   <button onClick={(event, todo) => this.handleClearTask(event, todo)}>Delete</button>




const mapStateToProps = state => ({
    todos: state.todos
});


export default connect(mapStateToProps, {ToggleComplete, ClearTask})(TodoList);