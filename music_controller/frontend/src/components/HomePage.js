import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

import RoomJoinPage from './RoomJoinPage'
import CreateRoomPage from './CreateRoomPage'

export default class HomePage extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route path='/join' component={RoomJoinPage}></Route>
                    <Route path='/create' component={CreateRoomPage}></Route>
                    <Route path='/'><p>This is home page</p></Route>
                </Switch>
            </Router>
        )
    }
}
