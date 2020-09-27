import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import GameShow from './GameShow'
import GMNotebookShow from '../GMNotebooks/GMNotebookShow'
import CharacterNotebooksContainer from '../CharacterNotebooks/CharacterNotebooksContainer'

class GameShow extends Component {

  state ={
    game: "",
  }

  componentDidMount() {
    const path = this.props.location.pathname.split("/");
    const gameName = path[2]
    console.log(path, gameName)
    fetch(`http://localhost:4000/games/`)
    .then(resp => resp.json())
    .then(data => {
      const game = data.find(game => game.game_name === gameName)
        this.setState({ 
          game: game
        })
    })
}

    render () {
      console.log(this.state.character_notebooks)
      const game = this.state.game
      if (game) {
        return (
          // <div>'hi'</div>
          <div className="ui item">
            <div>
              <h1>{this.state.game.game_name}</h1>
              <GMNotebookShow 
              gameName={this.state.game.game_name}
              gameId={this.state.game.id}
              location={this.props.location}
              gmNotebook={this.state.game.game_master_notebook}
              gmId={this.state.game.gm_id}
              /> 
            </div>
            <div>
              <CharacterNotebooksContainer 
              gameName={this.state.game.game_name}
              gameId={this.state.game.id}
              location={this.props.location}
              characterNotebooks={this.state.game.character_notebooks}
              />
            </div>
      </div>
      );
    } else {
      return null
    }
  }
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(GameShow)