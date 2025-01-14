import React, {Component} from "react";
import {connect} from "react-redux";
import {newGMNotebook} from '../../actions/Auth'


class GMNotebookNew extends Component {
    state = { 
        gameId: "", 
        gameName: "", 
        gmnName: "", 
        gmId: "", 
    }

    componentDidMount() {
        const gmId = this.props.auth.id
        const path = this.props.location.pathname.split("/");
        const gameName = path[2]
        fetch(`http://localhost:4000/games/`)
        .then(resp => resp.json())
        .then(data => {
          const game = data.find(game => game.game_name === gameName)
            this.setState({ 
              gameId: game.id,
              gameName: gameName,
              gmId: gmId
            })
          })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const reqObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({game_master_notebook: 
              {
                user_id: this.state.gmId,
                game_id: this.state.gameId,
                name: this.state.gmnName,
            }}),
          };
          fetch(
            `http://localhost:4000/game_master_notebooks/`,
            reqObj
          )
          .then(resp => resp.json())
          .then(data => {
            console.log(data)
              this.props.newGMNotebook(data)
              this.props.history.push('games/'+this.state.gameName+'/gameMasterNotebook/'+this.state.gmnName)
          })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render () {
        console.log(this.state)
        return (
            <div class="ui container">
                <form onSubmit={this.submitHandler} className="ui form">
        <h1>Name your Game Master Notebook</h1>
            Title:
            <br/>
            <input
              placeholder="gmnName"
              name="gmnName"
              onChange={this.changeHandler}
              value={this.state.gmnName}
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
    newGMNotebook
}

export default connect(mapStateToProps, mapDispatchToProps)(GMNotebookNew)