import Nav from "./Nav";
import React from "react";

export default function Header({ returnHome, displayInstructions, displayAccountSettings, displayLogin }) {
    return (
        <div className="header">
            <h1 onClick={returnHome}>dashboard</h1>
            <Nav 
                displayInstructions={displayInstructions} 
                displayAccountSettings={displayAccountSettings} 
                displayLogin={displayLogin}
            />
        </div>
        
    )
}