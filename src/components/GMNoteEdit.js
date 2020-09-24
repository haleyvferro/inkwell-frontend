import React, {Component} from "react";
import {connect} from "react-redux";
import {editGMNote} from '../actions/Auth'


class GMNoteEdit extends Component {
    state = { 
        note: "", 
        gmnId: "", 
        gmnName: "", 
        title: "",
        content: "",
        isVisible: ""
    }

    componentDidMount() {
        const path = this.props.location.pathname.split("/");
        const gmNotebookName = path[1]
        const gmNoteId = parseInt(path[path.length - 2]);
        const gmNotebook = this.props.auth.game_master_notebooks.find(gmNotebook => gmNotebook.name === gmNotebookName)
        const gmNote = gmNotebook.gm_notes.find(note => note.id === gmNoteId)
        this.setState({
            note: gmNote,
            gmnId: gmNotebook.id,
            gmnName: gmNotebookName,
            title: gmNote.title,
            content: gmNote.content,
            isVisible: gmNote.visible_to_players,
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const id = this.state.note.id
        const gmnId = this.state.gmnId
        const reqObj = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({game_master_note: 
              {id: id,
              title: this.state.title,
              content: this.state.content,
              gmnotebook_id: gmnId,
              visible_to_players: this.state.isVisible
            }}),
          };
          fetch(
            `http://localhost:4000/game_master_notes/${id}`,
            reqObj
          )
          .then(resp => resp.json())
          .then(data => {
              console.log(data)
              this.props.editGMNote(id, gmnId, data)
              this.props.history.push('/'+this.state.gmnName+'/notes/'+id.toString())
          })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render () {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.submitHandler} className="ui form">
        <h1>Edit your note</h1>
            Title:
            <br/>
            <input
              placeholder="Title"
              name="title"
              onChange={this.changeHandler}
              value={this.state.title}
            />
            <br/><br/>
            Note: 
            <br/>
            <textarea
            label="content"
            name="content"
            placeholder="content"
            onChange={this.changeHandler}
            value={this.state.content}
            cols="50" 
            rows="10"
          />
          <br/><br/>
          <input type="submit" />
        </form>
            </div>
        );
    }
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = {
    editGMNote
}

export default connect(mapStateToProps, mapDispatchToProps)(GMNoteEdit)