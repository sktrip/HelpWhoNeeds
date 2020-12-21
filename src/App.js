import React from "react"
import "./App.css"
import AppNavBar from "./components/structure/AppNavBar"
import Landing from "./components/landing/Landing"
import Footer from "./components/structure/Footer"

function App() {
    return (
        <div className="App">
            <AppNavBar />
            <Landing />
            <Footer />
        </div>
    );
}

export default App;
