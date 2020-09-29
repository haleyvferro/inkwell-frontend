import React, {Component} from "react";
import {connect} from "react-redux";
import {newCharacterNote} from '../../../actions/Auth'


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
        const cNotebook = this.props.auth.character_notebooks.find(cNotebook => cNotebook.name === cNotebookName)
        this.setState({
            cnId: cNotebook.id,
            characterName: cNotebookName,
            isVisible: true,
            gameName: gameName
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const cnId = this.state.cnId
        const reqObj = {
            method: "POST",
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
            `http://localhost:4000/character_notes/`,
            reqObj
          )
          .then(resp => resp.json())
          .then(data => {
              console.log(data)
              this.props.newCharacterNote(cnId, data)
              this.props.history.push('/games/'+this.state.gameName+'/characterNotebooks/'+this.state.characterName+'/notes/'+data.id.toString())
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
        <h1>New Note</h1>
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
    newCharacterNote
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterNoteNew)