import React from 'react';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation'
import Login from './Login'
import Dashboard from './Dashboard'
import GameShow from './Games/GameShow'
import GameNew from './Games/GameNew'
import InviteShow from './Invites/InviteShow.js'
import GMNotebookShow from './GMNotebooks/GMNotebookShow'
import GMNotebookNew from './GMNotebooks/GMNotebookNew'
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
        <Route path='/games/new' component={GameNew}/>
        <Route path='/games/:gamename/gameMasterNotebook/new' component={GMNotebookNew}/>
        
        {/* invite */}
        <Route path='/games/:gamename/invite/:id' component={InviteShow}/>
        
        {/* Game Master Notes */}
        <Route path='/games/:gamename/gameMasterNotebook/:gmnotebookname/notes/new' component={GMNoteNew}/>
        <Route path='/games/:gamename/gameMasterNotebook/:gmnotebookname/notes/:id/edit' component={GMNoteEdit}/>
        <Route path='/games/:gamename/gameMasterNotebook/:gmnotebookname/notes/:id' component={GMNoteShow}/>

        {/* Game Master Notebooks */}
        <Route path='/games/:gamename/gameMasterNotebook/:gmnotebookname' component={GMNotebookShow}/>

        {/* Character Notes */}
        {/* <Route path='/characterNotebooks/:characternotebookname/notes/new' component={CharacterNoteNew}/> */}
        {/* <Route path='/characterNotebooks/:characternotebookname/notes/:id/edit' component={CharacterNoteEdit}/> */}
        <Route path='/games/:gamename/characterNotebooks/:characternotebookname/notes/:id' component={CharacterNoteShow}/>

        {/* Character Notebooks */}
        <Route path='/games/:gamename/characterNotebooks/:characternotebookname' component={CharacterNotebookShow}/>

        {/* Games  */}
        <Route path='/games/:gamename' component={GameShow}/>


      </Switch>
    </div>
  );
}

export default App;
