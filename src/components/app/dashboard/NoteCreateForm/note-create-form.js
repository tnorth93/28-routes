import React from 'react';
import PropTypes from 'prop-types';


class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };
  }
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.handleAddNote(this.state)
    };

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='title' name='title' value={this.state.title} onChange={this.handleChange}/>
          <textarea placeholder='content' name='content' row='4' columns='4' value={this.state.content} onChange={this.handleChange}/>
          <button type='submit'>Create Note</button>
        </form>
      );
    }
}

NoteCreateForm.propTypes = {
  handleAddNote: PropTypes.func,
};

export default NoteCreateForm;