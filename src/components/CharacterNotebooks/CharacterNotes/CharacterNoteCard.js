import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import GMNotebookShow from './GMNotebookShow'

class CharacterNoteCard extends Component {

render () {
  return (
    <div className="ui item">
      <div>
          <Link to={'/characterNotebooks/'+this.props.characterNotebookName+'/notes/'+this.props.characterNote.c_note_id.toString()}>{this.props.characterNote.c_note_title}</Link>
      </div>
    </div>
  );
};}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(CharacterNoteCard)