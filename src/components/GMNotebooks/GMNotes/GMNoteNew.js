import React, {Component} from "react";
import {connect} from "react-redux";
import {newGMNote} from '../../../actions/Auth'


class GMNoteNew extends Component {
    state = { 
        note: "", 
        gmnId: "", 
        gameName: "", 
        gmnName: "", 
        title: "",
        content: "",
        isVisible: ""
    }

    componentDidMount() {
        const path = this.props.location.pathname.split("/");
        const gameName = path[2]
        const gmNotebookName = path[4]
        const gmNotebook = this.props.auth.game_master_notebooks.find(gmNotebook => gmNotebook.name === gmNotebookName)
        this.setState({
            gmnId: gmNotebook.id,
            gmnName: gmNotebookName,
            isVisible: true,
            gameName: gameName
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const gmnId = this.state.gmnId
        const reqObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({game_master_note: 
              {
              title: this.state.title,
              content: this.state.content,
              game_master_notebook_id: gmnId,
              visible_to_players: this.state.isVisible
            }}),
          };
          fetch(
            `http://localhost:4000/game_master_notes/`,
            reqObj
          )
          .then(resp => resp.json())
          .then(data => {
              console.log(data)
              this.props.newGMNote(gmnId, data)
              this.props.history.push('/games/'+this.state.gameName+'/gameMasterNotebooks/'+this.state.gmnName+'/notes/'+data.id.toString())
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
    newGMNote
}

export default connect(mapStateToProps, mapDispatchToProps)(GMNoteNew)