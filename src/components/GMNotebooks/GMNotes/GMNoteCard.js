import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import GMNotebookShow from './GMNotebookShow'

class GMNoteCard extends Component {

render () {
  return (
    <div className="ui item">
      <div>
          <Link to={'/'+this.props.gmNotebookName+'/notes/'+this.props.gmNote.id.toString()}>{this.props.gmNote.title}</Link>
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