import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import GMNotebookShow from './GMNotebookShow'

class CharacterNotebookCard extends Component {

render () {
  return (
    <div className="column">
      <div className="ui card">
        <div class="ui container">
          <br/>
      <i class="huge book icon"></i><br/><br/>
          <h4><Link to={'/games/'+this.props.gameName+'/characterNotebooks/'+this.props.characterNotebook.name}>{this.props.characterNotebook.name}</Link></h4>
          <br/>
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

export default connect(mapStateToProps, null)(CharacterNotebookCard)