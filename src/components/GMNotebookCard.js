import React, {Component} from 'react';
import { Link } from "react-router-dom";
// import Game from './Game'


class GMNotebookCard extends Component {

render () {
  return (
    <div className="ui item">
      <div>
          <Link to={'/gameMasterNotebooks/'+this.props.gmNotebook.id.toString()}>{this.props.gmNotebook.name}</Link>
      </div>
    </div>
  );
};}
export default GMNotebookCard;