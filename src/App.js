import React from "react";
import "./App.css";
import AppNavBar from "./components/structure/AppNavBar";
import Landing from "./components/landing/Landing";
import About from "./components/landing/About";
import Contact from "./components/landing/Contact";
import Footer from "./components/structure/Footer";
import SignIn from "./components/login/SignIn";
import VolunteerRegistration  from "./components/volunteerRegistration/VolunteerRegistration"
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <AppNavBar />
                <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/login">
                    <SignIn />
                </Route>      
                <Route path="/volunteerRegistration">
                    <VolunteerRegistration />
                </Route>             
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
