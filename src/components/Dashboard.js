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
      <div className={null}>
          <InvitesContainer />
        <h1>buncha games I'm running</h1>
          <GamesRunningContainer id={this.props.auth.id} />
        <h1>buncha games I'm playing in</h1>
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
