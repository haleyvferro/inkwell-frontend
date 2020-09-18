import React from 'react';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import GMNotebooksContainer from './GMNotebooksContainer';

function Dashboard() {
  return (
    <div className={null}>
        <GMNotebooksContainer />
        {/* <CharacterNotebooksContainer/> */}
    </div>
  );
}

export default Dashboard;
