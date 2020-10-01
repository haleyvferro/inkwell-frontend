import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import GMNotebookShow from './GMNotebookShow'

class GMNoteCard extends Component {

render () {
  return (
    <div className="column">
    <div className="ui card">
    <div className="ui container">
      <br/>
      <i class="huge file alternate icon"></i>
      <br/>
      <br/>
      <h6>
          <Link to={'/games/'+this.props.gameName+'/gameMasterNotebook/'+this.props.gmNotebookName+'/notes/'+this.props.gmNote.id.toString()}>{this.props.gmNote.title}</Link>
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

export default connect(mapStateToProps, null)(GMNoteCard)