import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import GMNoteCard from './GMNotes/GMNoteCard'

class GMNotebookShow extends Component {
    state = { 
      gmNotebook: "", 
      // gameId: "",
      gameName: "",
      gmId: "",
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
      const gameName = path[2];
      fetch(`http://localhost:4000/games/`)
        .then(resp => resp.json())
        .then(data => {
          const game = data.find(game => game.game_name === gameName)
          const gmNotebook = game.game_master_notebook
          this.setState({
            gmNotebook: gmNotebook,
            gmId: game.gm_id,
            gameName: gameName
          })
        })
    }

    renderGMNotes = () => {
        const gmNotes = this.state.gmNotebook.game_master_notes
        if (gmNotes) {
        return gmNotes.map(note => (
            <GMNoteCard 
            gameName={this.state.gameName}
            key={note.id}
            gmNotebookName={this.state.gmNotebook.name}
            gmNote={note}
            />
        ));}
      }

    render () {
      // console.log(this.state)
        const gmNotebook = this.state.gmNotebook
        const currentUserId = this.props.auth.id
      if (gmNotebook && gmNotebook.user_id !== currentUserId ){
          return(
            <div className="ui item">
          <h1>{gmNotebook.name}</h1>
          <div>
              {this.renderGMNotes()}<br/><br/>
          <Link to={'/games/'+this.state.gameName}>View Game</Link>
          </div>
        </div>)
        } 
        else if (gmNotebook && gmNotebook.user_id === currentUserId){
          return (
            <div className="ui item">
              <h1>{gmNotebook.name}</h1>
              <div>
                  {this.renderGMNotes()}<br/><br/>
                  <Link to={'/games/'+this.state.gameName+'/gameMasterNotebook/'+this.state.gmNotebook.name+'/notes/new'}>New Note</Link><br/>
                  <Link to={'/games/'+this.state.gameName}>View Game</Link>

              </div>
            </div>
          );
        }
        else if (this.state.gmId === currentUserId && gmNotebook === null){
          return (
            <Link to={'/games/'+this.state.gameName+'/gameMasterNotebook/new'}>New Game Master Notebook</Link>
            )
        }
        else {return null}
    };
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(GMNotebookShow)