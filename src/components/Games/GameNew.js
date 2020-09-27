import React, {Component} from "react";
import {connect} from "react-redux";
import {newGame} from '../../actions/Auth'


class GameNew extends Component {
  state = { 
      gmId: "", 
      gameName: "", 
      game_description: "",
  }

  componentDidMount() {
      const gmId = this.props.auth.id
      this.setState({
          gmId: gmId,
      })
  }

  submitHandler = (e) => {
      e.preventDefault()
      console.log(this.state)
      const reqObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({game: 
            {
            gm_id: this.state.gmId,
            game_name: this.state.gameName,
            game_description: this.state.game_description,
          }}),
        };
        fetch(
          `http://localhost:4000/games/`,
          reqObj
        )
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.props.newGame(data)
            this.props.history.push('/games/'+this.state.gameName)
        })
  }

  changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
  }

  render () {
      // console.log(this.state, 'trying to render?')
      return (
          <div>
            <form onSubmit={this.submitHandler} className="ui form">
              <h1>New Game</h1>
                  Game Name:
                  <br/>
                  <input
                    placeholder="gameName"
                    name="gameName"
                    onChange={this.changeHandler}
                    value={this.state.gameName}
                  />
                  <br/><br/>
                  Game Description: 
                  <br/>
                  <textarea
                  label="game_description"
                  name="game_description"
                  placeholder="game_description"
                  onChange={this.changeHandler}
                  value={this.state.game_description}
                  cols="50" 
                  rows="10"
                />
                <br/><br/>
                <input type="submit" />
            </form>
          </div>
      );
  }
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = {
    newGame
}

export default connect(mapStateToProps, mapDispatchToProps)(GameNew)