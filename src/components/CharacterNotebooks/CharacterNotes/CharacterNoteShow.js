import React, {Component} from 'react';
import {connect} from 'react-redux'


class CharacterNoteShow extends Component {
    render () {
        return(
           <div>hi</div>
        )
    }
}

const mapStateToProps= (state) => {
    return {
      auth: state.auth,
    }
  }
  
//   const mapDispatchToProps = {
//       deleteGMNote
//   }
  
  export default connect(mapStateToProps, null)(CharacterNoteShow)