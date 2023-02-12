import React, { useState, useEffect } from "react"
import Channel from "./Channel"


export default function Arena() {
    // render contents by iterating over array
    //      creating objects for display:
    //          title: title, imgUrl: url, etc.

    const [channel, setChannel] = useState([])

    useEffect(() => {
        fetch("http://api.are.na/v2/channels/entanglement-g4gmm7njxho/contents")
        .then((response) => response.json())
        .then((data) => {
            const contents = data.contents;
            setChannel(contents)
        })
        .catch((error) => console.log(error))

    }, [])

    console.log(channel)

   return (
        <div className="widget">
            <Channel channel={channel}/>
        </div>
    )
}