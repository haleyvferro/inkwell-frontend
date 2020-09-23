import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import GMNoteCard from './GMNoteCard'

class GMNoteShow extends Component {
    render () {
        return (
            "This is a note page!"
        );
    };
}

const mapStateToProps= (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(GMNoteShow)