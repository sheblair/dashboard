import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import Grid from "./components/Grid"
// import Instructions from "./components/Instructions"
import './App.css';

// what should App contain?
//    I think in the first iteration at least I should build it with one component from each category
//    I can add more later depending on how much time it takes
//
//    Iteration 1: spotify, one radio, goodreads, arena, substack
//
//
// a Nav component:
//    - How to Use instructions
//    - Login component
//    - Account (link to new page with account settings where you control widgets)
// a Grid component to hold all the widgets
// Widgets (each one a component that should have some form of integrated controls):
//    - Music
//        - Spotify
//        - YouTube
//        - Radio stations
//        - etc...
//    - Reading
//        - Goodreads
//        - Literal
//        - etc...
//    - Movies
//        - Google Play watchlist
//        - Netflix watchlist
//        - etc...
//    - Social
//        - Arena (integrated controls to choose which channel you want to display??)
//        - Tumblr
//        - Twitter
//        - etc...
//    - RSS Feed / reading list
//        - Substack
//        - etc...
//    - Todoist? or to-do apps

function App() {

  function returnHome() {
    // render Grid
    console.log("home")
  }

  function displayInstructions() {
    // render Instructions
    console.log("how to use")
  }

  function displayAccountSettings() {
    // render Settings
    console.log("account settings")
  }

  function displayLogin() {
    // render Login
    console.log("login")
  }


  return (
    <div className="container">
      <Header 
        returnHome={returnHome}
        displayInstructions={displayInstructions} 
        displayAccountSettings={displayAccountSettings} 
        displayLogin={displayLogin}
      />
      <main>
        {/* conditionally render <Grid />, <Instructions />, or <Account /> or <Login /> */}
        <Grid />
      </main>
    </div>
    
  );
}

export default App;
