import React, { Component } from 'react';
// import { fetchGamesSuccess } from '../actions/index';
// import { deleteGMNotebook } from '../actions/index';
import {connect} from 'react-redux'
import GameCard from './GameCard'
import { Link } from "react-router-dom";



class GamesPlayingContainer extends Component {

  renderGames = () => {
    return this.props.auth.games.map(game => (
        <GameCard 
        key={game.id}
        game={game}
        />
    ));
  }

  render(){
  return (
    <div>
        {/* <button as={Link} to={`/games`}>View All</button> */}
        <div className="ui items">{this.renderGames()}</div><br/><br/>
    </div>
  );}
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(GamesPlayingContainer)
