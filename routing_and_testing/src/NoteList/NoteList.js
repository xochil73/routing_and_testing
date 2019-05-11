'use strict'

import React from 'react';
import Modal from '../Modal/Modal';
import NoteCreateForm from '../NoteCreateForm/NoteCreateForm'

export default class NoteList extends React.Component {
  render() {
    const {handleUpdateNote} = this.props;
    const currentNote = this.props.notes;

    const showModal = () => handleUpdateNote({...currentNote, editing: true});
    const hideModal = () => handleUpdateNote({...currentNote, editing: false});

    const handleEditView = (updatedNote) => {
handleUpdateNote({...updatedNote, editing:false});
    };

    return (

        <li key={currentNote.id}>
              {currentNote.title} : {currentNote.content}
              <button onClick={this.props.removeNote.bind(null, currentNote.id)}>Delete Task</button>
              <button onClick={showModal}>Edit Task</button>
              <Modal show={currentNote.editing} hideModal={hideModal}>
                <NoteCreateForm notes={currentNote} handleComplete={handleEditView}/>
              </Modal>
            </li>
        );
  }
}
