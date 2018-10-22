import React from 'react';
import PropTypes from 'prop-types';
import NoteCreateForm from '../NoteCreateForm/note-create-form';

class NoteItem extends React.Component {
  render() {
    return (
      <li>
        <h2>{this.props.currentNote.title}</h2>
        <p>{this.props.currentNote.content}</p>
        <button onClick={this.props.handleDeleteNote.bind(null, this.props.currentNote)}> Delete </button>
        <NoteCreateForm note={this.props.currentNote} handleUpdateNote = {this.props.handleUpdateNote}/>
      </li>
    );
  }
}

NoteItem.propTypes = {
  currentNote: PropTypes.object,
  handleDeleteNote: PropTypes.func,
  handleAddNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};

export default NoteItem;