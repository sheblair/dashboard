import React from "react"

export default function Block({block: { description, id, image, source, title }}) {
    return (
        <div className="arena-block">
            {image ? <img alt="block" src={image.display.url} className="arena-img"></img> : null}
            <p className="arena-description">{description}</p>
            <p className="arena-title">{title}</p>
        </div>
    )
}