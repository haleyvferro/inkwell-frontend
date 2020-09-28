import React, {Component} from 'react';
import {connect} from 'react-redux'


class InvitesContainer extends Component {

    componentDidMount(){
        const invitesPendingArr = this.props.auth.game_players
        if (invitesPendingArr){
            const invitesPending = invitesPendingArr.filter(invite => invite.invite_pending !== true)
            console.log(invitesPending, invitesPendingArr)
        } else {
            console.log('nothing here, bro')
        }
    }

    render(){
    
        return (
            <div>
                'hi'
            </div>
        )
    }
}

const mapStateToProps= (state) => {
    return {
      auth: state.auth,
    }
  }

export default connect(mapStateToProps, null)(InvitesContainer)