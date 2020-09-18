import React from 'react';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation'
import Login from './Login'
import Dashboard from './Dashboard'

function App() {
  return (
    <div className="App">
      <Navigation />
      'hello'
      <Switch>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
