import React, {Component} from "react";
import {connect} from "react-redux";
import {newCharacterNotebook} from '../../actions/Auth'


class CharacterNotebookNew extends Component {
    state = { 
        gameId: "", 
        gameName: "", 
        characterName: "", 
        characterId: "", 
    }

    componentDidMount() {
        const characterId = this.props.auth.id
        const path = this.props.location.pathname.split("/");
        const gameName = path[2]
        console.log(gameName)
        fetch(`http://localhost:4000/games/`)
        .then(resp => resp.json())
        .then(data => {
          const game = data.find(game => game.game_name === gameName)
            this.setState({ 
              gameId: game.id,
              gameName: gameName,
              characterId: characterId
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
            body: JSON.stringify({character_notebook: 
              {
                user_id: this.state.characterId,
                game_id: this.state.gameId,
                name: this.state.characterName,
                amount_total_earned: 0,
                amount_total_spent: 0,
                amount_existing: 0,
            }}),
          };
          fetch(
            `http://localhost:4000/character_notebooks/`,
            reqObj
          )
          .then(resp => resp.json())
          .then(data => {
            console.log(data)
              this.props.newCharacterNotebook(data)
              this.props.history.push('/games/'+this.state.gameName+'/characterNotebooks/'+this.state.characterName)
          })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render () {
        console.log(this.state)
        if(this.state.gmId !== null){
        return (
            <div>
                <form onSubmit={this.submitHandler} className="ui form">
        <h1>Create your Character</h1>
            Name:
            <br/>
            <input
              placeholder="characterName"
              name="characterName"
              onChange={this.changeHandler}
              value={this.state.characterName}
            />
          <br/><br/>
          <input type="submit" />
        </form>
            </div>
        );} else {return null}
    }
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = {
    newCharacterNotebook
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterNotebookNew)