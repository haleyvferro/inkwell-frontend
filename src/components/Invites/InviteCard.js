import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import GMNotebookShow from './GMNotebookShow'

class InviteCard extends Component {

render () {
  const invite = this.props.invite
  const inviteGame = this.props.auth.games.find(game => game.id === invite.game_id)
  console.log(inviteGame)
  return (
    <div className="ui container">
      <div>
  You have been invited to play in {inviteGame.game_name}, <Link to={`games/${inviteGame.game_name}/invite/${invite.id}`}>click to See Game Description</Link>
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