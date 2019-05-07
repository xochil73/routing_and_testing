'use strict';

import React from 'react';


export default class NoteCreateForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {};

    this.state.title = '' ;
    this.state.content = '';

  };

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
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="What's the Task?"
        />
        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
          placeholder="Add some content!"
        />
        <button type="submit">Create Note</button>
      </form>
    );
  }
}
