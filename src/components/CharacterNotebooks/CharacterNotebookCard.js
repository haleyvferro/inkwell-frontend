import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import GMNotebookShow from './GMNotebookShow'

class CharacterNotebookCard extends Component {

render () {
  return (
    <div className="ui item">
      <div>
          <Link to={'/characterNotebooks/'+this.props.characterNotebook.id}>{this.props.characterNotebook.name}</Link>
      </div>
    </div>
  );
};}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(CharacterNotebookCard)