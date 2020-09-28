import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from "react-router-dom";



class CharacterNoteShow extends Component {

  state = { 
    note: "", 
    cnId: "", 
    cnName: "", 
    cnUserId: "",
    gameName: "",
  }

  handleDelete() {
    const id = this.state.note.id
    const cnId = this.state.cnId
    const cnName = this.state.cnName
    const gameName = this.state.gameName
    const reqObj = {
      method: 'DELETE'
    }
    fetch(`http://localhost:4000/character_notes/${id}`, reqObj)
    this.props.deleteCharacterNote(id, cnId)
    this.props.history.push(`/games/${gameName}/characterNotebook/${cnName}`)
  }

  componentDidMount() {
    const path = this.props.location.pathname.split("/");
    const gameName = path[2]
    const cnNotebookName = path[4]
    const cnNoteId = parseInt(path[path.length - 1]);
    // const cnNotebook = this.props.auth.character_notebooks.find(cnNotebook => cnNotebook.name === cnNotebookName)
    fetch(`http://localhost:4000/character_notebooks/`)
    .then(resp => resp.json())
    .then(data => {
      const cnNotebook = data.find(notebook => notebook.name===cnNotebookName)
      const cnNote = cnNotebook.character_notes.find(note => note.c_note_id === cnNoteId)
      this.setState({
          note: cnNote,
          cnId: cnNotebook.id,
          cnName: cnNotebookName,
          cnUserId: cnNotebook.user_id,
          gameName: gameName
      })
    })
  }

  render () {
    const note = this.state.note
    const cnUserId = this.state.cnUserId
    const currentUserId = this.props.auth.id
        if (note && cnUserId === currentUserId) {
    return (
        <div>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <Link to={'/games/'+this.state.gameName+'/characterNotebook/'+this.state.cnName+'/notes/'+this.state.note.id.toString()+'/edit'}>Edit</Link>
            <button onClick={() => this.handleDelete()}>Delete</button>
            <br/>
            <Link to={'/games/'+this.state.gameName+'/characterNotebook/'+this.state.cnName}>Back To Notebook</Link>
        </div>
    );} else if (note && cnUserId !== currentUserId ) {
        return (
            <div>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <Link to={'/games/'+this.state.gameName+'/characterNotebook/'+this.state.cnName}>Back To Notebook</Link>
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
  
//   const mapDispatchToProps = {
//       deletecNote
//   }
  
  export default connect(mapStateToProps, null)(CharacterNoteShow)