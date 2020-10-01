import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import GMNotebookShow from './GMNotebookShow'

class CharacterNoteCard extends Component {

render () {
  return (
    <div className="column">
      <div class="ui card">
      <div class="ui container">
        <br/>
      <i class="huge file alternate icon"></i>
      <br/>
      <br/>
        <h6>
          <Link to={'/games/'+this.props.gameName+'/characterNotebooks/'+this.props.characterNotebookName+'/notes/'+this.props.characterNote.c_note_id.toString()}>{this.props.characterNote.c_note_title}</Link>
        </h6>
      </div>
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