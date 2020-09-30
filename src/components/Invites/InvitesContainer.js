import React, {Component} from 'react';
import {connect} from 'react-redux'
import InviteCard from './InviteCard'


class InvitesContainer extends Component {

    findInvites(){
        const invitesPendingArr = this.props.auth.game_players
        if (invitesPendingArr){
            const invitesPending = invitesPendingArr.filter(invite => invite.invite_pending === true)
            
            if (invitesPending.length > 0){
                return invitesPending.map(invite => (
                    <InviteCard invite={invite}/>
                ))
            }
            else { return null
            }
        } else { return null
        }
    }

    // componentDidMount(){
        
    // }

    render(){
    
        return (
            <div>
                hi
                {this.findInvites()}
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