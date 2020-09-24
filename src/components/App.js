import React from 'react';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation'
import Login from './Login'
import Dashboard from './Dashboard'
// import GameShow from './GameShow'
import GMNotebookShow from './GMNotebookShow'
import GMNoteShow from './GMNoteShow'
import GMNoteNew from './GMNoteNew'
import GMNoteEdit from './GMNoteEdit'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/login' component={Login}/>
        <Route path='/gameMasterNotebooks/:id' component={GMNotebookShow}/>
        <Route path='/:gmnotebookname/notes/new' component={GMNoteNew}/>
        <Route path='/:gmnotebookname/notes/:id/edit' component={GMNoteEdit}/>
        <Route path='/:gmnotebookname/notes/:id' component={GMNoteShow}/>
      </Switch>
    </div>
  );
}

export default App;
