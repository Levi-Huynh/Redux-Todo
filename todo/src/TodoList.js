import React from "react";
import { connect } from "react-redux";
import {ToggleComplete, ClearTask} from './actions';


import './App.css'
class  TodoList extends React.Component {

handleToggle= (event, todo) => {
    event.preventDefault();
    this.props.ToggleComplete(todo);

}

handleClearTask = (event, todo) => {
    event.preventDefault();
    this.props.ClearTask(todo);
}

 render() {
return(
<div>




{this.props.todos.map((todo, index) =>{
    return <h4
    onClick={(event) =>this.handleToggle(event, todo)} 
    key={index} >{todo.value}</h4>;
    
}
)}



  <button onClick={(event, todo) => this.handleClearTask(event, todo)}>Delete</button>


</div>

);

}
}   

const mapStateToProps = state => ({
    todos: state.todos
});


export default connect(mapStateToProps, {ToggleComplete, ClearTask})(TodoList);