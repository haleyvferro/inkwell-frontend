import React, {Component} from "react";
import {connect} from "react-redux";
import {newGamePlayer} from '../../actions/Auth'

// let user;

class InvitePlayerForm extends Component {
    state = { 
        gameId: "", 
        gameName: "", 
        userEmail: "", 
        invitePending: "",
        userId: "",
    }

    componentDidMount() {
        const path = this.props.location.pathname.split("/");
        const gameName = path[2]
        debugger
        const game = this.props.auth.game_creations.find(game => game.game_name === gameName)
        console.log(gameName)
        console.log(game)
        if (game){
        this.setState({
            gameId: game.id,
            gameName: gameName,
            invitePending: true,
        })}
    }


    submitHandler = (e) => {
        e.preventDefault()
        let userId;
        fetch(
          `http://localhost:4000/users/`
        )
        .then(resp => resp.json())
        .then(data => {
          const user = data.find(user => user.email === this.state.userEmail)
          userId = user.id
          console.log(userId, 'inside')
          
          const reqObj = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({game_player: 
                {
                  user_id: userId,
                  game_id: this.state.gameId,
                  invite_pending: this.state.invitePending,
              }}),
            };
            console.log(reqObj)
            fetch(
              `http://localhost:4000/game_players/`,
              reqObj
            )
            .then(resp => resp.json())
            .then(data => {
                this.props.newGamePlayer(data)
                this.props.history.push('/games/'+this.state.gameName)
            })
        })

        
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render () {
      if (this.state.gameId){
        return (
            <div>
                <form onSubmit={this.submitHandler} className="ui form">
        <h1>Invite Player</h1>
            email:
            <br/>
            <input
              placeholder="userEmail"
              name="userEmail"
              onChange={this.changeHandler}
              value={this.state.userEmail}
            />
          <br/><br/>
          <input type="submit" />
        </form>
            </div>
        );} else { return null }
    }
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = {
    newGamePlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(InvitePlayerForm)