import React, {Component} from 'react';
import { Link } from "react-router-dom";
// import GameShow from './GameShow'

class GameCard extends Component {

    render () {
      // console.log(this.props.game.game_name)
      return (
        <div className="ui column">
          <div class="ui card" style={{height: "175px", width: "160px"}}>
            <div class='ui container'>
              <br/>
            <center><i class="huge book icon"></i></center>
              <br/>
            <div class='ui container'>
            <h4><Link to={'/games/'+this.props.game.game_name}>{this.props.game.game_name}</Link></h4>
            </div>
              <br/>
            </div>
          </div>
      </div>
      );
    };}
    export default GameCard;