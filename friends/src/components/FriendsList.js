import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

class FriendsList extends React.Component {
    state = {
        friends:[
        ]
    }


componentDidMount() {
    this.getData();
}

getData = () => {
    axiosWithAuth()
    .get('/api/friends')
    .then(res=> {
        console.log(res.data)
        this.setState({
            friends: res.data
        })
    })
    .catch(err => {
        console.log('error', err)
    })
}

render() {
    return(
        <div>
            <h1>Friend List</h1>
            <AddFriend />
            {this.state.friends.map(item => {
                return (
                    <>
                    <h1>{item.name}</h1>
                    <h1>{item.age}</h1>
                    <h1>{item.email}</h1>
                    </>
                )
            })}
        </div>
    )
}
}

export default FriendsList;