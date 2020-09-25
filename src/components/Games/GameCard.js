import React, {Component} from 'react';
import { Link } from "react-router-dom";
// import GameShow from './GameShow'

class GameCard extends Component {

    render () {
      // console.log(this.props.storeState)
      return (
        <div className="ui item">
          <div>
            <Link to={'/games/'+this.props.game.id+'/'+this.props.game.game_name}>{this.props.game.game_name}</Link>
          </div>
      </div>
      );
    };}
    export default GameCard;