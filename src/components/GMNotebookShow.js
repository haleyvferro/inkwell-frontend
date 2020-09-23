import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import GMNoteCard from './GMNoteCard'

class GMNotebookShow extends Component {
    state = { id: "", gmNotebook: "", gmNotes: "" };

    componentDidMount() {
      const path = this.props.location.pathname.split("/");
      const id = parseInt(path[path.length - 1]);
      const gmNotebook = this.props.auth.game_master_notebooks.find(gmNotebook => gmNotebook.id === id)
      const gmNotes = gmNotebook.gm_notes
      this.setState({
          id: id,
          gmNotebook: gmNotebook,
          gmNotes: gmNotes,
    })
    }

    renderGMNotes = () => {
        const gmNotes = this.state.gmNotes
        if (gmNotes) {
        console.log(gmNotes)
        return gmNotes.map(note => (
            <GMNoteCard 
            gmNotebookName={this.state.gmNotebook.name}
            key={note.id} 
            gmNote={note}
            />
        ));}
      }

    render () {
        // const id = this.state.id
        const gmNotebook = this.state.gmNotebook
        // const gmNotes = gmNotebook.gm_notes
    return (
        <div className="ui item">
            <h1>{this.state.gmNotebook.name}</h1>
        <div>
            {this.renderGMNotes()}
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