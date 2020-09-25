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
    }

    handleDelete() {
        const id = this.state.note.id
        const gmnId = this.state.gmnId
        const reqObj = {
          method: 'DELETE'
        }
        fetch(`http://localhost:4000/game_master_notes/${id}`, reqObj)
        this.props.deleteGMNote(id, gmnId)
        this.props.history.push(`/gameMasterNotebooks/${gmnId}`)
    }

    componentDidMount() {
        const path = this.props.location.pathname.split("/");
        const gmNotebookName = path[1]
        const gmNoteId = parseInt(path[path.length - 1]);
        const gmNotebook = this.props.auth.game_master_notebooks.find(gmNotebook => gmNotebook.name === gmNotebookName)
        const gmNote = gmNotebook.gm_notes.find(note => note.id === gmNoteId)
        this.setState({
            note: gmNote,
            gmnId: gmNotebook.id,
            gmnName: gmNotebookName,
            gmnUserId: gmNotebook.user_id
        })
    }

    render () {
        const note = this.state.note
        const gmnUserId = this.state.gmnUserId
        const currentUserId = this.props.auth.id
            if (note && gmnUserId === currentUserId) {
        return (
            <div>
                <h1>{note.title}</h1>
                <p>{note.content}</p>
                <Link to={'/'+this.state.gmnName+'/notes/'+this.state.note.id.toString()+'/edit'}>Edit</Link>
                <button onClick={() => this.handleDelete()}>Delete</button>
                <br/>
                <Link to={'/gameMasterNotebooks/'+this.state.gmnId}>Back To Notebook</Link>
            </div>
        );} else if (note && gmnUserId !== currentUserId ) {
            return (
                <div>
                <h1>{note.title}</h1>
                <p>{note.content}</p>
                <Link to={'/gameMasterNotebooks/'+this.state.gmnId}>Back To Notebook</Link>
                {/* <Link to={'/'+this.state.gmnName+'/notes/'+this.state.note.id.toString()+'/edit'}>Edit</Link>
                <button onClick={() => this.handleDelete()}>Delete</button> */}
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