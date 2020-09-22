import React  from 'react';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import GMNotebooksContainer from './GMNotebooksContainer';
import { connect } from 'react-redux'


class Dashboard extends React.Component {
  componentDidMount(){
    if(!this.props.auth){
      this.props.history.push('/login')
    }
  }
  
  render(){
    return (
      <div className={null}>
          <GMNotebooksContainer />
          {/* <CharacterNotebooksContainer/> */}
      </div>
  );}
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, null)(Dashboard);
