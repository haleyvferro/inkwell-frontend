import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import GameShow from './GameShow'
import {deleteGamePlayer} from '../../actions/Auth'
import {changeInvitePending} from '../../actions/Auth'


class InviteShow extends Component {

  state = {
    game: "",
    invite: "",
    invitePending: "",
    inviteId: "",
  }

  componentDidMount() {
        const path = this.props.location.pathname.split("/");
        const gameName = path[2]
        const inviteId = path[-1]
        console.log(path, gameName)
        fetch(`http://localhost:4000/games/`)
        .then(resp => resp.json())
        .then(data => {
        const game = data.find(game => game.game_name === gameName)
            this.setState({ 
            game: game,
            inviteId: inviteId,
            })
        })
    }

    changeInvitePending = (e) => {
      e.preventDefault()
      const reqObj = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({game_player: 
          {id: this.state.inviteId,
          game_id: this.state.game.id,
          user_id: this.props.auth.id,
          invite_pending: false
        }}),
      };
      fetch(
        `http://localhost:4000/game_players/${this.state.inviteId}`,
        reqObj
      )
      .then(resp => resp.json())
      .then(data => {
          this.props.changeInvitePending(this.state.inviteId, data)
          this.props.history.push('/games/'+this.state.game.game_name)
      })
    }

    deleteGamePlayer(){
        const inviteId = this.state.inviteId
        const reqObj = {
            method: 'DELETE'
        }
        fetch(`http://localhost:4000/game_players/${inviteId}`, reqObj)
        this.props.deleteGamePlayer(inviteId)
        this.props.history.push('/dashboard')
    }

    render () {
        if (this.state.game){
        return (
            <div>
                <h1>{this.state.game.game_name}</h1>
                <p>{this.state.game.game_description}</p>
                <button onClick={this.changeInvitePending}>Accept</button> <button onClick={this.deleteGamePlayer}>Decline</button>
            </div>
        )} else { return null }
    }
    
}

const mapStateToProps= (state) => {
    return {
      auth: state.auth,
    }
  }

  const mapDispatchToProps = {
    deleteGamePlayer,
    changeInvitePending
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(InviteShow)