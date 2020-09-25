import React from 'react';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation'
import Login from './Login'
import Dashboard from './Dashboard'
import GameShow from './Games/GameShow'
import GMNotebookShow from './GMNotebooks/GMNotebookShow'
import GMNoteShow from './GMNotebooks/GMNotes/GMNoteShow'
import GMNoteNew from './GMNotebooks/GMNotes/GMNoteNew'
import GMNoteEdit from './GMNotebooks/GMNotes/GMNoteEdit'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/login' component={Login}/>

        {/* Games  */}
        <Route path='/games/:gameId/:gamename' component={GameShow}/>

        {/* Game Master Notebooks */}
        <Route path='/gameMasterNotebooks/:id' component={GMNotebookShow}/>

        {/* Game Master Notes */}
        <Route path='/:gmnotebookname/notes/new' component={GMNoteNew}/>
        <Route path='/:gmnotebookname/notes/:id/edit' component={GMNoteEdit}/>
        <Route path='/:gmnotebookname/notes/:id' component={GMNoteShow}/>
      </Switch>
    </div>
  );
}

export default App;
