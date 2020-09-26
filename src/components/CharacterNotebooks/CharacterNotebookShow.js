import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import CharacterNoteCard from './CharacterNotes/CharacterNoteCard'

class CharacterNotebookShow extends Component {
    state = { 
      characterNotebook: "", 
      gameId: "",
      gameName: "",
    };

    findGameName = (gameId) => {
      fetch(`http://localhost:4000/games/${gameId}`)
      .then(resp => resp.json())
      .then(data => {
          const gameName = data.game_name
          this.setState({
            gameName: gameName, 
          })
        })
    }

    componentDidMount() {
      const path = this.props.location.pathname.split("/");
      const name = path[2];
    if (path.includes('characterNotebooks')){
      fetch(`http://localhost:4000/character_notebooks/`)
      .then(resp => resp.json())
      .then(data => {
          const notebook = data.find(notebook => notebook.name === name)
          this.setState({
            characterNotebook: notebook,
            gameId: notebook.game_id,
          })
          this.findGameName(notebook.game_id)
        })

      } 
        //   else if (path.includes('games')) {
        //    this.setState({
        //      characterNotebook: this.props.characterNotebook
        //    })
        //  }
      else {
        return null
      }
    }

    renderCharacterNotes = () => {
        const characterNotes = this.state.characterNotebook.character_notes
        if (characterNotes) {
        return characterNotes.map(note => (
            <CharacterNoteCard 
            key={note.c_note_id}
            characterNotebookName={this.state.characterNotebook.name}
            characterNote={note}
            />
        ));}
      }

    render () {
      console.log(this.state)
        const characterNotebook = this.state.characterNotebook
        const currentUserId = this.props.auth.id
        if (characterNotebook && characterNotebook.user_id === currentUserId){
          return (
            <div className="ui item">
              <h1>{characterNotebook.name}</h1>
              <div>
                  {this.renderCharacterNotes()}<br/><br/>
                  <Link to={'/characterNotebooks/'+this.state.characterNotebook.name+'/notes/new'}>New Note</Link>
                  <Link to={'/games/'+this.state.gameId+'/'+this.state.gameName}>View Game</Link>

              </div>
            </div>
          );
        } else if (characterNotebook && characterNotebook.user_id !== currentUserId ){
          return(
          <div className="ui item">
            <h1>{characterNotebook.name}</h1>
            <div>
                {this.renderCharacterNotes()}<br/><br/>
                <Link to={'/games/'+this.state.gameId+'/'+this.state.gameName}>View Game</Link>
            </div>
          </div>)
        } else {return null}
    };
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(CharacterNotebookShow)