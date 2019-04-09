import React from "react";
import { connect } from "react-redux";

function TodoList(props) {

return(
<div>
<ul>

{props.todos.map((todo, index) =>{
    return <li key={index}>{todo.value}</li>;
}
)}

</ul>

</div>

);

}

function mapStateToProps(state) {

return {
    todos: state.todos


};

}

export default connect(mapStateToProps)(TodoList);