import React, {Component} from "react";
import {connect} from "react-redux";
import {editCharacterNote} from '../../../actions/Auth'


class CharacterNoteNew extends Component {
    state = { 
        note: "", 
        cnId: "", 
        gameName: "", 
        characterName: "", 
        title: "",
        content: "",
        isVisible: ""
    }

    componentDidMount() {
        const path = this.props.location.pathname.split("/");
        const gameName = path[2]
        const cNotebookName = path[4]
        const cNoteId = parseInt(path[path.length - 2]);
        const cNotebook = this.props.auth.character_notebooks.find(cNotebook => cNotebook.name ===cNotebookName)
        console.log(cNotebook)
        const cNote = cNotebook.character_notes.find(note => note.id === cNoteId)
        this.setState({
            note: cNote,
            cnId: cNotebook.id,
            characterName: cNotebookName,
            gameName: gameName,
            title: cNote.title,
            content: cNote.content,
            isVisible: cNote.visible_to_other_players,
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const cnId = this.state.cnId
        const id = this.state.note.id
        const reqObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({character_note: 
                {
                    title: this.state.title,
                    content: this.state.content,
                    character_notebook_id: cnId,
                    visible_to_other_players: this.state.isVisible,
                    amount_spent: 0,
                    amount_earned: 0,
                }}),
            };
            fetch(
                `http://localhost:4000/character_notes/${id}`,
                reqObj
                )
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    this.props.editCharacterNote(id, cnId, data)
                    this.props.history.push('/games/'+this.state.gameName+'/characterNotebooks/'+this.state.characterName+'/notes/'+data.id.toString())
                })
            }
            
            changeHandler = (e) => {
                this.setState({ [e.target.name]: e.target.value });
            };
            
            render () {
                console.log(this.state.cnId)
                return (
                    <div class="ui container">
                        <br/>
                <form onSubmit={this.submitHandler} className="ui form">
        <h2>Edit Note</h2>
        <div class="ui divider"></div>
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
          <input class="ui button" type="submit" />
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
    editCharacterNote
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterNoteNew)