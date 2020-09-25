import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import GMNotebookShow from './GMNotebookShow'

class GMNotebookCard extends Component {

render () {
  return (
    <div className="ui item">
      <div>
          <Link to={'/gameMasterNotebooks/'+this.props.gmNotebook.id}>{this.props.gmNotebook.name}</Link>
      </div>
    </div>
  );
};}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(GMNotebookCard)