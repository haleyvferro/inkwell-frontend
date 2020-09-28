import React, { Component } from 'react';
// import { fetchGMNotebooksSuccess } from '../actions/index';
// import { deleteGMNotebook } from '../actions/index';
import {connect} from 'react-redux'
import CharacterNotebookCard from './CharacterNotebookCard.js'
import { Link } from "react-router-dom";



class CharacterNotebooksContainer extends Component {

  renderCharacterNotebooks = () => {
    // const path = this.props.location.pathname.split("/");
    const cnotebooks = this.props.characterNotebooks
    // const currentUserId = this.props.auth.id
      if (cnotebooks) {
        return cnotebooks.map(notebook => (
            <CharacterNotebookCard 
            gameName={this.props.gameName}
            gameId={this.props.gameId}
            key={notebook.id} 
            characterNotebook={notebook}
            />
            ));
      } 
      // else if (this.props.gmId === currentUserId && !cnotebooks){
      //   return cnotebooks.map(notebook => (
      //     <CharacterNotebookCard 
      //     gameName={this.props.gameName}
      //     gameId={this.props.gameId}
      //     key={notebook.id} 
      //     gmNotebook={notebook}
      //     />
      //   ));
      // }
  }
  

  render(){
  return (
    <div>
        <h1>Character Notebooks</h1>
        <div className="ui items">{this.renderCharacterNotebooks()}</div>
        <Link to={'/games/'+this.props.gameName+'/invite'}>Invite Players</Link>
    </div>
  );}
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(CharacterNotebooksContainer)