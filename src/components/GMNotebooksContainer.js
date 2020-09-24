import React, { Component } from 'react';
// import { fetchGMNotebooksSuccess } from '../actions/index';
// import { deleteGMNotebook } from '../actions/index';
import {connect} from 'react-redux'
import GMNotebookCard from './GMNotebookCard'
// import { Link } from "react-router-dom";



class GMNotebooksContainer extends Component {

  // componentDidMount(){
    // // console.log(this.props.id)
    // fetch('http://localhost:4000/game_master_notebooks')
    // .then(resp => resp.json())
    // .then(gmNotebooks => {
    //   const filteredNotebooks = gmNotebooks.filter(notebook => notebook.user_id === this.props.id)
    // this.props.fetchGMNotebooksSuccess(filteredNotebooks)
    // })
  // }

  renderGMNotebooks = () => {
    // console.log(this.props.auth.game_master_notebooks)
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
        <h1>buncha notebooks for the games I'm running</h1>
        {/* <button as={Link} to={`/game_master_notebooks`}>View All</button> */}
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