import React from 'react';
import NoteCreateForm from './NoteCreateForm/note-create-form';
import NoteList from './NoteList/note-list';
import uuid from 'uuid/v4';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.notes = [];
  }

  handleAddNote = (note) => {
    note.id = uuid();
    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
      }
    });
  };

  handleDeleteNote = (note) => {
    this.setState((previousState) => ({
      notes: previousState.notes.filter(currentNote => currentNote.id !== note.id)
    }));
  };

  handleUpdateNote = (note) => {
    return this.setState((previousState => {
      return { notes: previousState.notes.map((currentNote) => {
        if (currentNote.id === note.id) {
          currentNote = note;
        }
        return currentNote;
        })}
    }))
  };

  render() {
    return (
      <section>
        <h2>Dashboard</h2>
        <p>Add a new Note</p>
        <NoteCreateForm handleAddNote={this.handleAddNote}
        />
        <NoteList notes={this.state.notes}
        handleDeleteNote = {this.handleDeleteNote}
        handleUpdateNote = {this.handleUpdateNote}
        />
      </section>
    );
  }
}

export default Dashboard;
