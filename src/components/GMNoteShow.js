import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {deleteGMNote} from '../actions/Auth'
// import GMNoteCard from './GMNoteCard'

class GMNoteShow extends Component {
    state = { note: "", gmnId: "", gmnName: "" }

    handleDelete() {
        const id = this.state.note.id
        const gmnId = this.state.gmnId
        // console.log(this.props)
        const reqObj = {
          method: 'DELETE'
        }
        fetch(`http://localhost:4000/game_master_notes/${id}`, reqObj)
        // .then (resp => resp.json())
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
            // gmnName: gmNotebook.name
        })
    }

    render () {
        const  note = this.state.note
        // console.log(this.state.gmnId)
        if (note) {
        return (
            <div>
                
                <h1>{note.title}</h1>
                <p>{note.content}</p>
                <button>Edit</button>
                <button onClick={() => this.handleDelete()}>Delete</button>
            </div>
        );} else {
            return (null)
        }
    };
}

const mapStateToProps= (state) => {
    // console.log(state)
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = {
    deleteGMNote
}

export default connect(mapStateToProps, mapDispatchToProps)(GMNoteShow)