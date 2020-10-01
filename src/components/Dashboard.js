import React  from 'react';
// import './App.css';
// import GMNotebooksContainer from './GMNotebooks/GMNotebooksContainer';
import GamesRunningContainer from './Games/GamesRunningContainer';
import GamesPlayingContainer from './Games/GamesPlayingContainer';
import InvitesContainer from './Invites/InvitesContainer';
import { connect } from 'react-redux'
import {currentUser} from '../actions/Auth'

class Dashboard extends React.Component {


  componentDidMount(){
    
    
    const token = localStorage.getItem('myAppToken')
    if(!token){
      this.props.history.push('/login')
    } else {
      const reqObj = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
      
      fetch('http://localhost:4000/api/v1/current_user', reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error){
          this.props.history.push('/login')
        } else {
          this.props.currentUser(data)
        }
      })
    }
  }
  
  render(){
      // console.log(this.props.auth.)
    return (
      <div className="ui container">
        <br/>
          <InvitesContainer /><br/><br/>
        <h1>Games Running</h1>
        <div class="ui divider"></div>
          <GamesRunningContainer id={this.props.auth.id} /><br/><br/><br/>
        <h1>Games Playing</h1>
        <div class="ui divider"></div>
          <GamesPlayingContainer id={this.props.auth.id} />
      </div>
  );}
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  currentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
