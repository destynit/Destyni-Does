import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Home, About, Work, Contact} from "./pages"

export default function App() {
    return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/work">
                <Work />
            </Route>
            <Route path="/about">
               <About /> 
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>

        </Switch>
    </Router>
    )
}
 