import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import GMNotebookShow from './GMNotebookShow'

class CharacterNoteCard extends Component {

render () {
  return (
    <div className="column">
      <div class="ui card" style={{height:"130px", width: "125px"}}>
      <div class="ui container">
        <br/>
      <center><i class="huge file alternate icon"></i></center>
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