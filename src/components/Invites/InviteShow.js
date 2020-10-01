import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import GameShow from './GameShow'
import {deleteGamePlayer} from '../../actions/Auth'
import {changeInvitePending} from '../../actions/Auth'


class InviteShow extends Component {

  constructor (){
    super()
    this.state = {
      game: "",
      inviteId: null,
  }}
  
      deleteGamePlayer(){
            const inviteId = this.state.inviteId
            const reqObj = {
                method: 'DELETE'
            }
            fetch(`http://localhost:4000/game_players/${inviteId}`, reqObj)
            this.props.deleteGamePlayer(inviteId)
            this.props.history.push('/dashboard')
      }

  componentDidMount() {
        const path = this.props.location.pathname.split("/");
        const gameName = path[2]
        const inviteId = parseInt(path[4])
        this.setState({
          inviteId: inviteId,
        })
        fetch(`http://localhost:4000/games/`)
        .then(resp => resp.json())
        .then(data => {
        const game = data.find(game => game.game_name === gameName)
            this.setState({ 
            game: game,
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

    render () {
        if (this.state.inviteId){
        return (
            <div class="ui container">
              <br/>
                <h1>{this.state.game.game_name}</h1>
                <div class="ui divider"></div>
                <h5>{this.state.game.game_description}</h5>
                <br/>
                <button class="ui button" onClick={(e) => this.changeInvitePending(e)}>Accept</button> <button class="ui button" onClick={() => this.deleteGamePlayer()}>Decline</button>
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