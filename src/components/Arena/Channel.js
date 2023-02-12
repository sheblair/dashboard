import React from "react"
import Block from "./Block"

export default function Channel({ channel }) {

    return (
        <div className="arena-container">
            <div className="arena-channel-list">{channel.map(block => <Block key={block.id} block={block}/>)}</div>
        </div>
    )
}