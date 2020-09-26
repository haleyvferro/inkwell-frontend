import React from 'react';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation'
import Login from './Login'
import Dashboard from './Dashboard'
import GameShow from './Games/GameShow'
import GMNotebookShow from './GMNotebooks/GMNotebookShow'
import CharacterNotebookShow from './CharacterNotebooks/CharacterNotebookShow'
import GMNoteShow from './GMNotebooks/GMNotes/GMNoteShow'
import GMNoteNew from './GMNotebooks/GMNotes/GMNoteNew'
import GMNoteEdit from './GMNotebooks/GMNotes/GMNoteEdit'
import CharacterNoteShow from './CharacterNotebooks/CharacterNotes/CharacterNoteShow'
// import CharacterNoteNew from './CharacterNotebooks/CharacterNotes/CharacterNoteNew'
// import CharacterNoteEdit from './CharacterNotebooks/CharacterNotes/CharacterNoteEdit'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/login' component={Login}/>

        {/* Games  */}
        <Route path='/games/:gameId/:gamename' component={GameShow}/>

        {/* Game Master Notes */}
        <Route path='/gameMasterNotebooks/:gmnotebookname/notes/new' component={GMNoteNew}/>
        <Route path='/gameMasterNotebooks/:gmnotebookname/notes/:id/edit' component={GMNoteEdit}/>
        <Route path='/gameMasterNotebooks/:gmnotebookname/notes/:id' component={GMNoteShow}/>

        {/* Game Master Notebooks */}
        <Route path='/gameMasterNotebooks/:gmnotebookname' component={GMNotebookShow}/>

        {/* Character Notes */}
        {/* <Route path='/characterNotebooks/:characternotebookname/notes/new' component={CharacterNoteNew}/> */}
        {/* <Route path='/characterNotebooks/:characternotebookname/notes/:id/edit' component={CharacterNoteEdit}/> */}
        <Route path='/characterNotebooks/:characternotebookname/notes/:id' component={CharacterNoteShow}/>

        {/* Character Notebooks */}
        <Route path='/characterNotebooks/:characternotebookname' component={CharacterNotebookShow}/>
      </Switch>
    </div>
  );
}

export default App;
