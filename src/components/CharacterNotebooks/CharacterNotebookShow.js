import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import CharacterNoteCard from './CharacterNotes/CharacterNoteCard'

class CharacterNotebookShow extends Component {
    state = { 
      characterNotebook: "", 
      gameName: "",
      userId: "",
    };

    componentDidMount() {
      const path = this.props.location.pathname.split("/");
      const name = path[4];
      const gameName = path[2]
      fetch(`http://localhost:4000/character_notebooks/`)
      .then(resp => resp.json())
      .then(data => {
          const notebook = data.find(notebook => notebook.name === name)
          this.setState({
            characterNotebook: notebook,
            userId: notebook.user_id,
            gameName: gameName,
          })
        })
    }

    renderCharacterNotes = () => {
        const characterNotes = this.state.characterNotebook.character_notes
        if (characterNotes) {
        return characterNotes.map(note => (
            <CharacterNoteCard 
            gameName={this.state.gameName}
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
                  <Link to={'/games/'+this.state.gameName+'/characterNotebooks/'+this.state.characterNotebook.name+'/notes/new'}>New Note</Link>
                  <Link to={'/games/'+this.state.gameName}>View Game</Link>

              </div>
            </div>
          );
        } else if (characterNotebook && characterNotebook.user_id !== currentUserId ){
          return(
          <div className="ui item">
            <h1>{characterNotebook.name}</h1>
            <div>
                {this.renderCharacterNotes()}<br/><br/>
                <Link to={'/games/'+this.state.gameName}>View Game</Link>
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