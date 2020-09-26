import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import GMNoteCard from './GMNotes/GMNoteCard'

class GMNotebookShow extends Component {
    state = { 
      gmNotebook: "", 
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
    if (path.includes('gameMasterNotebooks')){
      fetch(`http://localhost:4000/game_master_notebooks/`)
        .then(resp => resp.json())
        .then(data => {
          const notebook = data.find(notebook => notebook.name === name)
          this.setState({
            gmNotebook: notebook,
            gameId: notebook.game_id,
          })
          this.findGameName(notebook.game_id)
        })
      } 
      else if (path.includes('games')) {
        this.setState({
          gmNotebook: this.props.gmNotebook
        })
      }
    }

    renderGMNotes = () => {
        const gmNotes = this.state.gmNotebook.game_master_notes
        if (gmNotes) {
        return gmNotes.map(note => (
            <GMNoteCard 
            key={note.id}
            gmNotebookName={this.state.gmNotebook.name}
            gmNote={note}
            />
        ));}
      }

    render () {
      console.log(this.state)
        const gmNotebook = this.state.gmNotebook
        const currentUserId = this.props.auth.id
        if (gmNotebook && gmNotebook.user_id === currentUserId){
          return (
            <div className="ui item">
              <h1>{gmNotebook.name}</h1>
              <div>
                  {this.renderGMNotes()}<br/><br/>
                  <Link to={'/gameMasterNotebooks/'+this.state.gmNotebook.name+'/notes/new'}>New Note</Link><br/>
                  <Link to={'/games/'+this.state.gameId+'/'+this.state.gameName}>View Game</Link>

              </div>
            </div>
          );
        } else if (gmNotebook && gmNotebook.user_id !== currentUserId ){
          return(
            <div className="ui item">
            <h1>{gmNotebook.name}</h1>
            <div>
                {this.renderGMNotes()}<br/><br/>
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

export default connect(mapStateToProps, null)(GMNotebookShow)