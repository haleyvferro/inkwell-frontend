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
  }

  componentDidMount () {
    const cnotebooks = this.props.characterNotebooks
    const currentUserId = this.props.auth.id
    const existingCNBUsers = cnotebooks.map(notebook => notebook.user_id)
    const userIds = this.props.users.map(user => user.id)
    this.setState({
      userIds: userIds,
      currentUserId: currentUserId,
      existingCNBUsers: existingCNBUsers,
    })
  }

  renderCharacterNotebooks = () => {
    // const path = this.props.location.pathname.split("/");
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
    console.log(this.state)
    if (this.props.gmId === this.props.auth.id)  {
      return (
        <div>
            <h1>Character Notebooks</h1>
            <div className="ui items">{this.renderCharacterNotebooks()}</div><br/><br/>
            <Link to={'/games/'+this.props.gameName+'/invite'}>Invite Players</Link>
        </div>
      );} else if (this.state.userIds.includes(this.state.currentUserId) && !this.state.existingCNBUsers.includes(this.state.currentUserId)){
       return ( <div>
        <h1>Character Notebooks</h1>
        <div className="ui items">{this.renderCharacterNotebooks()}</div><br/><br/>
        <Link to={'/games/'+this.state.gameName+'/characterNotebook/new'}>Create Your Character</Link>
        </div>)
      }
      else {
        return (
          <div>
          <h1>Character Notebooks</h1>
          <div className="ui items">{this.renderCharacterNotebooks()}</div>
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