import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import GMNotebookShow from './GMNotebookShow'

class CharacterNoteCard extends Component {

render () {
  return (
    <div className="ui item">
      <div>
          <Link to={'/'+this.props.characterNotebookName+'/notes/'+this.props.gmNote.id.toString()}>{this.props.characterNote.title}</Link>
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