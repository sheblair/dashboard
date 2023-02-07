import React from "react"
import Instructions from "./Instructions"

export default function Nav({ displayInstructions, displayAccountSettings, displayLogin }) {
    return (
        <ul className="nav">
            <Instructions displayInstructions={displayInstructions}/>
            {/* conditionally render <Settings /> or <Login /> depending on whether user is logged in or not */}
        </ul>
    )
}