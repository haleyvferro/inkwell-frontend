import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import GameShow from './GameShow'

class GameShow extends Component {

  state ={
    game: "",
  }

  componentDidMount() {
    console.log(this.props.auth.games)
    const path = this.props.location.pathname.split("/");
    const gameId = parseInt(path[2])
    fetch(`http://localhost:4000/games/${gameId}`)
    .then(resp => resp.json())
    .then(data => {
        this.setState({ 
          game: data
        })
    })
}

    render () {
      return (
        <div className="ui item">
          <div>
      <h1>{this.state.game.game_name}</h1>
          </div>
      </div>
      );
    };
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(GameShow)