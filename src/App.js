import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Home, Gallery, About} from "./pages"

export default function App() {
    return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/gallery">
                <Gallery />
            </Route>
            <Route path="/contact">
                <p> I will be the contact page! </p>
            </Route>

        </Switch>
    </Router>
    )
}
