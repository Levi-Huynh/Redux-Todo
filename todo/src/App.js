import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { connect } from "react-redux";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  handleToggle= (event, todo) => {
    event.preventDefault();
    this.props.ToggleComplete(todo);

}

handleClearTask = (event, todo) => {
    event.preventDefault();
    this.props.ClearTask(todo);
}

  
  addTodo1 = text => {
    let newTodo = {
      value: text,
      completed: false
    };
    this.setState(prev => {
      return { todos: [...prev.todos, newTodo] };
    });
  };

  render() {
    return (
      <div className="App">
      <h1>Redux Todo List</h1>
      <TodoInput />
      <TodoList/>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});


export default connect (mapStateToProps)(App);