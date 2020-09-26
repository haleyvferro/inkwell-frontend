import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import CharacterNoteCard from './CharacterNotes/CharacterNoteCard'

class CharacterNotebookShow extends Component {
    state = { 
      characterNotebook: "", 
    };

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
          })
        })
      } else if (path.includes('games')) {
        this.setState({
          characterNotebook: this.props.characterNotebook
        })
      }
    }

    renderCharacterNotes = () => {
        const characterNotes = this.state.characterNotebook.character_notes
        console.log(characterNotes)
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
        const characterNotebook = this.state.characterNotebook
        const currentUserId = this.props.auth.id
        if (characterNotebook && characterNotebook.user_id === currentUserId){
          return (
            <div className="ui item">
              <h1>{characterNotebook.name}</h1>
              <div>
                  {this.renderCharacterNotes()}<br/><br/>
                  <Link to={'/characterNotebooks/'+this.state.characterNotebook.name+'/notes/new'}>New Note</Link>
              </div>
            </div>
          );
        } else if (characterNotebook && characterNotebook.user_id !== currentUserId ){
          return(
          <div className="ui item">
            <h1>{characterNotebook.name}</h1>
            <div>
                {this.renderCharacterNotes()}<br/><br/>
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