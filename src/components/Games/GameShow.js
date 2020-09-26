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
    const gameId = parseInt(path[path.length - 2])
    fetch(`http://localhost:4000/games/${gameId}`)
    .then(resp => resp.json())
    .then(data => {
        this.setState({ 
          game: data
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
              location={this.props.location}
              gmNotebook={this.state.game.game_master_notebook}
              /> 
            </div>
            <div>
              <CharacterNotebooksContainer 
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