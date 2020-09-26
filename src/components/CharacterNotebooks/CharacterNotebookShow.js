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
      const id = parseInt(path[path.length - 1]);
    if (path.includes('characterNotebooks')){
      fetch(`http://localhost:4000/character_notebooks/${id}`)
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            characterNotebook: data,
          })
        })
      } else if (path.includes('games')) {
        this.setState({
          characterNotebook: this.props.characterNotebook
        })
      }
    }

    renderGMNotes = () => {
        const characterNotes = this.state.characterNotebook.character_notes
        if (characterNotes) {
        return characterNotes.map(note => (
            <CharacterNoteCard 
            key={note.id}
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
                  {this.renderGMNotes()}<br/><br/>
                  <Link to={'/'+this.state.characterNotebook.name+'/notes/new'}>New Note</Link>
              </div>
            </div>
          );
        } else if (characterNotebook && characterNotebook.user_id !== currentUserId ){
          return(
          <div className="ui item">
            <h1>{characterNotebook.name}</h1>
            <div>
                {this.renderGMNotes()}<br/><br/>
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