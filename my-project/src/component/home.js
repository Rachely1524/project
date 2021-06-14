import React from 'react';
import Menue from './menu'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Enter from './enter'
import ShowUsers from './showUsers';
import { Provider } from 'react-redux';
import store from '../redux/store'
import ViewOne from './viewOne'
export default function Home(props) {
    return (
        <>
            <Router>
                <Menue></Menue>
                <Switch>
                    <Route path="/enter">
                        <Enter></Enter>
                    </Route>
                    <Route path="/viewOne">
                        <ViewOne></ViewOne>
                    </Route>
                    <Route path="/showUsers">
                        <ShowUsers></ShowUsers>
                    </Route>
                </Switch>
                   </Router>
        </>
    )
}