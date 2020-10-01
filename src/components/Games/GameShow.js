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
      const game = this.state.game
      // const currentPlayerHasCharacterNotebook = game.character_notebooks.find(cNotebook => cNotebook.user_id === this.props.auth.id)
      // const isPlayer = this.props.auth.game_players.find(invite => invite.game_id === game.id)
      if (game) {
        return (
          // <div>'hi'</div>
          <div className="ui container">
            <br/>
            <div>
              <h1 class="ui inverted header">{this.state.game.game_name}</h1>
              <div class="ui divider"></div>
              <h5>{this.state.game.game_description}</h5>
              <br/>
              <br/>
              <div class="ui divider"></div>
              <GMNotebookShow 
              gameName={this.state.game.game_name}
              gameId={this.state.game.id}
              location={this.props.location}
              gmNotebook={this.state.game.game_master_notebook}
              gmId={this.state.game.gm_id}
              /> 
            </div>
            <br/>
            <br/>
            <br/>
            <div>
              <CharacterNotebooksContainer
              users={this.state.game.users}
              gmId={this.state.game.gm_id}
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