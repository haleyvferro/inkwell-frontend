import React, {Component} from 'react';
import { Link } from "react-router-dom";
// import GameShow from './GameShow'

class GameCard extends Component {

    render () {
      // console.log(this.props.game.game_name)
      return (
        <div className="ui column">
          <div class="ui card">
            <div class='ui container'>
              <br/>
            <i class="huge book icon"></i><br/><br/>
            <h4><Link to={'/games/'+this.props.game.game_name}>{this.props.game.game_name}</Link></h4>
              <br/>
            </div>
          </div>
      </div>
      );
    };}
    export default GameCard;