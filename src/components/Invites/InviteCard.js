import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import GMNotebookShow from './GMNotebookShow'

class InviteCard extends Component {

render () {
  return (
    <div className="ui item">
      <div>
          {this.props.invite.id}
      </div>
    </div>
  );
};}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(InviteCard)