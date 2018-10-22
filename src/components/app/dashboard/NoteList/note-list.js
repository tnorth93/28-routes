import React from 'react';
import NoteItem from '../NoteItem/note-item';
import PropTypes from 'prop-types';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {
          this.props.notes.map((currentNote) => {
            return <NoteItem
              key = {currentNote.id}
              currentNote = {currentNote}
              handleDeleteNote = {this.props.handleDeleteNote}
              handleUpdateNote = {this.props.handleUpdateNote}
            />
          })
        }
      </ul>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array,
  handleDeleteNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};

export default NoteList;
