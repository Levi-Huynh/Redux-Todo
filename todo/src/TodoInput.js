import React, { Component } from 'react';
import { connect } from "react-redux";

import { addTodo1 } from "./actions";

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state ={
            inputValue: ""
        };
    }

changeInputValue = e => {
this.setState({ inputValue: e.target.value});

}

createNewTodo = e => {
    e.preventDefault();

    this.props.addTodo(this.state.inputValue);
    this.setState({inputValue :""});
   
};




render() {

return (
    <form>
    <input
        type="text"
        value={this.state.inputValue}
        onChange={this.changeInputValue}
    />
    <button onClick={this.createNewTodo}>Add Todo</button>
   
    </form>
);
}
}

function mapStateToProps (state) {
    return {};
}

export default connect(
    mapStateToProps,
    {addTodo: addTodo1 } 
)(TodoInput);

