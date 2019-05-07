'use strict'

import React from 'react';

export default class NoteList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.notes.map(currentNote => {
            return <li key={currentNote.id}>
              {currentNote.title} : {currentNote.content}
              <button onClick={this.props.removeNote.bind(this.currentNote.id)}>Delete Note</button>
            </li>
        })
        }
      </ul>
    );
  }
}