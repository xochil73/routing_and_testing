'use strict';

import React from 'react';


export default class NoteCreateForm extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.notes) {
      this.state = this.props.notes
    } else {
      this.state = {
        title : '',
        content : ''
      }
    }
  }

  handleChange = event => {
    const {name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addNote(this.state);
  };

  render(){
    const buttonText = this.props.notes ? 'Update' : 'Create';
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="What's your Task?"
        />
        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
          placeholder="What are the details?"
        />
        <button type="submit">Create Task</button>
      </form>
    );
  }
}
