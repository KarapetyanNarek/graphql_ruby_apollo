import React from 'react';
import Users from './Users';

class App extends React.Component {
    state = {
        selectedUser: null
    }

    selectUser = (user) => {
        this.selectState({selectedUser: user})
    }

    render() {
        return (
            <div>
                {this.state.selectedUser ?
                <User user={this.state.selectedUser} selectUser={this.selectUser}/> :
                <Users selectUser = {this.selectUser} />
            }
            </div>
        )
    }
}