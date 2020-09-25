import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import GMNoteCard from './GMNotes/GMNoteCard'

class GMNotebookShow extends Component {
    state = { 
      gmNotebook: "", 
    };

    componentDidMount() {
      const path = this.props.location.pathname.split("/");
      const id = parseInt(path[path.length - 1]);
      fetch(`http://localhost:4000/game_master_notebooks/${id}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
            gmNotebook: data,
        })
      })
    }

    renderGMNotes = () => {
        const gmNotes = this.state.gmNotebook.game_master_notes
        if (gmNotes) {
        return gmNotes.map(note => (
            <GMNoteCard 
            key={note.id}
            gmNotebookName={this.state.gmNotebook.name}
            gmNote={note}
            />
        ));}
      }

    render () {
        const gmNotebook = this.state.gmNotebook
    return (
        <div className="ui item">
          <h1>{gmNotebook.name}</h1>
          <div>
              {this.renderGMNotes()}<br/><br/>
              <Link to={'/'+this.state.gmNotebook.name+'/notes/new'}>New Note</Link>
          </div>
        </div>
    );
    };
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(GMNotebookShow)