import React, { Component } from 'react';
// import { fetchGMNotebooksSuccess } from '../actions/index';
// import { deleteGMNotebook } from '../actions/index';
import {connect} from 'react-redux'
import CharacterNotebookCard from './CharacterNotebookCard.js'
import { Link } from "react-router-dom";



class CharacterNotebooksContainer extends Component {
  state ={
    userIds: "",
    currentUserId: "",
    existingCNBUsers: "",
    gameName: "",
  }

  componentDidMount () {
    const path = this.props.location.pathname.split("/");
    const gameName = path[2]
    const cnotebooks = this.props.characterNotebooks
    const currentUserId = this.props.auth.id
    const existingCNBUsers = cnotebooks.map(notebook => notebook.user_id)
    const userIds = this.props.users.map(user => user.id)
    this.setState({
      gameName: gameName,
      userIds: userIds,
      currentUserId: currentUserId,
      existingCNBUsers: existingCNBUsers,
    })
  }

  renderCharacterNotebooks = () => {
    const cnotebooks = this.props.characterNotebooks
    // console.log('users', usersincludecurrentuser, 'notebooks', cnbsincludecurrentuser)
      if (cnotebooks) {
        return cnotebooks.map(notebook => (
            <CharacterNotebookCard 
            gmId={this.props.gmId}
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
    if (this.props.gmId === this.props.auth.id)  {
      return (
        <div>
            <h2>Character Notebooks</h2>
            <div class="ui divider"></div>
            <div className="ui doubling five column grid">{this.renderCharacterNotebooks()}</div><br/><br/>
            <Link class="ui button" to={'/games/'+this.props.gameName+'/invite'}>Invite Players</Link>
        </div>
      );} else if (this.state.userIds.includes(this.state.currentUserId) && !this.state.existingCNBUsers.includes(this.state.currentUserId)){
       return ( <div>
        <h2>Character Notebooks</h2>
        <div className="ui doubling five column grid">{this.renderCharacterNotebooks()}</div><br/><br/>
        <Link class="ui button" to={'/games/'+this.state.gameName+'/characterNotebooks/new'}>Create Your Character</Link>
        </div>)
      }
      else {
        return (
          <div>
          <h2>Character Notebooks</h2>
          <div className="ui doubling five column grid">{this.renderCharacterNotebooks()}</div>
      </div>
        )
      }
  }
} 

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(CharacterNotebooksContainer)