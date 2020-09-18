import React, { Component } from 'react';
import { fetchGMNotebooksSuccess } from '../actions/index';
import { deleteGMNotebook } from '../actions/index';
import {connect} from 'react-redux'
import GMNotebookCard from './GMNotebookCard'
import { Link } from "react-router-dom";



class GMNotebooksContainer extends Component {

  componentDidMount(){
    fetch('http://localhost:4000/game_master_notebooks')
    .then(resp => resp.json())
    .then(gmNotebooks => {

    this.props.fetchGMNotebooksSuccess(gmNotebooks)
    })
  }

  renderGMNotebooks = () => {
      console.log(this.props)
    return this.props.gmNotebooks.map(notebook => (
        <GMNotebookCard 
        key={notebook.id}
        gmNotebook={notebook}
        />
    ));
  }
  

  render(){
  return (
    <div>
        <h1>buncha notes</h1>
        <button as={Link} to={`/game_master_notebooks`}>View All</button>
        <div className="ui items">{this.renderGMNotebooks()}</div>
    </div>
  );}
}

const mapStateToProps= (storeState) => {
  return {
    gmNotebooks: storeState.gmNotebooks,
  }
}

const mapDispatchToProps = {
    fetchGMNotebooksSuccess,
    deleteGMNotebook,
}

export default connect(mapStateToProps, mapDispatchToProps)(GMNotebooksContainer)
