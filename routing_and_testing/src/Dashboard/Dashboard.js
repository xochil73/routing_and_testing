'use strict';

import React from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../NoteCreateForm/NoteCreateForm';
import NoteList from '../NoteList/NoteList';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.notes = [];
  }

  addNote = note => {
    this.setState((previousState) => {
      return {
        notes: [...previousState.notes, {...note, id: uuid()}],
      }
    })

  };

  removeNote = id => {
    this.setState(previousState => {
      return {
        notes: previousState.notes.filter(note => note.id !== id) //xochil - stackOverflow
      }
    });
  };

  handleUpdateNote = (notes) => {
    this.setState((previousState) => {
      const updateNote = previousState.notes.map(currentNote =>
        notes.id === currentNote.id ? notes : currentNote);
      return {notes: updateNote};
    })
  };

  renderNotes = () => {
    return (
      <ul>
        {
          this.state.notes.map(currentNote => {
            return <NoteList notes={currentNote}
                             removeNote={this.removeNote}
                             handleUpdateNote={this.handleUpdateNote}
            />
          })
        }
      </ul>
    );
  };

  render() {
    return (<div>
      <h2>Task Dashboard</h2>
      <NoteCreateForm addNote={this.addNote}/>
      {this.renderNotes()}
    </div>);
  }
}