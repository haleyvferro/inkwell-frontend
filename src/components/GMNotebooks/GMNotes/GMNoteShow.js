import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {deleteGMNote} from '../../../actions/Auth'

class GMNoteShow extends Component {
    state = { 
        note: "", 
        gmnId: "", 
        gmnName: "", 
        gmnUserId: "",
        gameName: "",
    }

    handleDelete() {
        const id = this.state.note.id
        const gmnId = this.state.gmnId
        const gmnName = this.state.gmnName
        const gameName = this.state.gameName
        const reqObj = {
          method: 'DELETE'
        }
        fetch(`http://localhost:4000/game_master_notes/${id}`, reqObj)
        this.props.deleteGMNote(id, gmnId)
        this.props.history.push(`/games/${gameName}/gameMasterNotebook/${gmnName}`)
    }

    componentDidMount() {
        const path = this.props.location.pathname.split("/");
        const gameName = path[2]
        const gmNotebookName = path[4]
        const gmNoteId = parseInt(path[path.length - 1]);
        const gmNotebook = this.props.auth.game_master_notebooks.find(gmNotebook => gmNotebook.name === gmNotebookName)
        const gmNote = gmNotebook.gm_notes.find(note => note.id === gmNoteId)
        this.setState({
            note: gmNote,
            gmnId: gmNotebook.id,
            gmnName: gmNotebookName,
            gmnUserId: gmNotebook.user_id,
            gameName: gameName
        })
    }

    render () {
        const note = this.state.note
        const gmnUserId = this.state.gmnUserId
        const currentUserId = this.props.auth.id
            if (note!==null && gmnUserId === currentUserId) {
        return (
            <div>
                <h1>{note.title}</h1>
                <p>{note.content}</p>
                <Link to={'/games/'+this.state.gameName+'/gameMasterNotebook/'+this.state.gmnName+'/notes/'+this.state.note.id.toString()+'/edit'}>Edit</Link>
                <button onClick={() => this.handleDelete()}>Delete</button>
                <br/>
                <Link to={'/games/'+this.state.gameName+'/gameMasterNotebook/'+this.state.gmnName}>Back To Notebook</Link>
            </div>
        );} else if (note && gmnUserId !== currentUserId ) {
            return (
                <div>
                <h1>{note.title}</h1>
                <p>{note.content}</p>
                <Link to={'/games/'+this.state.gameName+'/gameMasterNotebook/'+this.state.gmnName}>Back To Notebook</Link>
            </div>
            )
        }
        else { return null }
    };
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = {
    deleteGMNote
}

export default connect(mapStateToProps, mapDispatchToProps)(GMNoteShow)