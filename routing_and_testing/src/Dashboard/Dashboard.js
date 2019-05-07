'use strict';

import React from 'react';
import uuid from 'uuid';

import NoteCreateForm from '../NoteCreateForm/NoteCreateForm';
import NoteList from '../NoteList/NoteList';

export default class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {};

    this.state.notes = [];
  }

  addNote = note => {
    note.id = uuid();

    this.setState((previousState) =>{
      return {
        notes: [ ...previousState.notes, note],
      }
    })

  };

  removeNote = id => {
    this.setState(previousState => {
      return {
        notes: previousState.notes.filter(note => note.id !==id)
}
});
}


  render() {
    return (<div>
      <h2>Note Dashboard</h2>
      <NoteCreateForm addNote={this.addNote}/>
      <NoteList notes={this.state.notes} removeNote={this.removeNote.bind(this)}/>
    </div>);
  }
}