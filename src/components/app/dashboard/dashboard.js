import React from 'react';
import ExpenseForm from "../expense-form/expense-form";
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

  render() {
    return (
      <section>
        <h2>Dashboard</h2>
        <p>Add a new Note</p>
        <CreateNoteForm handleAddNote={this.handleAddNote}/>

      </section>
    );
  }
}

export default Dashboard;