import React  from 'react';
// import './App.css';
import GMNotebooksContainer from './GMNotebooks/GMNotebooksContainer';
import GamesRunningContainer from './Games/GamesRunningContainer';
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
    return (
      <div className={null}>
          <h1>buncha notebooks for the games I'm running</h1>
          <GamesRunningContainer id={this.props.auth.id} />
          <h1>buncha notebooks for the games I'm running</h1>
          <GMNotebooksContainer id={this.props.auth.id} />
          {/* <CharacterNotebooksContainer/> */}
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
