import React, { Component } from 'react';
// import { fetchGMNotebooksSuccess } from '../actions/index';
// import { deleteGMNotebook } from '../actions/index';
import {connect} from 'react-redux'
import GMNotebookCard from './GMNotebookCard'
// import { Link } from "react-router-dom";



class GMNotebooksContainer extends Component {

  renderGMNotebooks = () => {
    const gmnotebooks = this.props.auth.game_master_notebooks
    return gmnotebooks.map(notebook => (
        <GMNotebookCard 
        key={notebook.id} 
        gmNotebook={notebook}
        />
    ));
  }
  

  render(){
  return (
    <div>
        <div className="ui items">{this.renderGMNotebooks()}</div>
    </div>
  );}
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(GMNotebooksContainer)


// const mapDispatchToProps = {
//     fetchGMNotebooksSuccess,
//     deleteGMNotebook,
// }