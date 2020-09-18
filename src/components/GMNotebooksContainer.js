import React, { Component } from 'react';
import { fetchGMNotebooksSuccess } from '../actions/index';
import { deleteGMNotebook } from '../actions/index';
import {connect} from 'react-redux'
import GMNotebook from './GMNotebook'


class GMNotebooksContainer extends Component {

  componentDidMount(){
    fetch('http://localhost:4000/game_master_notebooks')
    .then(resp => resp.json())
    .then(notebooksArr => {

    this.props.fetchGMNotebooksSuccess(notebooksArr)
    })
  }

  renderGMNotebooks = () => {
      console.log(this.props)
    // return this.props.notebooks.map(notebook => (
    //   <GMNotebook
    //     key={notebook.id}
    //     note={notebook}
    //     deleteGMNotebook={this.props.deleteGMNotebook}
    //   />
    // ));
  }
  

  render(){
  return (
    <div>
        <h1>buncha notes</h1>
        <div className="ui items">{this.renderGMNotebooks()}</div>
    </div>
  );}
}

const mapStateToProps= (storeState) => {
  return {
    GMNotebooks: storeState.GMNotebooks,
  }
}

const mapDispatchToProps = {
    fetchGMNotebooksSuccess,
    deleteGMNotebook,
}

export default connect(mapStateToProps, mapDispatchToProps)(GMNotebooksContainer)
