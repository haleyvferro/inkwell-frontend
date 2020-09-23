import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

class GMNotebookShow extends Component {
    state = { id: "" };

    componentDidMount() {
      const path = this.props.location.pathname.split("/");
      const id = parseInt(path[path.length - 1]);
      this.setState({id: id})
    }

    render () {
        const id = this.state.id
        const GMNotebook = this.props.auth.game_master_notebooks.find(gmNotebook => gmNotebook.id === id)
        console.log(GMNotebook)
    return (
        <div className="ui item">
        <div>
            HELLO THIS IS A GAME MASTER NOTEBOOK
        </div>
        </div>
    );
    };
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(GMNotebookShow)