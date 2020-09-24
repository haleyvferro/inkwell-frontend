import React, { Component } from 'react';
import { fetchGamesSuccess } from '../actions/index';
// import { deleteGMNotebook } from '../actions/index';
import {connect} from 'react-redux'
import GameCard from './GameCard'
import { Link } from "react-router-dom";



class GamesRunningContainer extends Component {

  componentDidMount(){
    // console.log(this.props)
    fetch('http://localhost:4000/games')
    .then(resp => resp.json())
    .then(games => {
      const filteredGames = games.filter(game => game.gm_id === this.props.id)
    this.props.fetchGamesSuccess(filteredGames)
    })
  }

  renderGames = () => {
    //   console.log(this.props.games)
    return this.props.games.map(game => (
        <GameCard 
        key={game.id}
        game={game}
        />
    ));
  }
  

  render(){
  return (
    <div>
        <h1>buncha games I'm running</h1>
        {/* <button as={Link} to={`/games`}>View All</button> */}
        <div className="ui items">{this.renderGames()}</div>
        <button>Create Game</button>
    </div>
  );}
}

const mapStateToProps= (storeState) => {
  return {
    games: storeState.games,
  }
}

const mapDispatchToProps = {
    fetchGamesSuccess,
    // deleteGMNotebook,
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesRunningContainer)
