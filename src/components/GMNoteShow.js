import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import GMNoteCard from './GMNoteCard'

class GMNoteShow extends Component {
    state = { note: "" }

    componentDidMount() {
        const path = this.props.location.pathname.split("/");
        const gmNotebookName = path[1]
        const gmNoteId = parseInt(path[path.length - 1]);
        const gmNotebook = this.props.auth.game_master_notebooks.find(gmNotebook => gmNotebook.name === gmNotebookName)
        const gmNote = gmNotebook.gm_notes.find(note => note.id === gmNoteId)
        console.log(gmNote)
        this.setState({
            note: gmNote
        })
    }

    render () {
        const  note = this.state.note
        console.log(note)
        if (note) {
        return (
            <div>
                
                <h1>{note.title}</h1>
                <p>{note.content}</p>
                <button>Edit</button><button>Delete</button>
            </div>
        );} else {
            return (null)
        }
    };
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(GMNoteShow)