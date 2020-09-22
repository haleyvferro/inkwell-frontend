import React, {Component} from 'react';
import { Link } from "react-router-dom";


class GMNotebookCard extends Component {

render () {
  console.log(this.props.gmNotebook)
  return (
    <div className="ui item">
      <div>
        <h3>{this.props.gmNotebook.name}</h3>
      </div>
    </div>
  );
};}
export default GMNotebookCard;