import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Home, HomeD, About, Faqs} from "./pages"

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
            <Route path="/home">
                <HomeD />
            </Route>
            <Route path="/faqs">
               <Faqs /> 
            </Route>
            <Route path="/contact">
                <p> I will be the contact page! </p>
            </Route>
            
        </Switch>
    </Router>
    )
}
