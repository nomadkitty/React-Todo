import React from "react";
import Todo from "./Todo";

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      task: ''
    }
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
  };

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input 
          type="text"
          value={this.task}
          name="task"
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    )
  }
}

export default TodoForm;