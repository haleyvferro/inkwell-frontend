import React, {Component} from "react";
import {connect} from "react-redux";
import {newGame} from '../../actions/Auth'


class GameNew extends Component {
    state = { 
        gmId: "", 
        game_name: "", 
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
        const reqObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({game_master_note: 
              {
              game_name: this.state.game_name,
              game_description: this.state.game_description,
              gm_id: this.state.gmId,
            }}),
          };
          fetch(
            `http://localhost:4000/games/`,
            reqObj
          )
          .then(resp => resp.json())
          .then(data => {
              console.log(data)
              this.props.newGMNote(data)
              this.props.history.push('/games/'+this.state.gmnName)
          })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render () {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.submitHandler} className="ui form">
        <h1>New Game</h1>
            Game Name:
            <br/>
            <input
              placeholder="game_name"
              name="game_name"
              onChange={this.changeHandler}
              value={this.state.game_name}
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